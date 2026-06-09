import { execSync } from 'child_process';

function cleanGerritResponse(rawText) {
    // Limpia los caracteres anti-XSS )]}' típicos de la API de Gerrit
    return rawText.replace(/^\)\]\}'/, '').trim();
}

async function mostrarDashboard() {
    console.log("========================================");
    console.log("   DASHBOARD DE MONITOREO DE PROYECTO   ");
    console.log("========================================\n");

    // 1. Escaneo Local en la Nube
    console.log("--- ESTADO EN SERVIDOR GITHUB ---");
    try {
        const gitStatus = execSync('git status --short').toString();
        console.log(gitStatus || "Todo limpio (Entorno de Actions impecable)");
    } catch (e) {
        console.log("Error al verificar estado local.");
    }

    // 2. Escaneo Remoto (Gerrit LineageOS)
    console.log("\n--- ÚLTIMOS CAMBIOS EN GERRIT (LINEAGEOS) ---");
    const url = 'https://review.lineageos.org/changes/?q=status:open';
    try {
        const response = await fetch(url);
        const rawText = await response.text();
        const cleanData = cleanGerritResponse(rawText);
        const changes = JSON.parse(cleanData);

        changes.slice(0, 5).forEach(change => {
            console.log(`Proyecto: ${change.project.split('/').pop()}`);
            console.log(`Cambio:   ${change.subject}`);
            console.log(`Estado:   ${change.status} | ID: ${change._number}`);
            console.log('----------------------------------------');
        });
    } catch (error) {
        console.log("Error al consultar Gerrit:", error.message);
    }
}

mostrarDashboard();
