# 16 — Presupuesto

**Objetivo:** estimar costos en CLP. **Todos los precios son estimaciones ⚠️ a verificar**; supuesto 1 USD = 950 CLP (placeholder).
**Actualizado:** 2026-11-04

## Resumen

Alternativa de costo mínimo: **0 CLP** durante investigación y backtest (software abierto, datos públicos, ejecución local). El costo real aparece con VPS (≈ 4–6 mil CLP/mes ⚠️), tiempo propio y, si llega el caso, comisiones/impuestos.

## Costos

| Tipo | Concepto | Estimación |
|---|---|---|
| Únicos | Herramientas de desarrollo (VS Code, Git, Python, Docker) | 0 |
| Únicos | Consulta tributaria (contador) | ⚠️ por cotizar |
| Mensuales | VPS pequeño (paper/live) | ⚠️ ≈ 4–6 USD ≈ 3.800–5.700 CLP 🧮 |
| Mensuales | Respaldos/snapshots | ⚠️ ≈ 1 USD o 0 con script propio |
| Variables | Comisiones de trading | Ver [04](04-plataformas.md) y [02 §3.3](02-viabilidad.md) |
| Variables | Conversión CLP↔USD | ≈ 2 % ida y vuelta (supuesto) |
| Opcionales | Datos de pago, monitoreo premium | No necesarios en el MVP |
| Futuros | Capital, dominio, más infraestructura | A definir |

## Alternativa de desarrollo gratuito

Equipo propio + datos públicos + Freqtrade `dry-run` local + GitHub gratuito + Markdown. Pasar a VPS recién en la fase 8.

## Costo de oportunidad 🧮

```text
Horas = semanas × horas/semana
Costo = Horas × valor_hora (TÚ lo defines, P5)
```

| Escenario | Semanas | h/sem | Horas | Costo con 10.000 CLP/h (placeholder) |
|---|---:|---:|---:|---:|
| Mínimo | 18 | 11 | 198 | 1.980.000 |
| Base | 18 | 13 | 234 | 2.340.000 |
| Máximo | 18 | 18 | 324 | 3.240.000 |

(+ ≈ 2 h/sem de supervisión durante la validación). Comparar siempre este costo con el beneficio esperado: aprendizaje, portafolio profesional y la información de si la estrategia funciona.

## Próximos pasos

- [ ] Definir tu valor/hora real
- [ ] Verificar precios oficiales de VPS y exchange

## Fuentes

Estimaciones propias ⚠️.

## Enlaces relacionados

[06](06-plan-inversion.md) · [13](13-infraestructura.md)
