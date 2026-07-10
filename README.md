# Antonverse v18 · nombres secretos + candado final

Versión ligera de código. No incluye assets.

Cambios:
- Añadido contador de nombres en clave descubiertos.
- Cada nombre en clave descubierto se guarda y no vuelve a sumar al contador.
- Botón para resetear la lista de nombres en clave descubiertos.
- Candado ultrasecreto final.
- Si se descubren todos los nombres en clave, se revela la putada final:
  "Contratar a Steisy".
- La putada final también aparece en la tienda/ruleta cuando el candado está abierto y entras con un nombre en clave.
- Mantiene la ruleta de v17 y el resto de mejoras.

Importante:
- Esta versión guarda el progreso en el navegador/móvil usando localStorage.
- En GitHub Pages puro no hay base de datos compartida entre todos los móviles.
- Para contador global real entre todos los invitados haría falta Firebase, Supabase o similar.

Sube a la raíz del repo:
- index.html
- style.css
- script.js
- README.md

No hace falta tocar assets. El QR no cambia mientras mantengas la misma URL de GitHub Pages.
