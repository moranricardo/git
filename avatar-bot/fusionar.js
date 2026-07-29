const Jimp = require('jimp');

async function crearAvatarCiborg() {
  console.log("Iniciando secuencia de fusión...");
  
  try {
    // Cargar las imágenes
    const catTermux = await Jimp.read('img1.jpg'); // El gato ciborg
    const octocatChrome = await Jimp.read('img2.png'); // El Octocat

    // GitHub recomienda 800x800 para avatares
    const size = 800;

    // Forzamos ambas imágenes a tener la misma escala y centrado
    catTermux.cover(size, size);
    octocatChrome.cover(size, size);

    // Recortamos la mitad izquierda del gato Termux (x:0, y:0, width:400, height:800)
    const mitadIzquierda = catTermux.crop(0, 0, size / 2, size);
    
    // Recortamos la mitad derecha del Octocat (x:400, y:0, width:400, height:800)
    const mitadDerecha = octocatChrome.crop(size / 2, 0, size / 2, size);

    // Creamos un lienzo nuevo en blanco de 800x800
    const avatarFinal = new Jimp(size, size);

    // Ensamblamos las partes
    avatarFinal.composite(mitadIzquierda, 0, 0);
    avatarFinal.composite(mitadDerecha, size / 2, 0);

    // Guardamos el resultado
    const output = 'avatar_bot_oficial.png';
    await avatarFinal.writeAsync(output);
    
    console.log(`✅ ¡Fusión completada! El avatar definitivo está listo en: ${output}`);
  } catch (error) {
    console.error("❌ Fallo en la matriz de fusión:", error.message);
    console.log("Asegúrate de que las imágenes se llamen img1.jpg e img2.png y estén en la misma carpeta.");
  }
}

crearAvatarCiborg();
