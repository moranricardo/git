function cleanGerritResponse(rawText) {
    return rawText.replace(/^\)\]\}'/, '').trim();
}

function obtenerCabecerasAnonimas() {
    const versionesChrome = ['128.0.0.0', '129.0.0.0', '130.0.0.0'];
    const chromeVersion = versionesChrome[Math.floor(Math.random() * versionesChrome.length)];
    const majorVersion = chromeVersion.split('.')[0];

    return {
        'User-Agent': `Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/537.36`,
        'Accept-Language': 'es-419,es;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache',
        'Accept': 'application/json, text/plain, */*',
        'Sec-CH-UA': `"Chromium";v="${majorVersion}", "Google Chrome";v="${majorVersion}"`
    };
}

/**
 * Consulta la API de LineageOS Gerrit por URL o por ID de cambio.
 * @param {string|number} target - URL completa o ID del cambio (ej. 502186).
 * @param {number} [timeoutMs=8000] - Tiempo límite de respuesta en ms.
 * @param {number} [retries=2] - Número de reintentos en caso de fallo de red.
 */
export async function fetchGerritChange(target, timeoutMs = 8000, retries = 2) {
    const url = typeof target === 'number' || !target.startsWith('http')
        ? `https://review.lineageos.org/changes/${target}/detail`
        : target;

    for (let intento = 0; intento <= retries; intento++) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: obtenerCabecerasAnonimas(),
                signal: controller.signal
            });

            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

            const rawText = await response.text();
            return JSON.parse(cleanGerritResponse(rawText));
        } catch (error) {
            const esUltimoIntento = intento === retries;
            if (error.name === 'AbortError') {
                console.error(`[Oráculo Error] Tiempo agotado (${timeoutMs}ms) al consultar: ${url}`);
            } else if (esUltimoIntento) {
                console.error(`[Oráculo Error] Fallo tras ${retries + 1} intentos en ${url}:`, error.message);
            }

            if (esUltimoIntento) return null;
            await new Promise(res => setTimeout(res, 1000)); // Espera 1s antes de reintentar
        } finally {
            clearTimeout(timeoutId); // Garantiza que siempre se limpie el temporizador
        }
    }
}
