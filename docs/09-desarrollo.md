# 09 — Desarrollo (guía de implementación progresiva)

**Objetivo:** definir cómo se implementa cada módulo, en pasos pequeños y comprobables.
**Actualizado:** 2026-11-04
**Estado:** 🟡 Plantilla. El código se escribe **después** de la PoC y de aprobar la arquitectura.

## Resumen

Un módulo a la vez, con tests y criterios de aceptación antes de pasar al siguiente. Cada módulo se documenta con la plantilla de abajo y se enlaza desde el roadmap.

## Plantilla por módulo

`Objetivo · Requisitos previos · Archivos · Dependencias · Código · Explicación · Configuración · Variables de entorno · Pruebas · Errores comunes · Criterios de aceptación`

## Orden de implementación

| # | Módulo | Criterio de aceptación (resumen) |
|---|---|---|
| 1 | Data downloader + validador | Dataset sin duplicados ni huecos no explicados; hash registrado; vela abierta excluida |
| 2 | Indicadores | Coinciden con valores de referencia en casos conocidos |
| 3 | Estrategia (función pura) | Mismo input ⇒ misma señal; razones registradas |
| 4 | Backtester propio | Sin look-ahead (test de propiedad); costos parametrizados |
| 5 | Métricas | Verificadas con ejemplos calculados a mano |
| 6 | Riesgo | Veto probado en casos límite; límites diarios/semanales |
| 7 | Paper engine / dry-run | Reinicio sin duplicados; conciliación |
| 8 | Monitoreo y alertas | Heartbeat; alerta ante parada |
| 9 | Dashboard | Distingue histórico/simulado/real |
| 10 | Ejecución real (solo si se aprueba) | Idempotencia; reconciliación; kill switch |

## Problemas a cubrir (checklist de diseño)

| Problema | Mitigación prevista |
|---|---|
| Datos faltantes / duplicados / erróneos | Validador: monotonía temporal, huecos, outliers (saltos extremos), OHLC coherente, volumen ≥ 0 |
| Vela todavía abierta | Operar solo con velas **cerradas**; test explícito |
| Fallos de red, rate limits, reintentos | Backoff exponencial con tope; respetar límites del exchange |
| Órdenes duplicadas / idempotencia | `client_order_id` determinístico por (estrategia, símbolo, vela); verificar antes de reenviar |
| Parciales, estado desconocido, desincronización | Máquina de estados + conciliación contra el exchange antes de decidir |
| Precisión decimal, redondeos, cantidades mínimas | `Decimal`; respetar `step_size`/`min_notional` del mercado |
| Comisiones y slippage | Modelados en backtest y paper; comparados con fills reales |
| Reinicios y persistencia | Estado en BD; al arrancar, reconciliar |
| Logging y auditoría | Logs estructurados + tabla de auditoría, sin secretos |

## Próximos pasos

- [ ] Completar PoC → definir stack → rellenar esta guía con código real

## Fuentes

Diseño propio.

## Enlaces relacionados

[08](08-arquitectura.md) · [10](10-backtesting.md) · [14](14-seguridad.md)
