# Semana 4 — PoC-C: Freqtrade, comparación y decisión

**Estado:** ⚪ Pendiente · **Fechas:** 30 nov – 6 dic 2026 · **Horas:** 13 (mín. 11)
**Objetivo:** repetir la PoC con Freqtrade, comparar con PoC-B y cerrar ADR-0003.
**Dependencias:** S3.
**Entregables:** Freqtrade instalado, estrategia equivalente, backtest, `dry-run` iniciado, informe comparativo, ADR-0003 cerrado.
**Bloqueos posibles:** diferencias de versión de Python/dependencias; exchange no disponible desde tu IP.

| Día | Tiempo | Tarea | Instrucciones | Archivos | Resultado | Finalización |
|---|---|---|---|---|---|---|
| Lun | 1,5 h ⭐ | Instalar Freqtrade siguiendo su documentación oficial (Python ≥ 3.12) | Entorno separado | `src/bot/` | `freqtrade --version` | Funciona |
| Mar | 1,5 h ⭐ | Descargar los mismos datos y configurar `config.json` sin claves (dry-run) | Mismo exchange/par/periodo | config | Datos | Mismos rangos que S2 |
| Mié | 1,5 h | Implementar la misma estrategia (`IStrategy`) | Solo velas cerradas | `src/bot/strategies/` | Estrategia | Corre |
| Jue | 1,5 h ⭐ | Backtest en Freqtrade, mismo periodo y comisión | Exportar resultados | resultados | Reporte nativo | Exportado |
| Vie | 1,5 h | Iniciar `dry-run` local; revisar FreqUI y API | Dejar corriendo | — | Bot simulado vivo | Alcanza estado estable |
| Sáb | 3 h ⭐ | Comparar operaciones PoC-B vs Freqtrade; explicar diferencias; evaluar criterios 1–5 de [07 §9](../docs/07-evaluacion-tecnologias.md) | Tabla de diferencias | `reportes/` | Informe comparativo | Divergencias explicadas o bug hallado |
| Dom | 2,5 h ⭐ | Cerrar ADR-0003 (aceptado/ajustado), actualizar docs 07/08/README/roadmap; revisión; planificar S5 | Con evidencia de la PoC | `decisiones/adr/` | ADR-0003 definitivo | Hito H1 marcado o decisión alternativa documentada |

**Total:** 13 h.

## Checklist

- [ ] Freqtrade instalado
- [ ] Mismos datos y periodo
- [ ] Estrategia equivalente
- [ ] Backtest exportado
- [ ] Dry-run vivo ≥ 3 días (sigue corriendo después)
- [ ] Comparación documentada
- [ ] ADR-0003 cerrado
- [ ] Roadmap, docs y README actualizados

## Trabajo opcional

Probar un reinicio forzado del dry-run y verificar que no duplica operaciones simuladas.
