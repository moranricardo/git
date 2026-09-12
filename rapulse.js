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
        'Cache-Control': 'no-cache',
        'Accept': 'application/json, text/plain, */*',
        'Sec-CH-UA': `"Not/A)Brand";v="8", "Chromium";v="${majorVersion}", "Google Chrome";v="${majorVersion}"`
    };
}

async function auditarGerrit() {
    const url = 'https://review.lineageos.org/changes/?q=status:open&n=500';
    try {
        const response = await fetch(url, { headers: obtenerCabecerasAnonimas() });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const rawText = await response.text();
        const changes = JSON.parse(cleanGerritResponse(rawText));

        const criticos = [];
        const motorola = [];

        for (const change of changes) {
            const project = change.project || '';
            const subject = change.subject || '';
            const id = change._number;
            const item = `- **[${project}]** ${subject} *(ID: [${id}](https://review.lineageos.org/c/${id}))*`;

            if (project.includes('kernel') || project.includes('hardware') || subject.toLowerCase().includes('fix')) {
                criticos.push(item);
            }
            if (project.includes('motorola')) {
                motorola.push(item);
            }
        }

        const now = new Date().toISOString();
        const readmeContent = `# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-${encodeURIComponent(now.split('T')[0])}-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-${changes.length}-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (${criticos.length})

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

${criticos.slice(0, 30).join('\n')}

</details>

## 📱 Línea Motorola Activa (${motorola.length})

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

${motorola.slice(0, 30).join('\n')}

</details>

---
*Generado automáticamente por Ra Pulse*
`;

        await writeFile('README.md', readmeContent);
        console.log('README.md actualizado correctamente.');
    } catch (err) {
        console.error('Error en auditoría:', err.message);
    }
}

auditarGerrit();
