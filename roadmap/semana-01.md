# Semana 1 — Revisión, verificación y entorno

**Estado:** ⚪ Pendiente · **Fechas:** 9–15 nov 2026 · **Horas presupuestadas:** 13 (mín. 11)
**Objetivo:** cerrar la fase 1: entender y corregir el diagnóstico, verificar plataformas, dejar el entorno listo y hacer el primer "hola datos".
**Dependencias:** ninguna.
**Entregables:** tabla de verificación de plataformas completada; respuestas P1–P7; repo Git; notebook `00-hola-datos`; hipótesis H1 escrita.
**Bloqueos:** —  · **Notas:** —

| Día | Tiempo | Tarea | Requisitos | Instrucciones | Archivos | Resultado | Finalización |
|---|---|---|---|---|---|---|---|
| Lun | 1,5 h ⭐ | Leer README, [02](../docs/02-viabilidad.md) y [06](../docs/06-plan-inversion.md); responder P1–P7 | — | Anota dudas y objeciones | [01](../docs/01-vision-objetivos.md) | Preguntas respondidas | P1–P7 con respuesta |
| Mar | 1,5 h | Estudiar OHLCV, retorno, drawdown | Glosario | Calcular a mano un drawdown con 8 números | [glosario](../docs/glosario.md) | Ejemplo resuelto | Ejemplo en notas |
| Mié | 1,5 h ⭐ | Instalar Python ≥ 3.12 (uv), VS Code, Git; crear repo privado | — | `uv init`; `.gitignore` con `.env`, datos | `src/` | Repo con primer commit | `python --version` ok |
| Jue | 1,5 h ⭐ | Verificar T&C de Binance, Kraken y Buda para residentes chilenos y uso de API/bots | — | Anotar URL oficial y fecha por cada dato en [04](../docs/04-plataformas.md) | 04 | Tabla actualizada | ≥ 3 plataformas con fuente oficial |
| Vie | 1,5 h | Preparar preguntas para contador; leer [15](../docs/15-impuestos-chile.md) | — | Lista de ≤ 10 preguntas | 15 | Lista final | Lista escrita |
| Sáb | 3 h ⭐ | "Hola datos": descargar BTC/USDT diario con ccxt, guardar Parquet, calcular retorno y MDD de comprar y mantener | Entorno listo | Script `src/data/hola_datos.py`; sin API key | `src/data/` | Gráfico de equity y MDD | Script reproducible, hash del dataset |
| Dom | 2,5 h ⭐ | Revisión semanal; escribir **H1** en `experimentos/` (antes de cualquier backtest); actualizar roadmap | Plantilla | Fijar X (reducción de MDD buscada) y criterios de descarte | [plantilla](../experimentos/plantilla.md) | H1 firmada con fecha | H1 commiteada; reporte semanal |

**Total:** 13 h.

## Checklist

- [ ] P1–P7 respondidas
- [ ] Conceptos: OHLCV, retorno, drawdown
- [ ] Repo + entorno Python
- [ ] Plataformas verificadas con fuentes oficiales
- [ ] Preguntas para contador
- [ ] Script "hola datos" funciona
- [ ] H1 escrita antes de ver resultados
- [ ] Reporte semanal en `reportes/`
- [ ] Roadmap actualizado

## Trabajo opcional (si sobran horas)

Leer documentación de Freqtrade (instalación); investigar historial disponible de BTC/ETH por exchange.
