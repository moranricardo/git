// Estructura base para el Ciclo de Ra - Limpieza de Anti-XSS
async function fetchGerritChange(url) {
    const response = await fetch(url);
    let text = await response.text();
    
    // Limpieza del prefijo )]}' necesario para la validación del Maat
    if (text.startsWith(")]}'")) {
        text = text.substring(5);
    }
    
    return JSON.parse(text);
}
