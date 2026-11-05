# ADR-0003 — Stack tecnológico

- **Fecha:** 2026-11-04 · **Estado:** **Pendiente de PoC** (no definitivo)
- **Contexto:** requisito explícito de no elegir el stack por familiaridad. Evaluación en [07](../../docs/07-evaluacion-tecnologias.md).
- **Alternativas:** A (TypeScript completo), B (Python + motor propio + React), C (Freqtrade + FreqUI), D (C + investigación propia).
- **Decisión provisional:** Python; investigar primero C/D (empate 4,35 en la matriz); backtester propio para contraste (PoC-B).
- **Justificación:** ecosistema cuantitativo, ejecución probada, menor tiempo. Premisas ⚠️ a comprobar en PoC.
- **Consecuencias:** dependencia de un proyecto externo (GPLv3); aprendizaje de Python.
- **Cierre:** semana 4 con los criterios de [07 §9](../../docs/07-evaluacion-tecnologias.md#9-prueba-de-concepto).
