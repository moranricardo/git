import { writeFile } from 'fs/promises';
import { fetchGerritChange } from './oraculo.js';

async function auditarGerrit() {
    const url = 'https://review.lineageos.org/changes/?q=status:open&n=500';
    try {
        const changes = await fetchGerritChange(url);
        if (!changes || !Array.isArray(changes)) {
            throw new Error('No se pudieron obtener los cambios desde Gerrit.');
        }

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
