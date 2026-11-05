# Semana 2 — Datos: descarga, validación y calidad

**Estado:** ⚪ Pendiente · **Fechas:** 16–22 nov 2026 · **Horas:** 13 (mín. 11)
**Objetivo:** dataset histórico confiable y reproducible (BTC/USDT, ETH/USDT, diario).
**Dependencias:** S1 (entorno, repo).
**Entregables:** `data/` con Parquet + hash; reporte de calidad; definición de periodos desarrollo/validación/prueba final.
**Bloqueos:** límites de la API; historial incompleto. **Notas:** —

| Día | Tiempo | Tarea | Instrucciones | Archivos | Resultado | Finalización |
|---|---|---|---|---|---|---|
| Lun | 1,5 h ⭐ | Leer cómo pagina ccxt `fetch_ohlcv` y límites de petición | Documentación de ccxt/exchange | notas | Plan de descarga | Plan escrito |
| Mar | 1,5 h ⭐ | Función de descarga paginada con reintentos/backoff | Probar con rango corto | `src/data/download.py` | Descarga 30 días | Test pasa |
| Mié | 1,5 h | Descarga completa BTC/USDT y ETH/USDT | Guardar Parquet con metadatos (exchange, fecha, símbolo) | `data/raw/` | Archivos | Filas > 0, sin errores |
| Jue | 1,5 h ⭐ | Validador: duplicados, huecos, OHLC coherente, vela abierta, outliers | Tests con datos sintéticos defectuosos | `src/data/validate.py` | Validador | Detecta casos plantados |
| Vie | 1,5 h | Reporte de calidad y hash del dataset | Registrar en `experimentos/` | `reportes/` | Reporte | Hash anotado |
| Sáb | 3 h ⭐ | Definir particiones temporales y escribir **plan de experimentos** (H1 refinada) | Prueba final = últimos N meses **sin tocar** | `experimentos/` | Documento de diseño | Fechas fijadas y commiteadas |
| Dom | 2,5 h ⭐ | Notebook de exploración de retornos (distribución, colas, autocorrelación); revisión semanal | Plotly | `src/research/` | Notebook + reporte | Reporte semanal |

**Total:** 13 h.

## Checklist

- [ ] Descarga paginada con reintentos
- [ ] Validador con tests
- [ ] Reporte de calidad + hash
- [ ] Particiones definidas
- [ ] Exploración de retornos
- [ ] Roadmap/reporte actualizados

## Opcional

Comparar datos entre dos exchanges para detectar discrepancias.
