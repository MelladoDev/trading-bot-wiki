# ADR-0005 — Dashboard

- **Fecha:** 2026-11-04 · **Estado:** Propuesta
- **Contexto:** necesidad de visibilidad sin crear una segunda aplicación grande. Ver [12](../../docs/12-dashboard.md).
- **Alternativas:** FreqUI (si se adopta Freqtrade), panel React propio, notebooks/informes.
- **Decisión:** usar FreqUI + informes propios; panel React solo si queda una necesidad no cubierta.
- **Justificación:** tiempo mejor invertido en validación; React propio es opcional.
- **Consecuencias:** UI limitada para experimentos/validación (se cubren con informes Markdown).
