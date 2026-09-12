export async function fetchGerritChange(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
                'Accept': 'application/json, text/plain, */*'
            }
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }

        let text = await response.text();
        text = text.replace(/^\)\]\}'/, '').trim();

        return JSON.parse(text);
    } catch (error) {
        console.error(`[Oráculo Error] Fallo al consultar ${url}:`, error.message);
        return null;
    }
}
