# Cronograma general

**Actualizado:** 2026-11-04 · Inicio propuesto: **lunes 9 nov 2026** (Semana 1)

## Supuestos

- Carga base 13 h/sem: L–V 1,5 h (7,5) + sáb 3 h + dom 2,5 h = 13 h.
- Mínimo 11 h/sem: L–V 1 h + sáb 3 h + dom 3 h → el plan sigue siendo posible; se recorta el **trabajo opcional** de cada semana, nunca las tareas marcadas ⭐.
- Máximo 18 h: las horas extra adelantan trabajo opcional.
- Incluye aprendizaje, debugging y documentación dentro de las horas.
- Navidad/Año Nuevo y imprevistos: colchón de 2 semanas (S19–S20).

## Corrección de la estimación "3–6 meses"

La **construcción** (fases 1–9) toma ≈ 18–20 semanas (4–5 meses). Pero llegar a una decisión informada sobre capital real exige además ≥ 12 semanas de paper trading (probablemente más por el bajo número de operaciones). **Estimación realista: 7–12 meses hasta la decisión sobre capital real**, y puede terminar en "descartar".

## Fases

| # | Fase | Semanas | Horas (13 h/sem) | Dependencias | Entregables | Riesgos | Criterio de aceptación |
|---|---|---|---:|---|---|---|---|
| 1 | Investigación y viabilidad | S1 | 13 | — | Docs 01–06 revisados; preguntas P1–P7; entorno listo | Dispersión | Hoja de verificaciones de plataformas completa |
| 2 | Evaluación tecnológica | S2 | 13 | 1 | Datos descargados y validados; hipótesis H1 | Datos sucios | Dataset con hash + reporte de calidad |
| 3 | Prueba de concepto | S3–S4 | 26 | 2 | PoC-B y PoC-C; comparación | Divergencias entre motores | ADR-0003 cerrado con criterios de [07 §9](../docs/07-evaluacion-tecnologias.md) |
| 4 | Arquitectura definitiva | S5 | 13 | 3 | [08](../docs/08-arquitectura.md) final; decisión de sitio de docs | Sobrediseño | Módulos y contratos definidos |
| 5 | Preparación del proyecto | S6 | 13 | 4 | Repo, CI local, tests, `.env.example` | — | `pytest` verde en vacío |
| 6 | Motor de datos | S7–S8 | 26 | 5 | Downloader+validador+tests | Gaps, vela abierta | Criterios de [09](../docs/09-desarrollo.md) #1 |
| 7 | Primera estrategia + backtesting | S9–S11 | 39 | 6 | Estrategia, backtester, métricas, EXP-001… | Sesgos, snooping | Informe con benchmarks y sensibilidad |
| 8 | Gestión de riesgos | S12–S13 | 26 | 7 | Módulo de riesgo + kill switch | Casos límite | Tests de veto y límites |
| 9 | Paper trading + automatización | S14–S16 | 39 | 8 | `dry-run` en VPS, alertas, respaldos | Fallos operativos | 7 días estables + prueba de reinicio |
| 10 | Dashboard (FreqUI/informes; propio solo si se justifica) | S17–S18 | 26 | 9 | Vistas necesarias | Alcance | Distingue histórico/simulado/real |
| — | Colchón / festivos | S19–S20 | 26 | — | — | — | — |
| 11 | Validación (paper en curso) | S14–S26+ | ~2 h/sem | 9 | Informes mensuales | Pocas operaciones | Criterios de [11](../docs/11-paper-trading.md) |
| 12 | Evaluación de capital real | ≥ S27 | ~13 | 11 | Decisión escrita (ADR) | Presión por "usar lo construido" | Checklist completo; **decisión humana explícita** |
| 13 | Mantenimiento | continuo | ~2 h/sem | — | — | — | — |

Total construcción S1–S18 = 18 semanas ≈ 234 h a 13 h/sem 🧮 (más colchón).

## Fechas aproximadas (inicio L 9-nov-2026)

| Semana | Inicia | Semana | Inicia |
|---|---|---|---|
| S1 | 9 nov 2026 | S11 | 18 ene 2027 |
| S2 | 16 nov | S14 | 8 feb |
| S3 | 23 nov | S18 | 8 mar |
| S4 | 30 nov | S20 | 22 mar |
| S5 | 7 dic | S26 | 3 may |

## Hitos verificables

- [ ] H0 Mercado seleccionado (S1)
- [ ] H1 Stack evaluado y seleccionado por PoC (S4)
- [ ] H2 Primer proyecto ejecutable (S6)
- [ ] H3 Primera conexión a datos (S2 / S7)
- [ ] H4 Primera estrategia + primer backtest + primer informe (S9–S11)
- [ ] H5 Primera operación simulada (S14)
- [ ] H6 Dashboard funcional, si se justifica (S18)
- [ ] H7 Automatización estable (S16)
- [ ] H8 Validación o **descarte** de estrategia (≥ S26)
- [ ] H9 Decisión sobre posible operación real (≥ S27)

Detalle semanal: [S1](semana-01.md) · [S2](semana-02.md) · [S3](semana-03.md) · [S4](semana-04.md). Las demás se detallan al cerrar la semana 4 con lo aprendido.
