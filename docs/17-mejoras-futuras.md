# 17 — Mejoras futuras

**Objetivo:** listar mejoras posibles sin adelantar complejidad.
**Actualizado:** 2026-11-04

## Resumen

Ninguna se implementa sin una hipótesis medible y evidencia de que aporta. Machine learning/IA **no** se presupone beneficioso: aumenta riesgo de sobreajuste y costo de validación.

| Mejora | Beneficio potencial | Complejidad | Riesgo | Costo | Dependencias | Prioridad | Evidencia de utilidad |
|---|---|---|---|---|---|---|---|
| Informes automáticos | Medio (ahorra tiempo) | Baja | Bajo | ~0 | Experimentos registrados | **Alta** | Alta (práctica) |
| Alertas inteligentes | Medio | Baja | Bajo | ~0 | Monitoreo | Alta | Alta |
| Comparación continua de estrategias | Medio | Media | Data snooping | ~0 | Registro de experimentos | Media | Media |
| Múltiples estrategias / diversificación | Posible reducción de riesgo | Media | Correlaciones ocultas | ~0 | Una estrategia validada | Media | Media ⚠️ |
| Gestión de portafolio | Medio | Media-alta | Complejidad | ~0 | Varias estrategias/activos | Baja | Media ⚠️ |
| Optimización automática | Incierto | Media | **Sobreajuste alto** | Cómputo | Walk-forward robusto | Baja | Baja-media |
| Detección de regímenes | Incierto | Alta | Sobreajuste | ~0 | Histórico largo | Baja | Incierta |
| Análisis de noticias / sentimiento | Incierto | Alta | Ruido, costo de datos | Datos de pago | Fuentes | Muy baja | Incierta |
| Machine learning / IA | Incierto | Alta | Sobreajuste, opacidad | Cómputo/tiempo | Datos, validación madura | Muy baja | Incierta; no presupuesta |

Criterio de entrada: la mejora entra al roadmap solo si (1) hay hipótesis escrita, (2) se puede medir contra la línea base, (3) el costo de mantenimiento es asumible.

## Próximos pasos

- [ ] Revisar tras la fase 13 (validación)

## Fuentes

Juicio del autor; sin evidencia citada ⚠️.

## Enlaces relacionados

[05](05-estrategias.md) · [10](10-backtesting.md)
