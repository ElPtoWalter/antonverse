# ANTONVERSO · Proyecto web listo para GitHub Pages

## Qué incluye
- `index.html`
- `style.css`
- `script.js`
- `assets/images/` con la galería de Antón
- `assets/audio/himno-anton.mpeg` para el hilo musical

## Qué hace esta versión
- Diseño **cutre-premium** pensado para móvil.
- Pantalla de entrada para arrancar la música.
- Cada móvil recibe **5 tokens**.
- Los retos comprados se guardan en el propio navegador usando `localStorage`.
- Se puede:
  - poner nombre,
  - gastar tokens,
  - ver retos comprados,
  - copiar resumen,
  - resetear la sesión.

## Importante
Esta versión es **frontend puro**. Eso significa:
- funciona perfecta en **GitHub Pages**,
- pero los tokens y compras son **por móvil / por navegador**,
- no hay base de datos compartida entre todos.

Si luego quieres, se puede hacer una **v2 conectada a Supabase o Firebase** para que todos voten sobre una base común y se vea en tiempo real.

## Cómo subirlo a GitHub Pages
1. Crea un repositorio nuevo en GitHub.
2. Sube todo el contenido de esta carpeta.
3. Ve a **Settings > Pages**.
4. En **Build and deployment**, elige:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/root`
5. Guarda los cambios.
6. GitHub te dará una URL pública.

## Sugerencia
Si quieres que quede todavía más canalla, la siguiente fase puede ser:
- pantalla final de "sentencia activada",
- ranking de retos más caros,
- modo admin,
- panel compartido en tiempo real,
- QR para abrir la web en la despedida.
