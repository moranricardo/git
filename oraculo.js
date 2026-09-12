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

export async function fetchGerritChange(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: obtenerCabecerasAnonimas()
        });

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const rawText = await response.text();
        return JSON.parse(cleanGerritResponse(rawText));
    } catch (error) {
        console.error(`[Oráculo Error] Fallo al consultar ${url}:`, error.message);
        return null;
    }
}
