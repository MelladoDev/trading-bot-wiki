# 07 — Evaluación de tecnologías

**Objetivo:** comparar lenguajes, motores, backend, almacenamiento, frontend y arquitecturas sin sesgo hacia el stack que ya conoces, y definir la prueba de concepto que cierra la decisión.
**Actualizado:** 2026-11-04
**Estado de la decisión:** 🟡 **PRELIMINAR — no definitiva hasta completar la PoC (semanas 3–4).**

## Resumen

- **Lenguaje núcleo (motor, datos, backtest): Python.** No por ser popular: el ecosistema de datos/finanzas/trading (pandas, numpy, ccxt, Freqtrade) vive allí, y es donde hay más material para aprender. TypeScript queda como lenguaje del dashboard *si* se construye uno propio.
- **Motor: no escribir uno desde cero para ejecución.** El código crítico (órdenes, estados, reconciliación, reinicios) es donde los errores cuestan dinero y donde un framework con años de uso aporta más. Se prueba **Freqtrade** (licencia GPLv3, `dry-run`, backtesting, UI y Telegram; Binance y Kraken soportados — ✅ [PyPI](https://pypi.org/project/freqtrade/), versión 2026.10 del 30-oct-2026, Python ≥ 3.12).
- **Análisis/investigación propios en Python** (pandas + DuckDB/Parquet): ahí está el aprendizaje que buscas (métricas, sesgos, estadística) sin riesgo de dinero.
- **Dashboard:** usar FreqUI primero; panel React propio solo si hay una necesidad no cubierta (ver [12](12-dashboard.md)).
- Resultado de la matriz: **Arquitectura C (framework existente) y D (C + investigación propia en Python) empatan en 4,35/5**; A (TypeScript completo) 3,00; B (Python + motor propio + React) 3,45. La PoC decide entre C y D (en la práctica D es C con una capa de análisis propia).

> Importante: la matriz usa tus pesos iniciales. Las puntuaciones son juicios del autor, justificados abajo, **no mediciones**. Algunas premisas están marcadas ⚠️ y se comprobarán en la PoC.

## 1. ¿Necesitas baja latencia?

**No.** Una estrategia diaria o de velas de horas decide una vez por vela; una demora de segundos es irrelevante. La latencia importa en alta frecuencia/market making, donde además compites con infraestructura profesional (colocation). Optimizar latencia en el MVP sería complejidad sin beneficio. Lo que sí importa: **corrección, idempotencia, precisión decimal, recuperación tras reinicios**.

## 2. Comparación de lenguajes

Escala 1–5 para este proyecto. ⚠️ = juicio basado en conocimiento previo.

| Criterio | Python | TypeScript/Node | C#/.NET | Go | Rust |
|---|---:|---:|---:|---:|---:|
| Obtención de datos | 5 | 4 | 3 | 3 | 3 |
| Procesamiento financiero / estadística | 5 | 2 | 3 | 2 | 2 |
| Backtesting (ecosistema) | 5 | 2 | 4 (LEAN) | 2 | 2 |
| Conexión a exchanges (ccxt) | 5 | 5 | 3 | 3 | 2 |
| Ejecución continua | 4 | 4 | 5 | 5 | 5 |
| Concurrencia | 3 | 4 | 5 | 5 | 5 |
| Rendimiento / latencia | 2 | 3 | 4 | 5 | 5 |
| Precisión numérica | 3 (usar `Decimal`) | 2 (sin decimal nativo) | 5 (`decimal`) | 3 | 4 |
| Seguridad / tipado | 3 (con mypy) | 4 | 5 | 4 | 5 |
| Mantenimiento por una persona | 4 | 4 | 4 | 3 | 2 |
| Curva de aprendizaje para ti | 3 | 5 | 2 | 2 | 1 |

Conclusión: Python gana en lo que este proyecto más necesita (datos, estadística, backtesting, comunidad). Go/Rust/C# serían relevantes solo para latencia o robustez de ejecución extrema, que el MVP no requiere. **Híbrido** (Python + otro lenguaje) solo se justificaría si se midiera un cuello de botella real; hoy su costo de integración no se compensa con ningún beneficio demostrado.

## 3. ¿Motor propio o framework?

Tipos de herramienta (no son equivalentes):

| Categoría | Ejemplos |
|---|---|
| Conector de exchanges | ccxt |
| Indicadores | TA-Lib, pandas-ta ⚠️ |
| Análisis / backtest vectorizado | VectorBT, pandas propio |
| Motor de backtest por eventos | Backtrader ⚠️, Backtesting.py ⚠️ |
| Plataforma completa (datos+backtest+paper+live+UI) | Freqtrade, QuantConnect LEAN |
| Sistema de ejecución / market making | Hummingbot |

| Alternativa | Mercados | Backtest | Paper | Live | UI | Licencia | Encaje con el proyecto | Notas |
|---|---|---|---|---|---|---|---|---|
| **Freqtrade** | Cripto spot (y futuros) | ✅ | ✅ dry-run | ✅ | ✅ web + Telegram | GPLv3 ✅ | **Alto** | Estrategias en Python; exchanges incl. Binance/Kraken ✅; GPL: si distribuyes derivados, aplica copyleft ⚠️ (uso personal no problema) |
| QuantConnect LEAN | Multi-activo | ✅ | ✅ | ✅ | Parcial | Apache 2.0 ⚠️ | Medio | Potente pero pesado; C#/Python; datos y live suelen ir ligados a su nube ⚠️ |
| Hummingbot | Cripto (MM/arbitraje) | Limitado ⚠️ | ✅ | ✅ | ✅ | Apache 2.0 ⚠️ | Bajo | Orientado a market making/arbitraje, no a tendencia diaria |
| VectorBT | Cualquiera (datos propios) | ✅ muy rápido | ❌ | ❌ | Gráficos | Núcleo abierto, versión PRO de pago ⚠️ | Medio (investigación) | Excelente para barrer parámetros —y para sobreajustar si no se cuida |
| Backtrader | Cualquiera | ✅ | Parcial | Parcial | ❌ | GPL ⚠️ | Bajo | Mantenimiento limitado ⚠️ (verificar fecha del último release) |
| ccxt + código propio | Cripto | Lo que escribas | Lo que escribas | Lo que escribas | Lo que escribas | MIT ⚠️ | Medio | Máximo aprendizaje, máximo riesgo de bugs en ejecución |

### Respuesta explícita

**¿Vale la pena un motor propio?**
- **Para ejecución real/paper: no en el MVP.** Reimplementar manejo de órdenes parciales, reintentos, reconciliación y límites de petición es costoso y es donde los errores mueven dinero. Aprendes más *usando y leyendo* un framework maduro y construyendo encima lo que sí te interesa.
- **Para investigación/backtest propio: sí, en pequeño.** Escribir un backtester diario simple (decenas de líneas con pandas) para una estrategia de pocas reglas es una excelente forma de aprender los sesgos (look-ahead, costos) y sirve para **contrastar** resultados con el motor de Freqtrade: si divergen, hay un bug o una suposición distinta, y descubrirlo es parte del valor.
- Aprender no implica programar desde cero los componentes críticos.

## 4. Backend / API del dashboard

| | Node + Express | Node + Fastify | Python + FastAPI | Python + Django |
|---|---|---|---|---|
| Integración con motor Python | Proceso aparte vía HTTP/DB | Ídem | **Mismo lenguaje, importa código** | Ídem, más pesado |
| Validación | Manual/zod | Esquemas nativos | Pydantic ✅ | DRF |
| WebSockets | Sí | Sí | Sí | Con Channels |
| Complejidad | Baja | Baja | Baja | Media-alta |
| Encaje | Medio (si el motor es Python, añade un salto) | Medio | **Alto** | Bajo (exceso) |

- Si se usa Freqtrade, **ya incluye una API REST y FreqUI**; un backend propio solo hace falta para datos que no expone (experimentos, reportes). ⚠️ Verificar alcance de su API en la PoC.
- **Motor y API como procesos separados:** sí, siempre. El bot no debe caerse ni bloquearse por una petición del dashboard, y el dashboard no debe tener la clave de trading. Comparten estado vía base de datos (solo lectura para la API) — separación de privilegios, no microservicios.

## 5. Almacenamiento

| Tipo de dato | Volumen esperado | Recomendación MVP | Cuándo cambiar |
|---|---|---|---|
| **Históricos** (velas) | BTC diario ≈ 4.000 filas; 1 min ≈ millones | **Parquet** + **DuckDB** para consultas | Si necesitas datos de tick o muchas series |
| **Operacionales** (órdenes, posiciones, config, auditoría) | Miles de filas | **SQLite** (Freqtrade lo usa por defecto ⚠️) | PostgreSQL si hay varios procesos escritores o dashboard multiusuario |
| **Analíticos** (experimentos, métricas) | Pequeño | **Parquet/JSON + DuckDB**; resumen en Markdown | PostgreSQL solo si lo prefieres para el dashboard propio |

| | Pros | Contras |
|---|---|---|
| PostgreSQL | Lo conoces; robusto; concurrencia | Servicio extra que operar/respaldar |
| SQLite | Cero administración; archivo único | Un escritor a la vez |
| TimescaleDB | Series temporales a gran escala | Sobreingeniería para este volumen |
| DuckDB | Analítica local rapidísima sobre Parquet | No es base operacional multiusuario |
| Parquet | Compacto, versionable, estándar | Sin consultas por sí solo |

Evitar TimescaleDB y colas hasta conocer el volumen real. PostgreSQL es perfectamente defendible si prefieres una sola base; la recomendación de SQLite+Parquet es por **menor operación**, no por rendimiento.

## 6. Frontend y gráficos

- **Framework:** React es adecuado y ya lo dominas; Vue/Svelte no aportan ventaja para este caso. **Aquí tu conocimiento sí desempata**, porque ninguna alternativa ofrece una ventaja técnica relevante para un panel de lectura.
- **Gráficos:**

| Librería | Velas | Indicadores | Series largas | Tiempo real | Curvas de capital/drawdown | Notas |
|---|---|---|---|---|---|---|
| TradingView Lightweight Charts | ✅ excelente | ✅ (series superpuestas) | ✅ | ✅ | Posible | Especializada en finanzas ⚠️ |
| Recharts | ❌ no nativo | Posible | Medio | Medio | ✅ | Ya la conoces; ideal para capital/drawdown |
| Apache ECharts | ✅ | ✅ | ✅ | ✅ | ✅ | Muy completa, más grande |
| Plotly | ✅ | ✅ | Medio | Medio | ✅ | Excelente en notebooks de investigación |

Sugerencia: **Plotly en notebooks** para investigación; **Lightweight Charts (velas) + Recharts (equity/drawdown)** si se hace panel propio.

## 7. Arquitecturas candidatas

Diagramas Mermaid en [arquitectura/diagramas.md](../arquitectura/diagramas.md).

| | A — TypeScript completo | B — Python + motor propio + React | C — Framework existente (Freqtrade + FreqUI) | D — C + investigación propia (Python) |
|---|---|---|---|---|
| Stack | React, Node, motor propio, PostgreSQL | Python (motor, FastAPI), React, SQLite/PG | Freqtrade, FreqUI, SQLite | C + pandas/DuckDB/Parquet/notebooks |
| Responsabilidades | Todo propio | Todo propio salvo ccxt | Freqtrade: datos, estrategia, paper, live, UI | Freqtrade ejecuta; tu código analiza y valida |
| Ventajas | Un solo lenguaje; tu comodidad | Control total; buen aprendizaje | Más rápido; ejecución probada | Rápido + aprendizaje analítico real |
| Desventajas | Sin ecosistema cuant; decimal débil; todo por construir | Motor de ejecución sin probar; mucho tiempo | Menos flexible; acoplado a su versión | Dos capas que mantener |
| Riesgos | Bugs de ejecución, estadística casera | Idem + tiempo | Cambios de versión; GPL; límites del framework | Divergencia entre backtest propio y de Freqtrade (que justamente se estudia) |
| Costo | ~0 | ~0 | ~0 | ~0 |
| Tiempo a primer backtest | 6–8 sem ⚠️ | 5–7 sem ⚠️ | 1–2 sem ⚠️ | 2–3 sem ⚠️ |
| Mantenimiento | Alto | Alto | Medio | Medio |
| Escalabilidad | Media | Media | Media (un bot) | Media |
| Aprendizaje | Bajo en finanzas | Alto | Medio | Alto |

Estimaciones de tiempo: ⚠️ juicio del autor a 13 h/sem; se corregirán con la PoC.

## 8. Matriz de decisión ponderada 🧮

Pesos iniciales (sin modificar). Puntuaciones 1–5.

| Criterio | Peso | A | B | C | D |
|---|---:|---:|---:|---:|---:|
| Adecuación técnica y confiabilidad | 25 % | 3 | 4 | 4 | 5 |
| Seguridad y riesgo operativo | 20 % | 3 | 3 | 4 | 4 |
| Ecosistema especializado | 15 % | 2 | 4 | 5 | 5 |
| Tiempo de implementación | 15 % | 2 | 2 | 5 | 4 |
| Mantenimiento | 10 % | 3 | 3 | 4 | 3 |
| Costos | 10 % | 5 | 5 | 5 | 5 |
| Facilidad de aprendizaje | 5 % | 5 | 3 | 3 | 3 |
| **Total ponderado** | 100 % | **3,00** | **3,45** | **4,35** | **4,35** |

Justificación de las puntuaciones decisivas:
- **Confiabilidad (A=3, B=4, C=4, D=5):** A carece de librerías cuantitativas equivalentes y de aritmética decimal nativa; B/C usan Python; D suma validación cruzada de backtests, que reduce el riesgo de resultados erróneos.
- **Seguridad (A=3, B=3, C=4, D=4):** código de órdenes propio y sin historial de uso (A, B) frente a uno ampliamente usado (C, D). **No** equivale a "seguro": el framework también tiene superficie de ataque y requiere configuración correcta.
- **Ecosistema (A=2 … C/D=5):** casi todo lo cuantitativo y de bots cripto abiertos está en Python.
- **Tiempo (A,B=2; C=5; D=4):** C trae casi todo hecho; B/A exigen escribirlo.
- **Aprendizaje (A=5):** es la única ventaja de A y pesa 5 %. No se incrementa ese peso artificialmente.
- **Mantenimiento (C=4, D=3):** C depende de las actualizaciones del proyecto (liberan versiones con frecuencia ⚠️, con posibles cambios incompatibles); D añade una segunda base de código.

**Prueba de sensibilidad:** con pesos alternativos (técnica 20, seguridad 20, ecosistema 10, tiempo 15, mantenimiento 15, costos 15, aprendizaje 5) los resultados son A 3,15 · B 3,45 · C 4,35 · D 4,25. **El orden no cambia**: A < B < D ≈ C. La conclusión es robusta a esos pesos, pero no a un error en las premisas ⚠️ (por ejemplo, si Freqtrade no soportara tu exchange real o tus necesidades de ejecución); por eso la PoC.

## 9. Prueba de concepto

Objetivo: confirmar con trabajo real, no con tablas, que **C/D** satisface los requisitos y que **B** no ofrece ventajas que justifiquen su costo.

**Estrategia de la PoC:** cruce SMA(50)/SMA(200) o ruptura Donchian(55/20) diario en BTC/USDT, con comisión parametrizada. (Es un *vehículo de prueba*; sus resultados **no** evalúan la estrategia.)

| Paso | PoC-B (Python propio) | PoC-C (Freqtrade) |
|---|---|---|
| 1. Descargar históricos | `ccxt` → Parquet | `freqtrade download-data` ⚠️ |
| 2. Implementar estrategia | pandas (señal desplazada 1 vela) | clase `IStrategy` |
| 3. Backtest | función propia | `freqtrade backtesting` |
| 4. Comisiones | parámetro | parámetro/`fee` |
| 5. Métricas | CAGR, MDD, Sharpe, PF, n.º de operaciones | reporte nativo |
| 6. Simular órdenes | log de órdenes simuladas | `dry-run` varios días |
| 7. Persistir | DuckDB/Parquet | SQLite nativo + export |
| 8. Consultar | FastAPI mínima o notebook | API/FreqUI nativas |

**Esfuerzo estimado** ⚠️: PoC-B ≈ 12–15 h (semana 3); PoC-C ≈ 10–13 h (semana 4); comparación y ADR ≈ 3 h.

**Criterios de decisión (fijados antes de ver resultados):**
1. ¿Ambas implementaciones producen **el mismo conjunto de operaciones** (±diferencias explicables de ejecución/comisión)? Si no, investigar antes de confiar en cualquiera.
2. ¿Freqtrade corre en `dry-run` estable ≥ 7 días con tu configuración y se recupera de un reinicio sin duplicar órdenes simuladas?
3. ¿Tiempo real invertido vs. estimado? Si C requirió < 60 % del tiempo de B y cubre los requisitos → adoptar C/D.
4. ¿Algún requisito crítico no cubierto por Freqtrade (p. ej. exchange necesario, reglas de riesgo)? Si sí → evaluar B/extensión.
5. ¿Los datos y resultados se pueden extraer a tu propio análisis? (necesario para D).

## 10. Decisión final (provisional)

| Clasificación | Tecnología |
|---|---|
| **Imprescindibles** | Python ≥ 3.12, Git/GitHub, ccxt (directo o vía Freqtrade), pandas/numpy, Parquet |
| **Recomendadas** | Freqtrade (pendiente PoC), DuckDB, SQLite, pytest, uv/venv, Jupyter + Plotly, Docker (despliegue) |
| **Opcionales** | FastAPI (API propia), React + Lightweight Charts/Recharts (panel propio), VectorBT (barridos acotados), PostgreSQL |
| **Descartadas por ahora** | Rust/Go/C# (sin necesidad de latencia), TimescaleDB, colas/microservicios, ML/IA, Hummingbot, LEAN |

Plan de formación (≈ 1 h/sem dentro de las 13 h): Python para datos (pandas) → estadística básica de retornos → backtesting y sesgos → manejo de órdenes y riesgo → despliegue. Detalle en el roadmap.

**Costos:** software abierto, $0; infraestructura ver [16](16-presupuesto.md).
**Posibles mejoras futuras:** [17](17-mejoras-futuras.md).

## Decisiones

[ADR-0003 stack](../decisiones/adr/ADR-0003-stack.md) · [ADR-0004 almacenamiento](../decisiones/adr/ADR-0004-almacenamiento.md) · [ADR-0005 dashboard](../decisiones/adr/ADR-0005-dashboard.md)

## Riesgos

Premisas ⚠️ sin verificar (versión/soporte de Freqtrade para tu caso, licencias de terceros) · sesgo de confirmación en puntuaciones · dependencia de un proyecto externo (cambios de versión, abandono) · GPL si algún día distribuyes derivados.

## Próximos pasos

- [ ] Ejecutar PoC-B y PoC-C (semanas 3–4)
- [ ] Verificar en documentación oficial: comandos, licencias, exchanges soportados, versión de Python
- [ ] Cerrar ADR-0003 con los resultados

## Fuentes

- [Freqtrade — PyPI](https://pypi.org/project/freqtrade/) (versión 2026.10, 30-oct-2026; Python ≥ 3.12; GPLv3; dry-run, backtesting, UI web/Telegram; Binance, Kraken entre los exchanges spot) — consultada 2026-11-04 ✅
- Todo lo marcado ⚠️: conocimiento previo; verificar en documentación oficial de cada proyecto.

## Enlaces relacionados

[08 Arquitectura](08-arquitectura.md) · [12 Dashboard](12-dashboard.md) · [ADR](../decisiones/README.md)
