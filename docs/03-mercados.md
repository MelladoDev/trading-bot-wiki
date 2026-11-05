# 03 — Mercados financieros

**Objetivo:** comparar mercados accesibles desde Chile y recomendar uno inicial.
**Actualizado:** 2026-11-04

## Resumen

**Recomendación: criptomonedas spot (BTC/USDT y ETH/USDT), velas diarias, sin apalancamiento** — elegido por *facilidad técnica y de aprendizaje* (datos gratuitos, 24/7, capital pequeño, testnets/dry-run, APIs), **no** porque tenga mayor potencial de rentabilidad. La facilidad técnica no es ventaja estadística; lo que aporta es iterar rápido y barato.

## Matriz comparativa

Calificación 1 (peor) – 5 (mejor) **para este proyecto** (capital pequeño, automatización individual, sin apalancamiento). Son juicios del autor, justificados en la columna de notas; datos marcados con ⚠️ requieren verificación.

| Criterio | Cripto spot | Acciones EE.UU. | ETF | Forex | 
|---|---:|---:|---:|---:|
| Disponibilidad desde Chile | 5 | 4 | 4 | 3 |
| Capital mínimo práctico | 5 | 3 | 3 | 4 |
| Datos históricos gratis | 5 | 3 | 3 | 2 |
| APIs / automatización | 5 | 4 | 4 | 3 |
| Paper trading / testnet | 4 | 5 | 5 | 4 |
| Costos totales (comisión+spread+FX) | 3 | 3 | 4 | 2 |
| Horarios (más datos y operaciones) | 5 | 2 | 2 | 4 |
| Complejidad regulatoria/tributaria | 2 | 3 | 3 | 2 |
| Riesgo de contraparte | 2 | 4 | 4 | 2 |
| Supervisión requerida | 3 | 4 | 5 | 2 |
| **Promedio simple** | **3,9** | **3,5** | **3,7** | **2,8** |

Notas: promedio sin ponderar, solo orientativo 🧮. Forex penalizado porque el acceso típico es vía CFD con apalancamiento y brokers offshore ⚠️, contrario a las reglas del MVP. ETF/acciones tienen mejor contraparte y regulación, pero horarios limitados, FX CLP→USD y menos pares para experimentar.

## Detalle por mercado

### Cripto spot
- **Ventajas:** datos OHLCV gratuitos, 24/7 (más muestras), operaciones fraccionarias, APIs maduras, dry-run y herramientas abiertas.
- **Desventajas:** alta volatilidad y colas gruesas, riesgo de exchange, historia corta (~10 años de calidad ⚠️), comisión alta en exchanges locales ([04](04-plataformas.md)), tributación activa (SII fiscaliza, ver [15](15-impuestos-chile.md)).
- **Riesgos específicos:** hackeo/quiebra de exchange, depeg de stablecoins, cambios regulatorios, P2P CLP→USDT con contraparte.
- **Horario:** 24/7 → el sistema debe tolerar caídas y reinicios.

### Acciones EE.UU. / ETF
- Acceso desde Chile confirmado de forma secundaria: Trii habilitó acciones de EE.UU. para Chile apoyándose en la API de Alpaca (nota de prensa, 10-mar-2026) 🟡 [fuente](https://www.plushcap.com/content/alpaca/blog/alpaca-trii-launches-us-stock-trading-in-chile-expanding-global-investment-access-with-alpaca). No está claro si esa integración ofrece **API de trading propia** para el usuario final ⚠️.
- Interactive Brokers ofrece cuentas a residentes de muchos países con API y paper trading ⚠️ (no verificado para Chile hoy).
- Datos históricos de calidad suelen ser de pago o limitados en gratuito ⚠️.
- Los ETF diversificados son además el **benchmark pasivo natural** (ver [06](06-plan-inversion.md)).

### Forex
- Mayoritariamente CFD apalancados con brokers extranjeros ⚠️; spreads y swaps; regulación poco clara para minoristas chilenos ⚠️. No encaja con "sin apalancamiento".

### Otros (renta fija, fondos mutuos, depósitos)
Fuera del alcance de trading algorítmico; relevantes solo como alternativa pasiva.

## Clasificación por conveniencia (para el MVP)

1. Cripto spot (BTC/ETH, diario)
2. ETF/acciones EE.UU. (como segundo mercado o benchmark; revisitar si cripto resulta inviable)
3. Forex (descartado en el MVP)

## Condiciones que justificarían cambiar de mercado

- Backtests muestran que la ventaja (si existe) desaparece tras costos reales en cripto.
- El exchange elegido no está disponible o cambia condiciones para residentes chilenos.
- Cambio regulatorio/tributario que encarezca operar cripto.
- Aparece un broker de acciones/ETF con API accesible y bajos costos para Chile.

## Decisiones

[ADR-0001](../decisiones/adr/ADR-0001-mercado-inicial.md)

## Riesgos / Próximos pasos

- [ ] Verificar T&C de Binance/Kraken/Buda para residentes chilenos (semana 1)
- [ ] Confirmar historia disponible BTC/USDT y ETH/USDT por exchange (semana 2)

## Fuentes

- [Trii + Alpaca (plushcap)](https://www.plushcap.com/content/alpaca/blog/alpaca-trii-launches-us-stock-trading-in-chile-expanding-global-investment-access-with-alpaca) — 2026-11-04
- Resto: conocimiento previo ⚠️

## Enlaces relacionados

[04 Plataformas](04-plataformas.md) · [05 Estrategias](05-estrategias.md) · [15 Impuestos](15-impuestos-chile.md)
