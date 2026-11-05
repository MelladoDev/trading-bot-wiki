# ADR-0004 — Almacenamiento

- **Fecha:** 2026-11-04 · **Estado:** Propuesta
- **Contexto:** volumen pequeño (velas diarias/horarias, miles de operaciones).
- **Alternativas:** PostgreSQL, SQLite, TimescaleDB, DuckDB, Parquet.
- **Decisión:** Parquet + DuckDB (históricos y analíticos); SQLite (operacional).
- **Justificación:** cero administración; suficiente para el volumen. PostgreSQL es una alternativa válida si el dashboard propio o múltiples escritores lo requieren.
- **Consecuencias:** migrar a PostgreSQL implicará un paso de exportación; Timescale descartado por sobreingeniería.
- **Revisar si:** datos de tick, múltiples procesos escritores o dashboard multiusuario.
