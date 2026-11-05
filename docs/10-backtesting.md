# 10 — Backtesting y validación estadística

**Objetivo:** metodología para evaluar estrategias sin engañarse.
**Actualizado:** 2026-11-04

## Resumen

Un backtest es un experimento con datos pasados, no una predicción. El mayor riesgo es **autoengaño**: sesgos, múltiples pruebas y suposiciones de ejecución irreales. Cada experimento queda registrado ([experimentos](../experimentos/README.md)).

## Proceso

1. **Datos:** descarga, limpieza, validación de calidad, hash, versión.
2. **Partición temporal:** *desarrollo* (ajuste) · *validación* (selección) · *prueba final* (intocable, se usa una sola vez). Nunca barajar aleatoriamente series temporales.
3. **Modelo de ejecución:** señal con vela cerrada t ⇒ orden ejecutada en apertura de t+1 (o peor); comisión + spread + slippage; cantidades mínimas.
4. **Pruebas:** backtest base → sensibilidad de parámetros → walk-forward → otro activo sin reoptimizar → regímenes (alcista, bajista, lateral) → costos duplicados (stress).
5. **Contra azar:** permutación/bootstrap de operaciones; comparación con estrategia aleatoria de misma exposición.
6. **Comparar con benchmarks:** buy & hold, DCA, y estrategia nula.
7. **Decisión** según criterios (abajo).

## Sesgos a controlar

| Sesgo | Qué es | Control |
|---|---|---|
| Look-ahead | Usar información futura | Desplazar señales; test de propiedad |
| Data leakage | Fugas entre train/test | Particiones temporales estrictas |
| Survivorship | Solo activos que sobrevivieron | Con BTC/ETH, declarar la limitación; evitar listas de "top actuales" retroactivas |
| Overfitting | Ajustarse al ruido | Pocos parámetros; mesetas; fuera de muestra |
| Data snooping | Muchas pruebas, reportar la mejor | Registrar **todas** las variantes; ajustar por múltiples pruebas (ej. deflated Sharpe ⚠️) |
| Selección de activos | Elegir el activo que "funcionó" | Fijar universo antes |
| Ejecución irreal | Suponer fills perfectos | Slippage conservador; ejecución en t+1 |

## Métricas obligatorias

| Métrica | Ventaja | Limitación |
|---|---|---|
| Rentabilidad bruta / neta | Intuitiva | Ignora riesgo y tiempo; solo la **neta** cuenta |
| Max drawdown | Pérdida máxima desde un pico | Depende de una sola caída; no dice frecuencia |
| Sharpe | Retorno ajustado por volatilidad | Penaliza vol. al alza; supone normalidad; ruidoso con pocos datos |
| Profit factor | Ganancias/pérdidas brutas | Sensible a pocas operaciones extremas |
| Win rate | Fácil | Sin tamaño de ganancia/pérdida no dice nada (trend following suele ganar < 50 %) |
| Expectativa matemática | Ganancia media por operación | Necesita muestra grande |
| Ganancia / pérdida promedio | Relación payoff | Idem |
| N.º de operaciones | Potencia estadística | Pocas ⇒ incertidumbre alta |
| Volatilidad, exposición | Contexto de riesgo | — |
| Consistencia temporal | Retornos por año/régimen | Pocas ventanas |
| Costos acumulados | Cuánto se lleva la fricción | — |

Intervalos de confianza (bootstrap) para todas las métricas principales.

## Criterios de decisión (a rellenar **antes** de cada experimento, no después)

No hay umbrales universales. Se definen por hipótesis; ejemplo de estructura:

| Resultado | Acción |
|---|---|
| Neto de costos no supera el benchmark ajustado por riesgo, o depende de 1–3 operaciones, o se rompe con costos ×2 | **Descartar** |
| Ventaja marginal, sensibles a parámetros | **Modificar** (nueva hipótesis, nuevo periodo de prueba) |
| Supera benchmark y test nulo en desarrollo y validación, con meseta de parámetros | **Prueba final** única |
| Pasa prueba final, costos y estrés | **Paper trading** |

## Próximos pasos

- [ ] Implementar métricas y verificarlas a mano (semanas 5–9)
- [ ] Plantilla de experimento en uso desde la semana 1

## Fuentes

Metodología general ⚠️ (López de Prado; Bailey & López de Prado sobre Sharpe deflactado). Verificar referencias al estudiarlas.

## Enlaces relacionados

[05](05-estrategias.md) · [11](11-paper-trading.md) · [plantilla](../experimentos/plantilla.md)
