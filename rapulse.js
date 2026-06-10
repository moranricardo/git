import { execSync } from 'child_process';
import { writeFileSync, existsSync, readFileSync } from 'fs';

// 1. Radio de Saneamiento: Filtro anti-XSS de Gerrit
function cleanGerritResponse(rawText) {
    return rawText.replace(/^\)\]\}'/, '').trim();
}

async function mostrarDashboard() {
    console.log("========================================");
    console.log("   DASHBOARD DE MONITOREO DE PROYECTO   ");
    console.log("========================================\n");

    // BLOCK 1: Escaneo Local y Sincronización en la Nube
    console.log("--- ESTADO EN SERVIDOR GITHUB ---");
    try {
        const gitStatus = execSync('git status --short').toString();
        console.log(gitStatus || "Todo limpio (Entorno de Actions impecable)");
    } catch (e) {
        console.log("Error al verificar estado local o repositorio Git no inicializado.");
    }

    // BLOCK 2: Escaneo Remoto y Detección de Deltas (Gerrit LineageOS)
    console.log("\n--- AUDITORÍA INTELIGENTE DE GERRIT (KERNEL/BUILD) ---");
    const url = 'https://review.lineageos.org/changes/?q=status:open';
    const archivoEstado = 'gerrit-state.json';
    
    try {
        const response = await fetch(url);
        const rawText = await response.text();
        const cleanData = cleanGerritResponse(rawText);
        const changes = JSON.parse(cleanData);

        // Filtrado por el criterio de interés del Núcleo
        const actuales = changes.filter(change => {
            const proj = change.project.toLowerCase();
            return proj.includes('kernel') || proj.includes('build');
        });

        // Cargar base de datos de telemetría (historial previo)
        let idsPrevios = new Set();
        if (existsSync(archivoEstado)) {
            try {
                const contenidoPrevio = JSON.parse(readFileSync(archivoEstado, 'utf-8'));
                if (contenidoPrevio.cambios) {
                    idsPrevios = new Set(contenidoPrevio.cambios.map(c => c._number));
                }
            } catch (e) {
                console.log("⚠️ Archivo de estado previo corrupto. Reindexando...");
            }
        }

        // Encontrar nuevos deltas desde la última ejecución
        const nuevosCambios = actuales.filter(c => !idsPrevios.has(c._number));

        console.log(`• Monitoreando un total de [${actuales.length}] proyectos de Kernel/Build.`);
        
        if (nuevosCambios.length > 0) {
            console.log(`\n🚨 ¡ALERTA! SE DETECTARON ${nuevosCambios.length} NUEVAS ACTIVIDADES:`);
            console.log("----------------------------------------");
            // Mostramos los primeros 5 deltas más nuevos para no saturar la pantalla
            nuevosCambios.slice(0, 5).forEach(c => {
                console.log(`🆕 [${c.project.split('/').pop()}] ${c.subject} (ID: ${c._number})`);
            });
            if (nuevosCambios.length > 5) console.log(`... y ${nuevosCambios.length - 5} cambios más.`);
            console.log("----------------------------------------");
        } else {
            console.log("\n✅ Todo está en orden. No hay cambios nuevos en el horizonte.");
            
            // Vista rápida del Top 3 de la cola general si no hay novedades
            console.log("\nÚltimos parches en revisión activa:");
            actuales.slice(0, 3).forEach(c => {
                console.log(`• [${c.project.split('/').pop()}] ${c.subject}`);
            });
        }

        // Actualizar el registro del Maat (guardar estado actual)
        const reporte = {
            timestamp: new Date().toISOString(),
            total_detectado: actuales.length,
            cambios: actuales
        };
        writeFileSync(archivoEstado, JSON.stringify(reporte, null, 2));

    } catch (error) {
        console.log("❌ Error al consultar o parsear Gerrit:", error.message);
    }
    
    console.log("\n========================================");
}

mostrarDashboard();
