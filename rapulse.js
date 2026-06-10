import { execSync } from 'child_process';
import fs from 'fs';

function cleanGerritResponse(rawText) {
    return rawText.replace(/^\)\]\}'/, '').trim();
}

// --- GENERADOR DE HUELLA ANÓNIMA INTELIGENTE ---
function obtenerCabecerasAnonimas() {
    // Versiones realistas de Chrome Mobile para simular rotación menor dentro de la firma base
    const versionesChrome = ['124.0.0.0', '125.0.0.0', '126.0.0.0'];
    const chromeVersion = versionesChrome[Math.floor(Math.random() * versionesChrome.length)];
    
    return {
        // Huella de Identificación Base (Chrome Mobile - Español Latinoamericano)
        'User-Agent': `Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/537.36`,
        'Accept-Language': 'es-419,es;q=0.9,en;q=0.8',
        
        // Cabeceras de Control de Privacidad y Anonimato (Anti-Tracking)
        'DNT': '1',                                      // Do Not Track activo
        'Sec-GPC': '1',                                  // Global Privacy Control activo
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        
        // Cabeceras de Negociación Estándar de Chrome Moderno
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        
        // Estructura Anti-Fingerprinting (Emulación de Arquitectura de Cliente de Chrome)
        'Sec-CH-UA': `"Not/A)Brand";v="8", "Chromium";v="${chromeVersion.split('.')[0]}", "Google Chrome";v="${chromeVersion.split('.')[0]}"`,
        'Sec-CH-UA-Mobile': '?1',
        'Sec-CH-UA-Platform': '"Android"'
    };
}

async function mostrarDashboard() {
    console.log("========================================");
    console.log("   DASHBOARD DE MONITOREO DE PROYECTO   ");
    console.log("========================================\n");

    const url = 'https://review.lineageos.org/changes/?q=status:open';
    try {
        // Inyección de la huella a través del objeto de configuración de fetch
        const response = await fetch(url, {
            method: 'GET',
            headers: obtenerCabecerasAnonimas(),
            keepalive: true // Mantiene la conexión eficiente sin re-negociar TLS constantemente
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const rawText = await response.text();
        const cleanData = cleanGerritResponse(rawText);
        const changes = JSON.parse(cleanData);

        // --- ESTRUCTURA 1: FILTRADO AVANZADO ---
        const palabrasCriticas = ['fix', 'security', 'stable', 'vulnerability', 'panic', 'err'];
        const parchesCriticos = [];
        const parchesMotorola = [];

        changes.forEach(change => {
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

        // --- ESTRUCTURA 2: GENERADOR DE REPORTE (README.md) ---
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

        fs.writeFileSync('README.md', markdown);
        console.log("💾 Huella enmascarada. Estructuras ejecutadas y 'README.md' actualizado.");

    } catch (error) {
        console.log("Error en la ejecución de las estructuras:", error.message);
    }
}

mostrarDashboard();
