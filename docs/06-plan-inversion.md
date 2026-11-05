# 06 — Plan de inversión y gestión de capital

**Objetivo:** analizar escenarios de capital, riesgos y comparación con inversión pasiva. **Nada aquí es recomendación de inversión.**
**Actualizado:** 2026-11-04

## Resumen

Con capital de 50.000–1.000.000 CLP la pérdida absoluta posible es acotada, pero también lo es cualquier ganancia razonable. El proyecto debe tratarse como **laboratorio**: el capital real (si llega) debe ser dinero que puedas perder entero.

## Supuestos (cámbialos al tener datos reales)

| Supuesto | Valor | Estado |
|---|---|---|
| Tipo de cambio | 1 USD = 950 CLP | ⚠️ **placeholder**, verificar |
| Comisión spot por lado | 0,1 % (Binance) / 0,8 % (Buda) | 🟡 |
| Conversión CLP→USDT (P2P/FX) | 1 % por lado | ⚠️ supuesto |
| Riesgo por operación | 1 % del capital | Parámetro de diseño |
| Mínimo de orden spot | ~5–10 USD | ⚠️ verificar |

## Escenarios 🧮

| Capital (CLP) | ≈ USD | Riesgo/op. 1 % (CLP) | Costo comisión ida+vuelta 0,2 % | Ídem 1,6 % (Buda) | Ida+vuelta FX 2 % |
|---:|---:|---:|---:|---:|---:|
| 50.000 | 53 | 500 | 100 | 800 | 1.000 |
| 100.000 | 105 | 1.000 | 200 | 1.600 | 2.000 |
| 250.000 | 263 | 2.500 | 500 | 4.000 | 5.000 |
| 500.000 | 526 | 5.000 | 1.000 | 8.000 | 10.000 |
| 1.000.000 | 1.053 | 10.000 | 2.000 | 16.000 | 20.000 |

Lectura:
- El costo de **entrar y salir del dólar (≈ 2 %)** puede superar al de comisiones de trading; hacerlo una vez y mantener USDT reduce ese costo.
- Con 50.000 CLP (~53 USD), una posición con riesgo 1 % es ≈ 0,5 USD: cercana al mínimo de orden y dominada por redondeos y comisiones fijas. Es viable solo para probar mecánica, no para evaluar rentabilidad.
- **Capital utilizable** ≈ capital − costo de conversión − reserva para comisiones.

### Escenarios hipotéticos (no son pronósticos)

Rentabilidad mensual necesaria para las metas: ver tabla de [02 §3.1](02-viabilidad.md). Distinción obligatoria en todo el proyecto:

| Término | Significado | Ejemplo de uso |
|---|---|---|
| Rentabilidad histórica | Ocurrió en datos pasados (backtest) | Nunca se presenta como futura |
| Rentabilidad esperada | Estimación estadística con incertidumbre | Solo con intervalos de confianza |
| Rentabilidad hipotética | Cuenta aritmética de meta | Tabla de 02 |
| Rentabilidad neta | Tras comisiones, spread, slippage, FX e impuestos | Única que importa |

## Gestión de riesgos (diseño)

| Mecanismo | Propuesta inicial (parámetro, no garantía) |
|---|---|
| Riesgo por operación | ≤ 1 % del capital |
| Tamaño de posición | `riesgo / distancia al stop`, tope por exposición |
| Exposición máxima | ≤ 100 % del capital, **sin apalancamiento** |
| Stop-loss | Por regla de la estrategia; **no garantiza precio de ejecución** (gaps, slippage, stops no ejecutados si el exchange cae) |
| Take-profit | Opcional; evaluar si mejora o solo recorta ganadoras |
| Pérdida máx. diaria / semanal / mensual | p. ej. 2 % / 4 % / 8 % → al alcanzarlas el bot se detiene hasta revisión humana |
| Drawdown máx. | p. ej. 15–20 % → kill switch y revisión (ver P6) |
| Control de volatilidad | Reducir tamaño si la vol. realizada supera umbral |
| Parada de emergencia | Botón/comando que cancela órdenes y bloquea nuevas |
| Suspensión por errores técnicos | N errores de API/reconciliación → modo seguro |

Los umbrales son **puntos de partida** a calibrar con datos; no son "números mágicos".

## Comparación con inversión pasiva

| Aspecto | Bot de trading | ETF diversificado / DCA pasivo |
|---|---|---|
| Riesgo | Modelo, ejecución, exchange, sobreajuste | Mercado (+ cambio si es en USD) |
| Costos | Comisiones frecuentes, FX, infraestructura | Bajos y poco frecuentes |
| Dedicación | 11–18 h/sem construir; supervisión continua | Casi nula |
| Rendimiento neto | **Desconocido; debe demostrarse** | Aproximadamente el del mercado menos costos |
| Complejidad | Alta | Baja |
| Impuestos | Cada operación puede generar hecho gravable | Menos eventos gravables ⚠️ |
| Costo de oportunidad | Alto | Bajo |

**Cuándo no se justifica el bot:** si el objetivo es solo "ganar más", si no supera a la alternativa pasiva ajustada por riesgo y tiempo, o si el tiempo vale más que el resultado esperado. Hay que medirlo explícitamente en cada informe (benchmark pasivo siempre incluido). Detalle de rendimientos pasivos: **pendiente** (requiere datos; no se citan cifras sin fuente).

## Condiciones para considerar capital real (checklist)

Ver [11-paper-trading.md](11-paper-trading.md#criterios-para-considerar-capital-real) y [roadmap](../roadmap/cronograma-general.md).

## Próximos pasos

- [ ] Fijar capital máximo "perdible" (P1)
- [ ] Verificar tipo de cambio y comisiones reales en páginas oficiales

## Fuentes

Cálculos propios (script en [reportes/sesion-01.md](../reportes/sesion-01.md)); comisiones de [04](04-plataformas.md).

## Enlaces relacionados

[02](02-viabilidad.md) · [14 Seguridad](14-seguridad.md) · [16 Presupuesto](16-presupuesto.md)
