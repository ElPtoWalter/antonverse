# Antonverse v20 · panel de nombres en clave reparado

Versión ligera de código. No incluye assets.

Cambios:
- Reparado sobre una base que conserva la galería.
- La galería de fotos sigue estando en el HTML y en el script.
- Añadido apartado independiente para probar nombres en clave.
- El contador ya no depende del nombre con el que entras a la web.
- Si aciertas un nombre, suma al contador.
- Si repites un nombre ya descubierto, no suma.
- Botón para resetear solo los nombres descubiertos.
- Candado final:
  - oculto como "????????????????";
  - al descubrir todos los nombres revela "Contratar a Steisy".
- Quitados de la radio los dos audios repetidos de WhatsApp.
- Mantiene la ruleta de v17.

Sube a la raíz del repo:
- index.html
- style.css
- script.js
- README.md

No hace falta tocar assets. El QR no cambia mientras mantengas la misma URL de GitHub Pages.

Nota:
- El contador se guarda en localStorage del móvil/navegador.
- En GitHub Pages puro no hay contador global compartido entre todos los móviles.
