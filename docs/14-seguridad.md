# 14 — Seguridad y respuesta a fallos

**Objetivo:** proteger credenciales y capital, y definir qué hacer cuando algo falla.
**Actualizado:** 2026-11-04

## Resumen

Principio: **la peor consecuencia posible de una clave filtrada debe ser limitada**. Claves solo de lectura/trade, jamás con permiso de retiro; capital acotado; kill switch.

## Controles

| Control | Detalle |
|---|---|
| Credenciales fuera del código | Variables de entorno / archivo `.env` **ignorado por Git**; escaneo de secretos (pre-commit ⚠️) |
| Gestor de secretos | Opcional en VPS (ej. secretos del proveedor); suficiente `.env` con permisos 600 en el MVP |
| Permisos mínimos | Lectura para paper; trade-only para live; **retiros desactivados** |
| Restricción de IP | Activarla si el exchange la ofrece |
| Rotación | Cada ~90 días ⚠️ (criterio de diseño) y tras cualquier sospecha |
| Dashboard | Autenticación fuerte; HTTPS; no exponer el puerto del bot a Internet (acceso por VPN/SSH tunnel) |
| Separación de ambientes | Claves distintas para paper/live; BD distintas |
| Auditoría | Cada orden y cambio de config registrados |
| Cuenta del exchange | 2FA con app/llave, correo exclusivo, whitelist de retiros |
| Dependencias | Versiones fijadas; revisar avisos de seguridad; software de terceros = confianza |

## Procedimientos de respuesta

| Evento | Respuesta |
|---|---|
| Desconexión / caída del proveedor | No operar a ciegas: pausa, reintento con backoff, alerta; al volver, **reconciliar** antes de decidir |
| Reinicio | Cargar estado, consultar órdenes/saldos al exchange, resolver diferencias, recién después operar |
| Errores de autenticación | Detener y alertar; no reintentar en bucle (riesgo de bloqueo) |
| Órdenes pendientes/desconocidas | Consultar por `client_order_id`; si no se resuelve ⇒ modo seguro y revisión humana |
| Saldo local ≠ real | Detener nuevas órdenes; el exchange es la fuente de la verdad |
| Pérdida de acceso a API | Kill switch manual desde la web del exchange; revocar claves |
| Datos incorrectos (precio anómalo) | Rechazar la vela, no operar, alertar |
| Límite de pérdida alcanzado | Parada automática hasta revisión humana |

## Riesgos

Filtración de claves · compromiso del VPS · error propio de configuración (modo live accidental) · dependencias comprometidas · phishing al exchange.

## Próximos pasos

- [ ] Crear `.gitignore` y plantilla `.env.example` en la semana 1
- [ ] Definir guardia de `LIVE_TRADING` ([08](08-arquitectura.md#modos-de-operación)) antes de escribir código de ejecución

## Fuentes

Buenas prácticas generales ⚠️ (documentación de seguridad de cada exchange: verificar).

## Enlaces relacionados

[08](08-arquitectura.md) · [13](13-infraestructura.md)
