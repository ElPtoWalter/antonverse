# Antonverse v37 · fotos nuevas + sonido real de error

Versión basada en v36. No incluye modo online ni Supabase.

Cambios:
- Añadidas 10 fotos nuevas a la galería.
- Las imágenes están optimizadas en `.webp`.
- Añadido audio real de error:
  - `assets/audio/error.ogg`
  - `assets/audio/error.mp3` como respaldo
- Si alguien mete un nombre en clave incorrecto, suena el audio real de fallo.
- Si el audio no carga, usa la bocina generada por código.
- Si alguien acierta, se mantiene el `ou-yeah`.

Mantiene:
- selector de radio arreglado;
- importar nombres en bloque;
- 52 nombres en clave finales;
- cuenta atrás;
- código DulceSweet;
- tienda;
- ruleta;
- galería ampliada;
- ou-yeah real;
- candado final "Contratar a Steisy".

Para subir:
1. Sube `index.html`, `style.css`, `script.js` y `README.md` a la raíz.
2. Sube las nuevas imágenes de `assets/images/`.
3. Sube también `assets/audio/error.ogg` y `assets/audio/error.mp3`.
4. No cambies el repo ni la URL.

El QR de las camisetas no cambia.
