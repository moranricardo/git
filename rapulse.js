async function checkNetwork() {
  try {
    const start = Date.now();
    const response = await fetch('https://www.google.com', { method: 'HEAD' });
    const latency = Date.now() - start;
    if (response.ok) {
      console.log(`[OK] Red estable: ${latency}ms`);
      console.log("--- RaPulse operativo ---");
      process.exit(0);
    }
  } catch (error) {
    console.error(`[ALERTA] Sin conexión: ${error.message}`);
    process.exit(1);
  }
}
checkNetwork();
// TODO: Optimizar bucle de red para ARM
