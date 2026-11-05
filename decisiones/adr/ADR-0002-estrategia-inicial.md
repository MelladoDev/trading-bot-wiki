# ADR-0002 — Estrategia candidata: seguimiento de tendencia diario

- **Fecha:** 2026-11-04 · **Estado:** Propuesta
- **Contexto:** se requiere una estrategia simple, medible y de pocas operaciones. Ver [05](../../docs/05-estrategias.md).
- **Alternativas:** cruce de medias, RSI, MACD, reversión a la media, multiindicador.
- **Decisión:** investigar como hipótesis una regla de tendencia diaria (Donchian o cruce de medias) con tamaño por riesgo.
- **Justificación:** pocos parámetros, bajo costo por pocas operaciones, fácil de auditar. No se basa en rendimientos pasados (no hay backtests ejecutados).
- **Consecuencias:** baja potencia estadística (pocas operaciones); probable resultado "reduce drawdown pero no supera buy & hold" — es una hipótesis a contrastar, no un resultado.
- **Criterios de descarte:** ver [10](../../docs/10-backtesting.md).
