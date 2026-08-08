# Handover · Sprint 3 (Construcción) — VibeCheck

Contexto para retomar la construcción de la app donde la dejamos. Esto resume lo ya decidido y hecho, para que puedas seguir directamente sin repetir el proceso desde cero.

## Punto de partida

- **Producto:** VibeCheck, app de bienestar digital para adolescentes (13-18 años). Propuesta de valor: "Descubre qué te engancha, no solo cuánto tiempo pierdes" — autoconocimiento, no control parental ni prohibición.
- **Sprint:** Sprint 3 del reto — "Se construye". Del 4 al 18 de agosto. Se construye con IA, sin escribir código a mano. Detalle completo del sprint en `sprint_3.md`.
- **Base de la que partimos:** `design/spec.md` (el qué) + `design/DESIGN.md` (el cómo se ve) + las 4 pantallas ya diseñadas en el Sprint 2.

## Qué está hecho hasta ahora

1. ✅ **`plan.md`** — cómo vamos a construir el MVP: alcance (Historias 1 y 2 de la spec, P1), tecnología (React + Vite + Tailwind, vía Lovable), orden de construcción en 7 pasos, y criterio de "hecho" del sprint.
2. ✅ **`tasks.md`** — el plan troceado en 20 tareas pequeñas, agrupadas en 7 bloques (base del proyecto, datos simulados, las 4 pantallas, prueba end-to-end). Cada tarea está pensada para construirse y probarse en una sola sesión.
3. ⬜ **Construcción en Lovable** — arrancando. Herramienta elegida: **Lovable**, conectado directamente al repo de GitHub para que los commits se sincronicen solos.

## Decisiones clave y por qué

- **Alcance del MVP:** solo las Historias 1 y 2 de `spec.md` (P1) — permiso de datos, Mi mapa, vista por franjas horarias, aviso de menos de 3 días de uso, y detalle de un ítem. La comparativa semanal (Historia 3, P2) queda como "si da tiempo", no es prioridad.
- **Nada de datos reales:** se simulan sesiones de uso en un JSON/TS local. No se integra la API de datos de uso real de iOS/Android — eso queda fuera de este sprint.
- **Nada de backend ni login:** estado local de React, sin cuentas de usuario ni sincronización entre dispositivos.
- **El `DESIGN.md` manda:** si lo que construye Lovable se desvía del estilo de las pantallas del Sprint 2 (PNGs y HTML en `design/`), se corrige contra `DESIGN.md`, no se rediseña desde cero.
- **Nada de despliegue todavía:** ni tienda ni dominio — eso es Sprint 4.

## Orden de construcción (de `plan.md` / `tasks.md`)

1. Base del proyecto + tokens de diseño (colores, tipografía, espaciados) + componentes base (botón, tarjeta, tab bar).
2. Datos simulados (3 datasets: uso normal 7+ días, menos de 3 días, sin permiso).
3. Pantalla 1 — Permiso de acceso a datos.
4. Pantalla 2 — **Mi mapa** ⭐ (pantalla estrella): lista de apps + vista por franjas horarias + estado de "menos de 3 días".
5. Pantalla 3 — Detalle de un ítem.
6. Pantalla 4 — Comparativa semanal (si da tiempo).
7. Prueba end-to-end en el móvil + cotejo contra `DESIGN.md` + commit/push final.

## Ficheros de referencia para construir

- `design/spec.md` — qué construir (historias de usuario, requisitos funcionales, criterios de aceptación).
- `design/DESIGN.md` — cómo se ve (paleta, tipografía, espaciados, botones, tono de copy).
- `design/vibecheck-01-permiso-datos@3x.png`, `design/vibecheck-02-mi-mapa@3x.png`, `design/vibecheck-03-detalle-item.html`, `design/vibecheck-04-comparativa-semanal.html` — las 4 pantallas ya diseñadas, referencia visual directa para cada pantalla que se construya.
- `plan.md` y `tasks.md` — el plan y las tareas, en la raíz del repo.

## Cómo pedirle a Lovable que construya

Igual que en el Sprint 2 forzamos a la IA a seguir `DESIGN.md` estrictamente al diseñar, en construcción se le pasa: `spec.md` + `DESIGN.md` + la tarea concreta de `tasks.md` que toque, una a una — nunca "hazme la app entera". Si Lovable se atasca en una tarea, trocearla más suele resolverlo.

El primer prompt usado (base del proyecto + sistema de diseño, tareas T1.1 y T1.2 de `tasks.md`) está documentado en la conversación de construcción; si no lo tienes, pide que te lo compartan o reconstrúyelo a partir de los tokens de `DESIGN.md`.

## Siguiente paso para quien retome esto

Seguir `tasks.md` en orden a partir del Bloque 1 (o desde donde se haya quedado marcado con [x]), probando cada tarea en el móvil antes de pasar a la siguiente. Marcar las tareas completadas en `tasks.md` según se vayan cerrando, para que el resto del equipo vea el avance de un vistazo.
