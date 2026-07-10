# Antonverse v19 · panel independiente de nombres en clave

Versión ligera de código. No incluye assets.

Cambios:
- El contador de nombres en clave ya NO depende del nombre con el que entras a la web.
- Añadido apartado propio: "Probar nombre en clave".
- Ahí se introducen los nombres de amigos y se van sumando al contador.
- Si se repite un nombre ya descubierto, no suma otra vez.
- El botón de reset limpia la lista de nombres descubiertos y vuelve a cerrar el candado.
- Entrar con un nombre de amigo sigue sirviendo para tener modo amigo/tokens, pero no suma al contador.
- Al descubrir todos los nombres se desbloquea el candado final:
  "Contratar a Steisy".

Importante:
- El progreso se guarda en localStorage del dispositivo.
- En GitHub Pages puro no hay progreso global entre móviles. Para progreso global real haría falta Firebase/Supabase.

Sube a la raíz del repo:
- index.html
- style.css
- script.js
- README.md

No hace falta tocar assets. El QR no cambia mientras mantengas la misma URL de GitHub Pages.
