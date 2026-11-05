# Diagramas de arquitectura

**Actualizado:** 2026-11-04 · Renderizan en GitHub y en VS Code (extensión Mermaid).

## Alternativa A — TypeScript completo

```mermaid
flowchart LR
  EX[(Exchange API)] --> MD[Market data - Node]
  MD --> PG[(PostgreSQL)]
  PG --> ST[Strategy + Risk - Node]
  ST --> OE[Order engine propio]
  OE --> EX
  PG --> API[Express API]
  API --> UI[React dashboard]
```

## Alternativa B — Python + React (motor propio)

```mermaid
flowchart LR
  EX[(Exchange API)] --> MD[Market data - Python/ccxt]
  MD --> PQ[(Parquet/DuckDB)]
  PQ --> BT[Backtester propio]
  MD --> ST[Strategy + Risk]
  ST --> OE[Order engine propio]
  OE --> EX
  ST --> DB[(SQLite/PostgreSQL)]
  DB --> API[FastAPI]
  API --> UI[React dashboard]
```

## Alternativa C — Framework existente

```mermaid
flowchart LR
  EX[(Exchange API)] <--> FT[Freqtrade: datos, estrategia, riesgo, dry-run/live]
  FT --> DB[(SQLite)]
  FT --> FUI[FreqUI]
  FT --> TG[Telegram alertas]
```

## Alternativa D — C + investigación propia (opción preferente, sujeta a PoC)

```mermaid
flowchart LR
  EX[(Exchange público)] --> DL[Descarga de datos - ccxt]
  DL --> PQ[(Parquet + hash)]
  PQ --> RS[Investigación: backtester propio + métricas + notebooks]
  RS --> EXP[experimentos/ - informes]
  PQ --> FTB[Freqtrade backtesting]
  FTB --> CMP{Resultados coinciden?}
  RS --> CMP
  CMP -- sí --> FTD[Freqtrade dry-run en VPS]
  FTD --> DB[(SQLite)]
  DB --> FUI[FreqUI]
  FTD --> TG[Telegram]
  FTD -. solo con aprobación humana .-> LIVE[LIVE_TRADING]
```

## Flujo de estados de una orden (diseño)

```mermaid
stateDiagram-v2
  [*] --> Propuesta
  Propuesta --> Rechazada: veto de riesgo
  Propuesta --> Enviada: client_order_id generado
  Enviada --> Parcial
  Enviada --> Ejecutada
  Enviada --> Desconocida: timeout/sin respuesta
  Desconocida --> Conciliacion: consultar exchange
  Conciliacion --> Ejecutada
  Conciliacion --> Cancelada
  Parcial --> Ejecutada
  Parcial --> Cancelada
  Ejecutada --> [*]
  Cancelada --> [*]
  Rechazada --> [*]
```

## Pipeline de validación de estrategias

```mermaid
flowchart LR
  H[Hipótesis escrita] --> R[Reglas congeladas]
  R --> D[Datos + hash]
  D --> BT[Backtest con costos]
  BT --> S[Sensibilidad + walk-forward]
  S --> OOS[Prueba final intocable]
  OOS --> X{Evidencia suficiente?}
  X -- no --> DESC[Descartar / nueva hipótesis]
  X -- sí --> PT[Paper trading]
  PT --> Y{Coincide con backtest y operación estable?}
  Y -- no --> DESC
  Y -- sí --> DEC[Decisión humana sobre capital real]
```
