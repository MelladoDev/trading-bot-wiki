# Semana 3 — PoC-B: backtester propio en Python

**Estado:** ⚪ Pendiente · **Fechas:** 23–29 nov 2026 · **Horas:** 13 (mín. 11)
**Objetivo:** implementar una estrategia simple y un backtest con costos, métricas y persistencia (vehículo de la PoC; **sus resultados no evalúan la estrategia**).
**Dependencias:** S2 (dataset validado).
**Entregables:** backtester diario, métricas, resultados guardados, 3 tests de no-look-ahead.

| Día | Tiempo | Tarea | Instrucciones | Archivos | Resultado | Finalización |
|---|---|---|---|---|---|---|
| Lun | 1,5 h ⭐ | Indicadores (SMA, máx/mín móviles) con tests | Verificar contra cálculo manual | `src/common/indicators.py` | Funciones | Tests verdes |
| Mar | 1,5 h ⭐ | Señal de la estrategia como función pura, con razones | Señal en t se ejecuta en t+1 | `src/strategies/` | Función | Test de propiedad: cambiar datos > t no altera señal en t |
| Mié | 1,5 h | Modelo de ejecución con comisión parametrizada | Comisión 0,1 % y 0,8 % como casos | `src/research/backtest.py` | Backtest | Equity coherente en caso simple |
| Jue | 1,5 h ⭐ | Métricas: CAGR, MDD, Sharpe, PF, nº operaciones, costos | Verificar a mano con ejemplo | `src/research/metrics.py` | Métricas | Ejemplo manual coincide |
| Vie | 1,5 h | Persistir resultados (Parquet/DuckDB) con parámetros y hash | Un `run_id` | `experimentos/resultados/` | Archivo de resultados | Reproducible |
| Sáb | 3 h ⭐ | Ejecutar backtest PoC en periodo de **desarrollo**; comparar con comprar y mantener; registrar EXP-000 (PoC) | Usar plantilla; no tocar prueba final | experimentos | Registro EXP-000 | Registro completo |
| Dom | 2,5 h | Consulta mínima (notebook o FastAPI de 1 endpoint) y revisión semanal; tiempo real vs estimado | Anotar horas | reporte | Reporte | Horas registradas |

**Total:** 13 h.

## Checklist

- [ ] Indicadores con tests
- [ ] Test de no look-ahead
- [ ] Backtest con comisión
- [ ] Métricas verificadas
- [ ] Resultados persistidos
- [ ] EXP-000 registrado (como PoC, no como evidencia)
- [ ] Horas reales anotadas
