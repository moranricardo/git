import { writeFileSync, existsSync, readFileSync } from 'fs';

// --- 1. LIMPIEZA ANTI-XSS ---
function cleanGerritResponse(rawText) {
    // Elimina el prefijo )]}' que Gerrit usa como seguridad
    return rawText.replace(/^\)\]\}'/, '').trim();
}

// --- 2. GENERADOR DE HUELLA ANÓNIMA INTELIGENTE ---
function obtenerCabecerasAnonimas() {
    // Versiones realistas de Chrome Mobile
    const versionesChrome = ['124.0.0.0', '125.0.0.0', '126.0.0.0'];
    const chromeVersion = versionesChrome[Math.floor(Math.random() * versionesChrome.length)];
    
    return {
        // Huella de Identificación Base (Chrome Mobile - Español Latinoamericano)
        'User-Agent': `Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/537.36`,
        'Accept-Language': 'es-419,es;q=0.9,en;q=0.8',
        
        // Cabeceras de Privacidad y Anti-Tracking
        'DNT': '1',
        'Sec-GPC': '1',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        
        // Negociación Estándar
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        
        // Anti-Fingerprinting Avanzado
        'Sec-CH-UA': `"Not/A)Brand";v="8", "Chromium";v="${chromeVersion.split('.')[0]}", "Google Chrome";v="${chromeVersion.split('.')[0]}"`,
        'Sec-CH-UA-Mobile': '?1',
        'Sec-CH-UA-Platform': '"Android"'
    };
}

// --- 3. CANAL DE DATOS BLINDADO ---
async function fetchGerritData(url) {
    try {
        // Inyección de la huella en la petición fetch
        const response = await fetch(url, {
            method: 'GET',
            headers: obtenerCabecerasAnonimas(),
            keepalive: true
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

// --- 4. ORQUESTADOR PRINCIPAL (RA PULSE) ---
async function runPulse() {
    console.log("========================================");
    console.log(" ⚡ [PULSE] Iniciando ciclo de auditoría ");
    console.log("========================================\n");

    const url = 'https://review.lineageos.org/changes/?q=status:open';
    const data = await fetchGerritData(url);
    
    if (data) {
        console.log(`✅ [OK] Datos recibidos bajo huella es-419. Total de cambios: ${data.length}`);
        
        // A) GUARDAR TELEMETRÍA CRUDA
        writeFileSync('gerrit-state.json', JSON.stringify(data, null, 2));
        console.log("💾 Estado de telemetría (gerrit-state.json) actualizado.");

        // B) FILTRADO AVANZADO PARA DASHBOARD
        const palabrasCriticas = ['fix', 'security', 'stable', 'vulnerability', 'panic', 'err'];
        const parchesCriticos = [];
        const parchesMotorola = [];

        data.forEach(change => {
            if (!change.project || !change.subject) return;

            const proyecto = change.project.split('/').pop().toLowerCase();
            const asunto = change.subject.toLowerCase();

            if (proyecto.includes('motorola')) {
                parchesMotorola.push(change);
            }
            else if (palabrasCriticas.some(palabra => asunto.includes(palabra))) {
                parchesCriticos.push(change);
            }
        });

        // C) GENERACIÓN DE REPORTE VISUAL (README.md)
        let markdown = `# ⚡ Ra Pulse - Telemetría de Kernels\n\n`;
        markdown += `*Última actualización automatizada: ${new Date().toISOString()}*\n\n`;
        
        markdown += `## 🚨 Parches Críticos Detectados (${parchesCriticos.length})\n`;
        if (parchesCriticos.length === 0) markdown += `*No se detectaron anomalías críticas en el horizonte.*\n`;
        parchesCriticos.slice(0, 10).forEach(c => {
            markdown += `- **[${c.project.split('/').pop()}]** ${c.subject} *(ID: [${c._number}](https://review.lineageos.org/c/${c._number}))*\n`;
        });

        markdown += `\n## 📱 Línea Motorola Activa (${parchesMotorola.length})\n`;
        if (parchesMotorola.length === 0) markdown += `*Sin actividad reciente en ramas de Motorola.*\n`;
        parchesMotorola.slice(0, 10).forEach(c => {
            markdown += `- **[${c.project.split('/').pop()}]** ${c.subject} *(ID: [${c._number}](https://review.lineageos.org/c/${c._number}))*\n`;
        });

        writeFileSync('README.md', markdown);
        console.log("📄 Dashboard humano 'README.md' generado con éxito.\n");
        console.log("🏁 Ciclo de Ra completado en equilibrio.");
    }
}

// Ejecutar el motor
runPulse();
