import { writeFile, appendFile } from 'fs/promises';
import puppeteer from 'puppeteer';

const [,, url, selector] = process.argv;
const logFile = 'scraping.log';
const outFile = 'resultado.json';

if (!url || !selector) {
    console.error("Uso: node test.mjs <url> <selector>");
    process.exit(1);
}

let browser;

try {
    console.log(`[${new Date().toISOString()}] Iniciando extracción en: ${url}`);

    browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        headless: true
    });

    const page = await browser.newPage();
    
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    const result = await page.$eval(selector, el => el.textContent.trim());

    const data = { url, selector, result, timestamp: new Date().toISOString() };

    await writeFile(outFile, JSON.stringify(data, null, 2));
    await appendFile(logFile, `[OK] ${new Date().toISOString()} - ${url} - Extraído: ${result}\n`);
    console.log("Extracción exitosa.");

} catch (error) {
    const errorMsg = `[ERROR] ${new Date().toISOString()} - ${url} - ${error.message}\n`;
    await appendFile(logFile, errorMsg).catch(() => {});
    console.error(errorMsg);
    process.exitCode = 1;
} finally {
    if (browser) {
        await browser.close();
    }
}
