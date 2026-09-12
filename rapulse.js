import { writeFile } from 'fs/promises';

function cleanGerritResponse(rawText) {
    return rawText.replace(/^\)\]\}'/, '').trim();
}

function obtenerCabecerasAnonimas() {
    const versionesChrome = ['124.0.0.0', '125.0.0.0', '126.0.0.0'];
    const chromeVersion = versionesChrome[Math.floor(Math.random() * versionesChrome.length)];

    return {
        'User-Agent': `Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/537.36`,
        'Accept-Language': 'es-419,es;q=0.9,en;q=0.8',
        'DNT': '1',
        'Sec-GPC': '1',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Accept': 'application/json, text/plain, */*',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Sec-CH-UA': `"Not/A)Brand";v="8", "Chromium";v="${chromeVersion.split('.')[0]}", "Google Chrome";v="${chromeVersion.split('.')[0]}"`,
        'Sec-CH-UA-Mobile': '?1',
        'Sec-CH-UA-Platform': '"Android"'
    };
}

async function fetchGerritData(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: obtenerCabecerasAnonimas()
        });

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const rawText = await response.text();
        const cleanData = cleanGerritResponse(rawText);

        return JSON.parse(cleanData);
    } catch (error) {
        console.error("❌ Fallo en el canal de datos:", error.message);
        return null;
    }
}

function escapeMarkdown(text) {
    return text.replace(/([\[\]])/g, '\\$1');
}

async function runPulse() {
    console.log("========================================");
    console.log(" ⚡ [PULSE] Iniciando ciclo de auditoría ");
    console.log("========================================\n");

    const url = 'https://review.lineageos.org/changes/?q=status:open';
    const data = await fetchGerritData(url);

    if (Array.isArray(data)) {
        console.log(`✅ [OK] Datos recibidos. Total de cambios: ${data.length}`);

        await writeFile('gerrit-state.json', JSON.stringify(data, null, 2));
        console.log("💾 Estado de telemetría (gerrit-state.json) actualizado.");

        const palabrasCriticas = ['fix', 'security', 'stable', 'vulnerability', 'panic', 'err'];
        const parchesCriticos = [];
        const parchesMotorola = [];

        data.forEach(change => {
            if (!change.project || !change.subject) return;

            const proyecto = change.project.split('/').pop().toLowerCase();
            const asunto = change.subject.toLowerCase();

            if (proyecto.includes('motorola')) {
                parchesMotorola.push(change);
            } else if (palabrasCriticas.some(palabra => asunto.includes(palabra))) {
                parchesCriticos.push(change);
            }
        });

        let markdown = `# ⚡ Ra Pulse - Telemetría de Kernels\n\n`;
        markdown += `*Última actualización automatizada: ${new Date().toISOString()}*\n\n`;

        markdown += `## 🚨 Parches Críticos Detectados (${parchesCriticos.length})\n`;
        if (parchesCriticos.length === 0) {
            markdown += `*No se detectaron anomalías críticas en el horizonte.*\n`;
        } else {
            parchesCriticos.slice(0, 10).forEach(c => {
                const projName = c.project.split('/').pop();
                markdown += `- **[${projName}]** ${escapeMarkdown(c.subject)} *(ID: [${c._number}](https://review.lineageos.org/c/${c._number}))*\n`;
            });
        }

        markdown += `\n## 📱 Línea Motorola Activa (${parchesMotorola.length})\n`;
        if (parchesMotorola.length === 0) {
            markdown += `*Sin actividad reciente en ramas de Motorola.*\n`;
        } else {
            parchesMotorola.slice(0, 10).forEach(c => {
                const projName = c.project.split('/').pop();
                markdown += `- **[${projName}]** ${escapeMarkdown(c.subject)} *(ID: [${c._number}](https://review.lineageos.org/c/${c._number}))*\n`;
            });
        }

        await writeFile('README.md', markdown);
        console.log("📄 Dashboard humano 'README.md' generado con éxito.\n");
        console.log("🏁 Ciclo de Ra completado en equilibrio.");
    }
}

runPulse();
