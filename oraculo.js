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

/**
 * Consulta la API de LineageOS Gerrit por URL o por ID de cambio.
 * @param {string|number} target - URL completa o ID del cambio (ej. 502186).
 * @param {number} [timeoutMs=8000] - Tiempo límite de respuesta en ms.
 */
export async function fetchGerritChange(target, timeoutMs = 8000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const url = typeof target === 'number' || !target.startsWith('http')
        ? `https://review.lineageos.org/changes/${target}/detail`
        : target;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: obtenerCabecerasAnonimas(),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const rawText = await response.text();
        return JSON.parse(cleanGerritResponse(rawText));
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error(`[Oráculo Error] Tiempo de espera agotado al consultar: ${url}`);
        } else {
            console.error(`[Oráculo Error] Fallo al consultar ${url}:`, error.message);
        }
        return null;
    }
}
