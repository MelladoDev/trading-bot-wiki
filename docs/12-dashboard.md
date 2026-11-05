# 12 — Dashboard

**Objetivo:** decidir si construir un dashboard propio y diseñarlo si se justifica.
**Actualizado:** 2026-11-04

## Resumen

**Recomendación: usar primero la interfaz del motor (FreqUI si se adopta Freqtrade) + informes generados desde tu investigación.** Un panel React propio es un proyecto en sí mismo; solo se justifica para lo que la UI existente no cubra (comparación de experimentos, distinción visual histórico/simulado/real, informes de validación). ⚠️ Confirmar en la PoC qué muestra y qué no FreqUI.

## Cuándo construir uno propio

- Necesitas ver experimentos/versiones/estado de validación (no existe en FreqUI ⚠️).
- Quieres curvas de drawdown y comparación con benchmark en una vista.
- Ya terminaste las fases 1–8 y el tiempo sobra.

## Vistas (si se construye)

| Vista | Contenido |
|---|---|
| Principal | Estado del bot, modo (badge muy visible), mercado/activo/estrategia, capital, rentabilidad, posiciones abiertas, últimas operaciones, alertas |
| Análisis financiero | Equity, retorno por periodo, vs benchmark, drawdown, estadísticas, costos, historial |
| Estrategias | Versiones, parámetros, experimentos, comparación, estado de validación |
| Configuración | Límites de riesgo, alertas, activar/desactivar, parada de emergencia (con confirmación) |

Reglas: distinguir visualmente **histórico (backtest) / simulado (paper) / real**; **nunca** mostrar resultados hipotéticos como ganancias obtenidas; etiqueta persistente del modo; solo lectura salvo kill switch.

## Stack sugerido (si se hace)

React + Vite + Tailwind + shadcn/ui (lo que ya dominas) + Lightweight Charts (velas) + Recharts (equity/drawdown); API de lectura FastAPI o la API del motor. Rutas: `/`, `/performance`, `/strategies`, `/experiments/:id`, `/settings`. Estado: TanStack Query para datos remotos; sin estado global complejo.

## Wireframe (texto)

```text
┌ [MODO: PAPER] ● Bot activo          Capital 1.000 USDT  P&L simulado +x% ┐
├──────────────────────────┬───────────────────────────────────────────────┤
│ Posiciones abiertas      │ Equity vs Buy&Hold          [gráfico]        │
│ Últimas operaciones      │ Drawdown                    [gráfico]        │
│ Alertas                  │ Costos acumulados · Nº operaciones           │
└──────────────────────────┴───────────────────────────────────────────────┘
```

Responsive: columnas colapsan a una; tablas con scroll horizontal.

## Próximos pasos

- [ ] Evaluar FreqUI en la PoC (semana 4)
- [ ] Decidir construir/no construir en la fase 9

## Fuentes

[Freqtrade PyPI](https://pypi.org/project/freqtrade/) — interfaz web integrada y Telegram — 2026-11-04

## Enlaces relacionados

[07](07-evaluacion-tecnologias.md) · [ADR-0005](../decisiones/adr/ADR-0005-dashboard.md)
