import fs from 'fs';
import puppeteer from 'puppeteer-core';

const [,, url, selector] = process.argv;
const logFile = 'scraping.log';
const outFile = 'resultado.json';

if (!url || !selector) {
    console.error("Uso: node assets/test.mjs <url> <selector>");
    process.exit(1);
}

try {
    console.log(`[${new Date().toISOString()}] Lanzando navegador...`);
    
    // Configuración para arquitectura ARM/Termux
    const browser = await puppeteer.launch({
        executablePath: '/data/data/com.termux/files/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--headless']
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Extracción real
    const result = await page.$eval(selector, el => el.textContent.trim());
    
    await browser.close();

    const data = { url, selector, result, timestamp: new Date().toISOString() };
    
    fs.writeFileSync(outFile, JSON.stringify(data, null, 2));
    fs.appendFileSync(logFile, `[OK] ${new Date().toISOString()} - ${url} - Extraído: ${result}\n`);
    console.log("Extracción exitosa.");

} catch (error) {
    const errorMsg = `[ERROR] ${new Date().toISOString()} - ${url} - ${error.message}\n`;
    fs.appendFileSync(logFile, errorMsg);
    console.error(errorMsg);
    process.exit(1);
}
