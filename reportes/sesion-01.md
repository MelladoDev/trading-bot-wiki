# Reporte de sesión 01 — 2026-11-04

## Resumen del trabajo
Primera entrega: diagnóstico de viabilidad, comparación de mercados/plataformas/estrategias, evaluación tecnológica preliminar con matriz ponderada, arquitecturas candidatas, PoC propuesta, plan financiero preliminar, cronograma y primeras 4 semanas, y wiki inicial.

## Archivos creados
Toda la estructura de este repositorio (README, docs 01–18 + glosario, roadmap S1–S4 y cronograma, ADR 0001–0005, plantilla de experimentos, diagramas).

## Archivos modificados
Ninguno previo.

## Pruebas realizadas
- Búsquedas web (consultadas 2026-11-04): SII (cripto), Ley Fintech/CMF, exchanges para Chile, Freqtrade, Alpaca/Trii.
- Lectura de páginas: SII (noticia 22-09-2025), PyPI de Freqtrade, Guía de Trader (afiliados), nota de Trii+Alpaca.
- Cálculos (reproducibles abajo).
- **No se ejecutó código de trading ni backtests.** No hay resultados financieros.

## Cálculos reproducibles
```python
fx=950
for c in [50_000,100_000,250_000,500_000,1_000_000]:
    print(c, round(c/fx), [round(t/c*100,1) for t in (50_000,100_000,200_000)], c*0.01, c*0.002, c*0.016, c*0.02)
w=[25,20,15,15,10,10,5]
S={"A":[3,3,2,2,3,5,5],"B":[4,3,4,2,3,5,3],"C":[4,4,5,5,4,5,3],"D":[5,4,5,4,3,5,3]}
for k,v in S.items(): print(k, sum(a*b for a,b in zip(w,v))/100)
```

## Problemas / limitaciones
- No se visitaron páginas oficiales de Binance, Kraken, Buda, CMF ni documentación de Freqtrade/ccxt: todo lo ⚠️ está sin verificar.
- Fuente principal de comisiones: guía de afiliados.
- Tipo de cambio y precios de VPS: placeholders.
- Resultados de la búsqueda sobre CMF/Ley Fintech: solo títulos; no se leyó el contenido.

## Decisiones
ADR-0001 a 0005 **propuestos**, ninguno aceptado. ADR-0003 pendiente de PoC.

## Estado del proyecto
Fase 1 en revisión. Sin código.

## Próximas tareas
Semana 1 ([roadmap/semana-01.md](../roadmap/semana-01.md)), ~13 h.

## Duración estimada del siguiente paso
Semana 1: 11–13 h. Siguiente sesión conmigo: ~1–2 h para revisar tus respuestas P1–P7 y las verificaciones de plataformas.
