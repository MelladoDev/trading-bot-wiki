# Trading Bot — Investigación de un sistema de trading algorítmico

> **Qué es esto:** un proyecto de investigación y desarrollo para averiguar, con evidencia, si una estrategia sistemática puede tener una ventaja estadística *después* de costos, riesgos e impuestos.
> **Qué no es:** una promesa de ingresos. El resultado correcto también puede ser "esta estrategia no es viable".

- **Última actualización:** 2026-11-04
- **Estado actual:** Entrega A+B+D+E inicial completada (investigación, evaluación tecnológica preliminar, plan financiero, roadmap). Sin código aún.
- **Fase activa:** Fase 1 — Investigación y viabilidad (cierre) → Fase 2/3 (evaluación tecnológica y prueba de concepto)
- **Modo operativo permitido:** `BACKTEST` únicamente. `PAPER_TRADING` y `LIVE_TRADING` deshabilitados.
- **Dinero real en uso:** ninguno.

## Progreso

| Fase | Estado |
|---|---|
| 1. Investigación y viabilidad | 🟡 Borrador entregado, pendiente tu revisión |
| 2. Evaluación tecnológica | 🟡 Preliminar (matriz hecha, falta PoC) |
| 3. Prueba de concepto | ⚪ Pendiente (semanas 3–4) |
| 4–10 | ⚪ Pendiente |

Detalle y checklist: [roadmap/README.md](roadmap/README.md).

## Próximo hito

**Hito H1 — Decisión tecnológica confirmada por PoC** (fin de la semana 4, ~6 dic 2026).

## Próximas tareas (semana 1)

- [ ] Revisar [docs/02-viabilidad.md](docs/02-viabilidad.md) y responder las preguntas de [docs/01-vision-objetivos.md](docs/01-vision-objetivos.md#información-pendiente)
- [ ] Verificar disponibilidad real de exchanges para Chile (tabla en [docs/04-plataformas.md](docs/04-plataformas.md))
- [ ] Preparar entorno Python + repo Git
- [ ] Primer "hello data": descargar BTC/USDT diario y calcular drawdown de buy & hold

Plan completo: [roadmap/semana-01.md](roadmap/semana-01.md)

## Decisiones principales (provisionales)

| # | Decisión | Estado |
|---|---|---|
| ADR-0001 | Mercado inicial: cripto spot (BTC/USDT, ETH/USDT), sin apalancamiento | Propuesta |
| ADR-0002 | Estrategia candidata: seguimiento de tendencia diario, baja frecuencia | Propuesta |
| ADR-0003 | Stack: Python; Freqtrade vs. motor propio se decide por PoC | **Pendiente de PoC** |
| ADR-0004 | Almacenamiento: Parquet + DuckDB (histórico), SQLite (operacional) | Propuesta |
| ADR-0005 | Dashboard: FreqUI primero; panel React propio solo si se justifica | Propuesta |

Índice: [decisiones/README.md](decisiones/README.md)

## Índice navegable

**Documentación (`docs/`)**

1. [Visión y objetivos](docs/01-vision-objetivos.md)
2. [Diagnóstico de viabilidad](docs/02-viabilidad.md)
3. [Mercados](docs/03-mercados.md)
4. [Plataformas y exchanges](docs/04-plataformas.md)
5. [Estrategias](docs/05-estrategias.md)
6. [Plan de inversión y capital](docs/06-plan-inversion.md)
7. [Evaluación de tecnologías](docs/07-evaluacion-tecnologias.md)
8. [Arquitectura](docs/08-arquitectura.md)
9. [Desarrollo (guía de implementación)](docs/09-desarrollo.md)
10. [Backtesting y validación](docs/10-backtesting.md)
11. [Paper trading](docs/11-paper-trading.md)
12. [Dashboard](docs/12-dashboard.md)
13. [Infraestructura](docs/13-infraestructura.md)
14. [Seguridad](docs/14-seguridad.md)
15. [Impuestos y regulación en Chile](docs/15-impuestos-chile.md)
16. [Presupuesto](docs/16-presupuesto.md)
17. [Mejoras futuras](docs/17-mejoras-futuras.md)
18. [Sitio de documentación](docs/18-sitio-documentacion.md)
19. [Glosario](docs/glosario.md)

**Otros**

- [Roadmap](roadmap/README.md) · [Cronograma general](roadmap/cronograma-general.md)
- [Decisiones (ADR)](decisiones/README.md)
- [Experimentos](experimentos/README.md) · [Plantilla](experimentos/plantilla.md)
- [Reportes de sesión](reportes/README.md)
- [Diagramas de arquitectura](arquitectura/diagramas.md)

## Convenciones de confianza de la información

| Marca | Significado |
|---|---|
| ✅ | Verificado en una fuente consultada el 2026-11-04 (se cita la fuente) |
| 🟡 | Verificado solo en fuente secundaria (blog, nota de prensa, afiliados) |
| ⚠️ | Conocimiento previo del autor, **no verificado hoy**. Comprobar antes de decidir |
| 🧮 | Cálculo propio reproducible, sobre supuestos explícitos |

Regla del proyecto: **nunca** se documentan resultados de backtest que no hayan sido ejecutados. Los experimentos viven en [experimentos/](experimentos/README.md).
