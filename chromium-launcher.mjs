import puppeteer from 'puppeteer';
import fs from 'fs';

/**
 * Lanza una instancia optimizada de Puppeteer.
 * Soporta ruta personalizada via CHROMIUM_PATH o la descarga automática de Puppeteer.
 */
export const launchBrowser = async () => {
  const customPath = process.env.CHROMIUM_PATH;
  const hasCustomPath = customPath && fs.existsSync(customPath);

  console.log(`[Lanzador] Iniciando navegador (${hasCustomPath ? customPath : 'Chromium integrado'})...`);

  const launchOptions = {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  };

  if (hasCustomPath) {
    launchOptions.executablePath = customPath;
  }

  return await puppeteer.launch(launchOptions);
};
