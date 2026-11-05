# 02 — Diagnóstico de viabilidad

**Objetivo:** evaluar si el proyecto es razonable técnica, financiera y operativamente.
**Actualizado:** 2026-11-04

## Resumen

| Dimensión | Veredicto | Comentario |
|---|---|---|
| Técnica | ✅ **Viable** | Hay ecosistema maduro (Python, ccxt, Freqtrade). Tu experiencia web sirve para dashboard/API. El MVP no requiere baja latencia |
| Operativa | 🟡 **Viable con disciplina** | 11–18 h/sem alcanzan para construir en ~4–5 meses; la validación posterior es lenta por naturaleza |
| Financiera (como ingreso) | 🔴 **Poco probable con capital pequeño** | Ver cálculo abajo. Incluso un buen resultado produce montos pequeños frente al tiempo invertido |
| Financiera (como investigación/aprendizaje) | ✅ **Razonable** | Costo monetario cercano a cero si se usa solo simulación |

**Conclusión honesta:** vale la pena como proyecto de ingeniería y aprendizaje con riesgo financiero controlado. Como fuente de ingresos, la evidencia disponible no lo respalda y hay que asumir que puede no funcionar.

## 1. Viabilidad técnica

- Obtención de datos OHLCV: gratuita vía APIs públicas de exchanges (ccxt) ⚠️.
- Backtesting y paper trading: soportados por herramientas existentes. Freqtrade lista `dry-run` y backtesting, y Binance/Kraken entre sus exchanges spot soportados ✅ ([PyPI](https://pypi.org/project/freqtrade/), consultado 2026-11-04).
- Latencia: irrelevante para estrategias diarias/horarias (ver [07](07-evaluacion-tecnologias.md)).
- Riesgo técnico principal: **errores de ejecución** (órdenes duplicadas, estados desincronizados) y **sesgos del backtest**, no el rendimiento del lenguaje.

## 2. Viabilidad operativa

Disponibilidad: 11 h (mín.) – 18 h (máx.); base 13 h.

- Construcción (fases 1–9): ~18 semanas a 13 h ≈ **234 h** 🧮 + 2 semanas de colchón.
- Validación en paper trading: **≥ 12 semanas adicionales** y probablemente más (ver abajo), con ~2 h/sem de supervisión.
- Estimación corregida: el roadmap de "3–6 meses" cubre la **construcción**; llegar a una decisión informada sobre capital real toma **~7–12 meses**. Ver [cronograma](../roadmap/cronograma-general.md).

## 3. Viabilidad financiera

### 3.1 Qué rentabilidad exigen tus metas 🧮

Rentabilidad **mensual neta** requerida = meta mensual ÷ capital:

| Capital (CLP) | Meta 50.000 | Meta 100.000 | Meta 200.000 |
|---:|---:|---:|---:|
| 50.000 | 100 % | 200 % | 400 % |
| 100.000 | 50 % | 100 % | 200 % |
| 250.000 | 20 % | 40 % | 80 % |
| 500.000 | 10 % | 20 % | 40 % |
| 1.000.000 | 5 % | 10 % | 20 % |

Para dimensionar: 5 % mensual compuesto ≈ 80 % anual; 10 % mensual ≈ 214 % anual; 20 % mensual ≈ 792 % anual 🧮. Ninguna de estas cifras está respaldada por evidencia como objetivo sostenible; son solo la aritmética de la meta. **Con capital ≤ 250.000 CLP, las metas implican retornos que deben tratarse como irreales.** Las metas pequeñas solo se vuelven aritméticamente modestas con capitales altos, que a su vez elevan la pérdida posible.

### 3.2 Costo de oportunidad 🧮

13 h/sem × 18 semanas ≈ 234 h de construcción. Con un valor/hora **placeholder** de 10.000 CLP (cámbialo, ver P5) son ≈ 2,3 M CLP de tiempo. Es mayor que cualquier ganancia razonable con 50k–1M de capital. El retorno del proyecto es mayormente **aprendizaje y portafolio profesional**.

### 3.3 Costos que erosionan la ventaja

Ejemplo ilustrativo 🧮 (comisión por lado × 2 lados por operación completa):

| Operaciones/año | Comisión 0,1 % (Binance spot, 🟡) | Comisión 0,8 % (Buda, 🟡) |
|---:|---:|---:|
| 6 | 1,2 % | 9,6 % |
| 12 | 2,4 % | 19,2 % |
| 24 | 4,8 % | 38,4 % |
| 60 | 12,0 % | 96,0 % |

Sin contar spread, slippage ni conversión CLP↔USD. **Una estrategia con muchas operaciones en un exchange de comisión alta es inviable casi por construcción.**

### 3.4 Problema estadístico clave: pocas operaciones

Una estrategia diaria de tendencia genera ~5–20 operaciones por año ⚠️ (a confirmar con backtest). Consecuencias:

- 12 semanas de paper trading ≈ 1–5 operaciones: **no sirven para validar rentabilidad**; sirven para validar la *operación del sistema* (ejecución, reconciliación, alertas).
- Para que un Sharpe anual sea estadísticamente distinguible de cero (t ≥ 2), se necesitan ≈ (2/SR)² años de datos 🧮: SR 0,5 → 16 años; SR 1 → 4 años; SR 1,5 → 1,8 años; SR 2 → 1 año. Es una aproximación estándar (SE ≈ 1/√años) que ignora colas gruesas y autocorrelación.
- Con n = 30 operaciones, el error estándar del win rate es ≈ 9 puntos porcentuales 🧮 (√(0,25/30)).

Implicación: la validación recae en **backtests largos con muchos regímenes** (BTC tiene historia limitada ⚠️, ~2014+ en datos de calidad), tests fuera de muestra y comparación con benchmark; el paper trading es complementario.

## 4. Cuándo el proyecto NO se justifica

- Si tras backtests honestos la estrategia no supera a comprar y mantener **neta de costos y ajustada por riesgo**.
- Si el único atractivo es la rentabilidad bruta histórica.
- Si el capital es tan pequeño que costos fijos y comisiones dominan.
- Si supervisión y mantenimiento superan tu tiempo disponible.

Hacerlo igual como proyecto educativo es válido; lo que no es válido es presentarlo como inversión.

## Riesgos

Datos de mala calidad · sobreajuste · ejecución real distinta a la simulada · riesgo de exchange (quiebra, hackeo, congelamiento) · riesgo regulatorio/tributario · burnout por la baja velocidad de validación · riesgo de contraparte en P2P CLP→USDT.

## Próximos pasos

- [ ] Responder P1–P7 de [01](01-vision-objetivos.md)
- [ ] Ejecutar PoC de semanas 3–4

## Fuentes

- [Freqtrade en PyPI](https://pypi.org/project/freqtrade/) — consultado 2026-11-04
- Cálculos propios: sección 3 (supuestos explícitos)

## Enlaces relacionados

[01](01-vision-objetivos.md) · [06 Plan de inversión](06-plan-inversion.md) · [10 Backtesting](10-backtesting.md)
