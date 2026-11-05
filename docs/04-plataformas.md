# 04 — Plataformas, exchanges y fuentes de datos

**Objetivo:** identificar dónde obtener datos y dónde (eventualmente) operar, con lo verificado y lo pendiente.
**Actualizado:** 2026-11-04

## Resumen

- **Para investigación y simulación no se necesita cuenta ni dinero:** los datos históricos OHLCV se descargan con endpoints públicos y Freqtrade/ccxt operan en `dry-run` sin fondos ⚠️ (confirmar en semana 2).
- **Plataforma para pruebas:** Binance (datos públicos + dry-run), por liquidez y soporte en Freqtrade ✅ ([PyPI](https://pypi.org/project/freqtrade/)).
- **Plataforma potencial para operar real (a decidir mucho más adelante):** candidatas Binance (comisión baja, sin pares CLP) y Buda (local, CLP, comisión alta). Decisión depende de verificación legal y de costos ([ADR-0006 pendiente](../decisiones/README.md)).

> ⚠️ **Advertencia de fuente:** la principal fuente de comisiones es una guía de afiliados (mayo 2026). Verificar en la página de tarifas oficial de cada exchange antes de cualquier decisión.

## Tabla comparativa

| | Binance | Kraken | Buda (Chile) | OrionX (Chile) |
|---|---|---|---|---|
| Disponible para residentes chilenos | 🟡 "sin restricciones" según guía; **verificar T&C** | ⚠️ verificar | 🟡 sí (local) | 🟡 sí (local) |
| Pares CLP | 🟡 No en spot; USDT vía P2P (transferencia/Webpay) | 🟡 No mencionado; SWIFT en USD, tarjeta o stablecoins | 🟡 Sí, depósito/retiro en CLP | 🟡 Sí |
| Comisión spot | 🟡 0,1 % (menor con VIP/BNB) | 🟡 Kraken Pro 0,25 % maker / 0,40 % taker | 🟡 0,8 % | 🟡 ~0,5–0,8 %; Pro desde 0,3 % maker / 0,5 % taker |
| Catálogo | Muy amplio ⚠️ | Amplio ⚠️ | Limitado: BTC, ETH, USDC, USDT, DAI, LTC, BCH 🟡 | ~20 criptos 🟡 |
| API oficial | ⚠️ Sí, REST+WebSocket | ⚠️ Sí | ⚠️ Sí (verificar) | ⚠️ verificar |
| Testnet spot | ⚠️ Sí (testnet de Binance) | ⚠️ No claro | ⚠️ No claro | ⚠️ No claro |
| Soporte en Freqtrade | ✅ Binance y Kraken listados | ✅ | ❌ no listado (vía ccxt sin garantía, verificar) | ❌ no listado |
| Regulación según guía | Internacional | Regulado (SEC, FCA, otros) 🟡 | Registro PSAV CMF, adecuándose a Ley Fintech 🟡 | En adecuación como PSAV 🟡 |
| Riesgo principal | Contraparte offshore, P2P | Depósitos SWIFT/costos FX | **Comisión alta** | Comisión/volumen, soporte |

Fuentes: [Guía de Trader — mejores exchanges Chile 2026](https://www.guiadetrader.com/blog/mejores-exchanges-crypto-chile-2026) (consultada 2026-11-04, contenido de afiliados, cifras de mayo 2026) y [Freqtrade PyPI](https://pypi.org/project/freqtrade/) (2026-11-04). Todo lo marcado ⚠️ proviene de conocimiento previo del autor.

## Reflexión sobre costos

Con la estrategia de [05](05-estrategias.md) (≈ 6–20 operaciones/año ⚠️), comisión 0,1 % vs 0,8 % implica ≈ 1–5 % vs 10–32 % anual de fricción solo por comisiones ([02](02-viabilidad.md)). **La elección de exchange puede decidir por sí sola si una estrategia sobrevive.** Ese costo se incorporará como parámetro en cada backtest.

## ¿CCXT o API oficial directa?

| | CCXT / Freqtrade (usa ccxt) | API oficial directa |
|---|---|---|
| Ventajas | Interfaz unificada, cambia de exchange con poco código, comunidad grande | Control total, funciones nuevas antes |
| Desventajas | Capa extra, rezago con endpoints nuevos, manejo de errores abstracto | Más código, cada exchange distinto |
| Recomendación | **Usar ccxt** (directo o vía Freqtrade). API directa solo si falta una función crítica | — |

⚠️ Confirmar en la documentación de ccxt el soporte de órdenes idempotentes (`clientOrderId`) por exchange; es crítico para evitar órdenes duplicadas ([09](09-desarrollo.md)).

## Fuentes de datos

| Fuente | Uso | Estado |
|---|---|---|
| Endpoints públicos de klines del exchange (vía ccxt) | OHLCV diario/horario | ⚠️ confirmar límites de petición |
| Descargas masivas oficiales de exchanges ⚠️ | Histórico largo | ⚠️ investigar semana 2 |
| Freqtrade `download-data` | Histórico para backtest | ✅ función estándar de Freqtrade (verificar comando en docs) |

Guardar siempre: exchange, símbolo, timeframe, fecha de descarga y hash del dataset para reproducibilidad.

## Riesgos

Cambios de T&C · hackeo/quiebra de exchange · congelamiento de retiros · límites de peticiones · bloqueo por IP del servidor · políticas sobre bots (revisar T&C) · P2P (fraude, reversión de transferencias).

## Próximos pasos

- [ ] Leer T&C de Binance, Kraken y Buda sobre residentes chilenos y uso de API/bots (semana 1)
- [ ] Anotar fecha y URL oficial de cada verificación en la tabla de arriba
- [ ] Verificar si existe testnet spot utilizable y sus límites

## Fuentes

Ver enlaces arriba; no se visitaron todavía las páginas oficiales de exchanges.

## Enlaces relacionados

[03 Mercados](03-mercados.md) · [14 Seguridad](14-seguridad.md) · [15 Impuestos](15-impuestos-chile.md)
