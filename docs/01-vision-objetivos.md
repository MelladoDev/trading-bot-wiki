# 01 — Visión y objetivos

**Objetivo del documento:** fijar qué se quiere lograr, bajo qué reglas y qué falta por definir.
**Actualizado:** 2026-11-04

## Resumen

Construir un sistema que permita **investigar objetivamente** si una estrategia de trading sistemática ofrece ventaja real después de costos, riesgos e impuestos. El software es el medio; la pregunta es financiera. Terminar el software ≠ validar la estrategia.

## Objetivos

| Tipo | Objetivo |
|---|---|
| Técnico | Pipeline de datos → indicadores → señales → riesgo → simulación → registro → dashboard, con modos `BACKTEST`, `PAPER_TRADING`, `LIVE_TRADING` totalmente separados |
| Financiero | Estimar, con evidencia y tests estadísticos, si existe ventaja neta; comparar siempre contra comprar y mantener (benchmark) |
| Educativo | Aprender mercados, estadística, backtesting y arquitectura de sistemas financieros |

## Reglas innegociables

1. Sin dinero real hasta cumplir los criterios de [10-backtesting.md](10-backtesting.md) y [11-paper-trading.md](11-paper-trading.md) **y** una decisión humana explícita.
2. `LIVE_TRADING` deshabilitado por defecto.
3. Sin apalancamiento en el MVP.
4. Permisos de retiro de API siempre desactivados.
5. Ningún resultado inventado; todo experimento reproducible.
6. Complejidad solo cuando hay justificación técnica o estadística.

## Información pendiente

Decisiones que **dependen de ti** (se asumió lo indicado para no bloquear la investigación):

| # | Pregunta | Supuesto actual | Impacto |
|---|---|---|---|
| P1 | ¿Capital inicial real que podrías perder por completo sin afectar tu vida? | Se analizan 5 escenarios (50k–1M CLP) | Define si el proyecto es "sueldo extra" o "laboratorio" |
| P2 | ¿Tienes (o aceptarías abrir) cuenta en Binance/Kraken/Buda? ¿Pasaste KYC? | No | Define plataforma de prueba y real |
| P3 | ¿Tienes un contador o aceptarías una consulta única sobre tributación cripto? | No | Obligatorio antes de dinero real ([15](15-impuestos-chile.md)) |
| P4 | ¿Prefieres Windows/macOS/Linux para desarrollo? | Cualquiera; se usará Python con `uv` | Setup semana 1 |
| P5 | ¿Cuál es tu valor/hora para el análisis de costo de oportunidad? | Ejemplo con 10.000 CLP/h (placeholder) | [16-presupuesto.md](16-presupuesto.md) |
| P6 | ¿Horizonte emocional: cuánta caída (drawdown) soportarías en paper antes de abandonar? | 20% como referencia de diseño | Parámetros de riesgo |
| P7 | ¿Te interesa más aprender (aceptas "estrategia descartada" como éxito) o generar ingresos? | Ambos, prioridad a no perder capital | Criterio de éxito del proyecto |

## Riesgos del proyecto (resumen)

Ver [02-viabilidad.md](02-viabilidad.md).

## Próximos pasos

- [ ] Responder P1–P7
- [ ] Revisar [02-viabilidad.md](02-viabilidad.md)

## Fuentes

Requisitos aportados por la usuaria (prompt maestro).

## Enlaces relacionados

[README](../README.md) · [02 Viabilidad](02-viabilidad.md) · [Roadmap](../roadmap/README.md)
