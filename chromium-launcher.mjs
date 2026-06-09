import puppeteer from 'puppeteer-core';

export const launchBrowser = async () => {
  // Detectar dinámicamente si estamos en la nube o en el móvil
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
  
  // Asignar la ruta correcta del binario según el entorno
  const executablePath = isGitHubActions
    ? '/usr/bin/chromium-browser' // Ruta estándar en servidores Ubuntu de GitHub
    : '/data/data/com.termux/files/usr/bin/chromium-browser'; // Tu ruta local en Termux

  console.log(`[Lanzador] Iniciando navegador en entorno: ${isGitHubActions ? 'Nube (GitHub)' : 'Local (Termux)'}`);

  return await puppeteer.launch({
    executablePath,
    headless: true, // Optimización crítica: Ejecución en segundo plano sin interfaz gráfica
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage', // Evita problemas de memoria compartida en contenedores
      '--no-zygote',
      '--single-process', // Ahorro drástico de CPU
      '--disable-gpu'     // Desactiva gráficos innecesarios en servidores
    ]
  });
};
