# Publicar la wiki en GitHub Pages

Esta copia del proyecto incluye una portada VitePress, menú lateral, búsqueda, y publicación automática en GitHub Pages. Conserva los Markdown originales.

## Verla localmente

1. Instala Node.js 22 o superior.
2. Abre esta carpeta en VS Code y abre una terminal.
3. Ejecuta `npm install`.
4. Ejecuta `npm run docs:dev`.
5. Abre la URL que muestre VitePress (normalmente `http://localhost:5173`).

Para comprobar la versión de producción: `npm run docs:build` y `npm run docs:preview`.

## Compartir un enlace público

1. En GitHub crea un repositorio **público** llamado `trading-bot` (puedes usar otro nombre). No añadas un README inicial.
2. Abre una terminal dentro de esta carpeta y ejecuta:

   ```bash
   git init
   git add .
   git commit -m "Wiki inicial"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/trading-bot.git
   git push -u origin main
   ```

   Sustituye `TU-USUARIO` y `trading-bot` según tu repositorio. Si prefieres GitHub Desktop, crea/publica el repositorio desde ahí.
3. En el repositorio entra a **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. En la pestaña **Actions**, verifica que finalice correctamente «Publicar wiki en GitHub Pages».
5. Comparte `https://TU-USUARIO.github.io/trading-bot/` (o `https://TU-USUARIO.github.io/NOMBRE-REPO/` si cambiaste el nombre).

Cada nuevo `git push` a `main` vuelve a publicar automáticamente la wiki.

### Si usas otro nombre de repositorio

El archivo `.vitepress/config.mts` detecta automáticamente el nombre del repo en GitHub Actions. Para la vista local utiliza `/`. Si configuras un dominio personalizado, revisa el valor de `base`.

### Atención a la privacidad

**La wiki publicada es pública.** Revisa documentos, claves, datos financieros privados y rutas locales antes de subir el repositorio. GitHub Pages no protege el sitio con contraseña por defecto.

### Acerca de los diagramas

Los bloques de código Mermaid se muestran como bloques de código en esta versión mínima. Para renderizarlos como diagramas interactivos se puede añadir una integración Mermaid compatible con la versión de VitePress instalada.
