import { launchBrowser } from './chromium-launcher.mjs';

try {
  console.log('Iniciando Chromium desde el sistema...');
  const browser = await launchBrowser();
  const version = await browser.version();
  console.log(`Navegador iniciado exitosamente: ${version}`);
  await browser.close();
} catch (error) {
  console.error('Error al iniciar el navegador:', error);
}
