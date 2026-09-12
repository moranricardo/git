import { writeFile } from 'fs/promises';

function cleanGerritResponse(rawText) {
    return rawText.replace(/^\)\]\}'/, '').trim();
}

function obtenerCabecerasAnonimas() {
    const versionesChrome = ['124.0.0.0', '125.0.0.0', '126.0.0.0'];
    const chromeVersion = versionesChrome[Math.floor(Math.random() * versionesChrome.length)];
    const majorVersion = chromeVersion.split('.')[0];

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
        'Sec-CH-UA': `"Not/A)Brand";v="8", "Chromium";v="${majorVersion}", "Google Chrome";v="${majorVersion}"`,
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
        return JSON.parse(cleanGerritResponse(rawText));
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

    if (!Array.isArray(data)) return;

    console.log(`✅ [OK] Datos recibidos. Total de cambios: ${data.length}`);

    await writeFile('gerrit-state.json', JSON.stringify(data));

    const palabrasCriticas = ['fix', 'security', 'stable', 'vulnerability', 'panic', 'err'];
    const parchesCriticos = [];
    const parchesMotorola = [];

    for (const change of data) {
        if (!change.project || !change.subject) continue;

        const projName = change.project.split('/').pop();
        const projLower = projName.toLowerCase();
        const asunto = change.subject.toLowerCase();

        const item = { projName, subject: change.subject, _number: change._number };

        if (projLower.includes('motorola')) {
            parchesMotorola.push(item);
        } else if (palabrasCriticas.some(palabra => asunto.includes(palabra))) {
            parchesCriticos.push(item);
        }
    }

    let markdown = `# ⚡ Ra Pulse - Telemetría de Kernels\n\n`;
    markdown += `> Monitor automatizado para el seguimiento y auditoría de parches críticos en proyectos LineageOS y dispositivos Motorola.\n\n`;
    markdown += `--- \n\n`;
    markdown += `📅 **Última sincronización:** \`${new Date().toISOString()}\`  \n`;
    markdown += `📊 **Total de cambios analizados:** \`${data.length}\`  \n\n`;

    markdown += `## 🚨 Parches Críticos Detectados (${parchesCriticos.length})\n\n`;
    if (parchesCriticos.length === 0) {
        markdown += `*No se detectaron anomalías críticas en el horizonte.*\n`;
    } else {
        parchesCriticos.slice(0, 10).forEach(c => {
            markdown += `- **[${c.projName}]** ${escapeMarkdown(c.subject)} *(ID: [${c._number}](https://review.lineageos.org/c/${c._number}))*\n`;
        });
    }

    markdown += `\n## 📱 Línea Motorola Activa (${parchesMotorola.length})\n\n`;
    if (parchesMotorola.length === 0) {
        markdown += `*Sin actividad reciente en ramas de Motorola.*\n`;
    } else {
        parchesMotorola.slice(0, 10).forEach(c => {
            markdown += `- **[${c.projName}]** ${escapeMarkdown(c.subject)} *(ID: [${c._number}](https://review.lineageos.org/c/${c._number}))*\n`;
        });
    }

    markdown += `\n---\n*Generado automáticamente por [Ra Pulse](rapulse.js)*\n`;

    await writeFile('README.md', markdown);
    console.log("📄 Dashboard humano 'README.md' generado con éxito.\n");
}

runPulse();
