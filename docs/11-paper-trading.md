# 11 — Paper trading

**Objetivo:** simular con datos reales y sin órdenes reales para validar la *operación* y detectar diferencias con el backtest.
**Actualizado:** 2026-11-04

## Resumen

El paper trading **no valida rentabilidad por sí solo** cuando la estrategia opera poco (ver [02 §3.4](02-viabilidad.md)). Su valor: comprobar que el sistema funciona 24/7, que las decisiones reales coinciden con las del backtest sobre los mismos datos, y medir slippage/costos aproximados.

## Componentes

Balance virtual · órdenes simuladas con comisión y slippage conservadores · posiciones · historial · métricas · alertas · registro de fallos. Opción base: Freqtrade `dry-run` ✅ (función documentada en [PyPI](https://pypi.org/project/freqtrade/)); ⚠️ su simulación de fills es aproximada.

## Cuánto simular

No se fija solo por calendario. Se continúa hasta cumplir **todas**:

1. **Operación:** ≥ 12 semanas continuas sin errores críticos no resueltos y con ≥ 2 reinicios/recuperaciones probados.
2. **Coincidencia:** re-ejecutar el backtest con los datos del periodo y comparar operaciones: las divergencias deben ser explicables.
3. **Estadística:** el número de operaciones observadas permite al menos descartar discrepancias grandes frente a lo esperado (intervalo de confianza del backtest). Con pocas operaciones, el paper trading **no puede aprobar la rentabilidad**; sólo puede reprobar por fallos o discrepancias.
4. **Riesgo:** drawdown y pérdidas diarias/semanales dentro de lo diseñado.

Si no hay suficientes operaciones: **continuar simulando o descartar**; no acortar el criterio.

## Cómo detectar discrepancias

Para cada operación simulada: comparar señal, precio de decisión, precio de fill, comisión y slippage frente a la réplica en backtest. Registrar en `reportes/` un informe mensual.

## Criterios para considerar capital real

Todos obligatorios, y la decisión final es **humana y no automática**:

- [ ] Backtest + validación fuera de muestra + prueba final superados
- [ ] Paper trading cumple los 4 puntos anteriores
- [ ] Seguridad revisada ([14](14-seguridad.md)): claves trade-only, sin retiros, restricción de IP si existe
- [ ] Kill switch, límites de pérdida y reconciliación probados
- [ ] Costos reales verificados en el exchange elegido
- [ ] Consulta tributaria hecha ([15](15-impuestos-chile.md))
- [ ] Capital máximo definido (dinero que puedes perder)
- [ ] Aprobación escrita en el repositorio (ADR)

## Riesgos

Falsa confianza por pocos trades · simulación demasiado optimista · fallos que solo aparecen con dinero real (rechazos, límites).

## Próximos pasos

- [ ] Definir informe mensual (plantilla en `reportes/`) en la fase 8

## Fuentes

[Freqtrade PyPI](https://pypi.org/project/freqtrade/) — 2026-11-04

## Enlaces relacionados

[10](10-backtesting.md) · [13](13-infraestructura.md) · [Roadmap](../roadmap/cronograma-general.md)
