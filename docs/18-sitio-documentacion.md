# 18 — Sitio de documentación (opcional)

**Objetivo:** decidir si publicar esta wiki como sitio navegable sin crear otra aplicación compleja.
**Actualizado:** 2026-11-04

## Resumen

**La fuente sigue siendo el Markdown en Git.** GitHub y VS Code ya renderizan Markdown y Mermaid, así que un sitio es opcional. Si lo quieres, la opción más simple para ti es **VitePress** (se integra con tu cadena Vite/Node, build rápido, búsqueda local, barra lateral, responsive). Es independiente del dashboard del bot.

| | VitePress | Docusaurus | MkDocs (Material) |
|---|---|---|---|
| Instalación | `npm i -D vitepress` | `npx create-docusaurus` | `pip install mkdocs-material` |
| Mantenimiento | Bajo | Medio (React) | Bajo ⚠️ verificar estado de mantenimiento actual de Material for MkDocs |
| Markdown | Sí | Sí (MDX) | Sí |
| Mermaid | Plugin ⚠️ | Plugin oficial ⚠️ | Soportado ⚠️ |
| Búsqueda | Local integrada | Local/Algolia | Local integrada |
| Sidebar / responsive | Sí | Sí | Sí |
| Costo / GitHub Pages | Gratis | Gratis | Gratis |

Todo ⚠️ salvo lo obvio: no se verificó hoy el estado de cada proyecto.

**Precaución de enlaces:** este repo usa enlaces relativos `.md`; VitePress los resuelve bien. Los diagramas Mermaid de `arquitectura/` requieren plugin.

## Próximos pasos

- [ ] Decidir al final de la fase 4 (no antes); costo estimado 1–2 h

## Fuentes

Conocimiento previo ⚠️.

## Enlaces relacionados

[README](../README.md)
