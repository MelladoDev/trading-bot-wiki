# 13 — Infraestructura

**Objetivo:** ejecutar el sistema sin depender de tu computador encendido.
**Actualizado:** 2026-11-04

## Resumen

Durante investigación y backtest basta tu equipo. Para paper/live 24/7 conviene un **VPS pequeño con Docker** (ya usas DigitalOcean). Precios: ⚠️ verificar en la página oficial; orden de magnitud de un droplet básico ≈ 4–6 USD/mes (≈ 4.000–6.000 CLP al supuesto de 950 CLP/USD).

## Opciones

| Opción | Costo | Disponibilidad | Respaldos/logs | Complejidad | Veredicto |
|---|---|---|---|---|---|
| Local | 0 | Solo si el equipo está encendido; reinicios, cortes | Manual | Baja | Solo investigación |
| VPS (DigitalOcean u otro) | ⚠️ ~4–6 USD/mes | Alta | Snapshots (de pago) + tu script | Media | **Recomendada** para paper/live |
| Plataforma administrada (PaaS) | ⚠️ similar o mayor | Alta | Integrados | Baja-media | Posible; verificar disco persistente y IP fija |
| Raspberry Pi en casa | Hardware único | Depende de tu red/energía | Manual | Media | Alternativa de bajo costo; riesgo de cortes |

Requisitos: reinicio automático (systemd/Docker `restart: unless-stopped`), disco persistente, hora sincronizada (NTP), IP fija si el exchange permite lista blanca de IP.

## Operación

- **Despliegue sin duplicar operaciones:** (1) detener el bot, (2) esperar estado `sin órdenes abiertas` o conciliar, (3) desplegar, (4) arrancar en `PAPER` o con reconciliación obligatoria, (5) verificar heartbeat. Nunca dos instancias vivas con las mismas claves.
- **Logs:** a archivo rotado + alerta de errores a Telegram/email.
- **Monitoreo:** heartbeat externo (p. ej. healthcheck por ping ⚠️) que avisa si el bot deja de reportar.
- **Respaldos:** BD operacional y configuración, diario, fuera del VPS; probar restauración.
- **Actualizaciones:** del SO y del framework en ventanas controladas; fijar versiones.

## Próximos pasos

- [ ] Verificar precios en la página de DigitalOcean (fase 8)
- [ ] Probar restauración desde respaldo

## Fuentes

Estimaciones ⚠️ sin verificar hoy.

## Enlaces relacionados

[14](14-seguridad.md) · [16](16-presupuesto.md)
