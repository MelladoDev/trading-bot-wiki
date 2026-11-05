# 05 — Estrategias

**Objetivo:** catalogar estrategias, elegir una candidata para el MVP y definir cómo distinguir ventaja de azar.
**Actualizado:** 2026-11-04

## Resumen

**Candidata MVP (hipótesis, no promesa): seguimiento de tendencia de baja frecuencia en BTC/USDT, velas diarias** — p. ej. entrada por ruptura de máximo de N días (Donchian) o cruce de medias, con salida por mínimo de M días o stop. Se elige por ser simple, medible, con pocos parámetros y pocas operaciones (bajo costo). **No se elige por rendimiento pasado**: todavía no hay ningún backtest ejecutado.

Expectativa honesta: este tipo de estrategia suele aspirar más a **reducir drawdown** que a superar a comprar y mantener en un activo que sube mucho ⚠️. La hipótesis a contrastar es precisamente esa.

## Catálogo

| Estrategia | Principio | Entrada / Salida (ejemplo) | Favorable | Desfavorable | Parámetros | Frecuencia | Complejidad |
|---|---|---|---|---|---|---|---|
| Cruce de medias | Tendencia persiste | Compra si SMA(rápida) > SMA(lenta); sale al revés | Tendencias largas | Laterales (whipsaw) | 2 periodos | Baja | Muy baja |
| Seguimiento de tendencia (Donchian) | Rupturas inician tendencias | Compra al superar máx. N días; sale bajo mín. M días | Tendencias fuertes | Rangos | N, M, stop | Baja | Baja |
| RSI (reversión) | Sobrecompra/sobreventa revierte | Compra RSI < x; sale RSI > y | Rangos | Tendencias fuertes (cuchillo cayendo) | periodo, x, y | Media | Baja |
| MACD | Momentum | Cruce de línea y señal | Tendencias | Laterales | 3 periodos | Media | Baja |
| Ruptura de niveles | Soporte/resistencia | Compra al romper nivel + volumen | Volatilidad creciente | Falsas rupturas | ventana, filtro | Media | Media |
| Reversión a la media | Precio vuelve a su media | Compra a −k desviaciones | Rangos | Cambios de régimen | ventana, k | Media-alta | Media |
| Volatilidad (p. ej. tamaño por vol objetivo) | Riesgo constante | Ajusta tamaño por ATR/vol | Casi siempre como **capa de riesgo** | — | ventana de vol | — | Media |
| Multiindicador | Combinar señales | Reglas AND/OR | — | **Alto riesgo de sobreajuste** | Muchos | Variable | Alta |
| Largo plazo / DCA | Acumular periódicamente | Compra fija periódica | Mercados alcistas | Mercados bajistas largos | monto, periodo | Muy baja | Muy baja |

Todas se validan con el método de [10](10-backtesting.md). Costos: dependen de operaciones/año × comisión ([02](02-viabilidad.md)).

## Selección y justificación

Criterios del proyecto vs. candidata (Donchian/medias diario):

| Criterio | ¿Cumple? |
|---|---|
| Comprensible y reproducible | Sí: 2–3 parámetros |
| Fácil de implementar | Sí |
| Medible | Sí, cada operación es explícita |
| Compatible con capital pequeño | Sí (pocas operaciones, bajo impacto de comisión si el exchange es barato) |
| Apto para backtest | Sí, datos diarios gratis |
| Admite controles de riesgo | Sí (stop, tamaño por volatilidad) |
| Riesgo de sobreajuste | Bajo si se limita la búsqueda de parámetros |

**Benchmarks obligatorios:** (1) comprar y mantener BTC; (2) estrategia "aleatoria" con la misma exposición y frecuencia (Monte Carlo); (3) DCA simple.

## Metodología científica

1. **Hipótesis escrita antes de ver resultados** (ej. H1: "Una regla de tendencia diaria reduce el máximo drawdown de BTC en ≥ X puntos sin reducir el retorno ajustado por riesgo frente a buy & hold, neta de costos"). X se fija a priori, no se ajusta después.
2. **Reglas congeladas** (versión del código y parámetros versionados en Git).
3. **Datos** fijos y con hash; separar periodo de desarrollo y periodo **de prueba final intocable** (se usa una sola vez).
4. **Pruebas:** backtest con costos, sensibilidad de parámetros (meseta, no pico), walk-forward, test en otro activo (ETH) *sin reoptimizar*.
5. **Contra azar:** comparar contra miles de series sintéticas/permutadas (p. ej., permutar retornos manteniendo la estructura de operaciones) para estimar la probabilidad de obtener ese resultado por suerte; bootstrap de operaciones para intervalos de confianza.
6. **Corrección por múltiples pruebas:** llevar la cuenta de **cuántas variantes se probaron** (registro de experimentos); cada variante extra aumenta la probabilidad de falso positivo (data snooping).
7. **Decisión:** aceptar, modificar (nueva hipótesis, nuevo periodo de prueba) o descartar. Descartar es resultado válido.

### Cómo distinguir ventaja de azar (intuición)

Si pruebas 100 combinaciones de parámetros, algunas se verán buenas aunque no exista ventaja. Señales de que es probablemente ruido: rendimiento que solo existe en un rango estrecho de parámetros, concentrado en 1–3 operaciones, que desaparece fuera de muestra o con costos realistas, o sin hipótesis económica que lo explique.

## Decisiones

[ADR-0002](../decisiones/adr/ADR-0002-estrategia-inicial.md)

## Riesgos

Whipsaw en rangos · cambios de régimen · pocas operaciones (poca potencia estadística) · sobreajuste al ciclo cripto reciente.

## Próximos pasos

- [ ] Redactar H1 en `experimentos/` antes de cualquier backtest (semana 1)
- [ ] Definir periodos: desarrollo / validación / prueba final intocable (semana 2)

## Fuentes

Literatura general de backtesting (p. ej. López de Prado, *Advances in Financial Machine Learning*; Bailey et al. sobre *backtest overfitting* y *deflated Sharpe ratio*) ⚠️ — no consultada hoy; verificar referencias exactas al estudiarlas.

## Enlaces relacionados

[10 Backtesting](10-backtesting.md) · [experimentos](../experimentos/README.md) · [glosario](glosario.md)
