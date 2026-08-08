# plan.md — VibeCheck (Sprint 3: "Se construye")

Plan de construcción del MVP móvil a partir de `design/spec.md` (qué construir) y `design/DESIGN.md` (cómo se ve). Objetivo del sprint: la pantalla estrella (Mi mapa) funcionando de verdad, con datos simulados, navegable con el dedo.

## 1. Alcance del MVP (qué entra y qué no)

Dentro (Historias 1 y 2 de `spec.md`, prioridad P1):

- Pantalla de permiso de acceso a datos de uso (FR-004).
- Pantalla "Mi mapa": apps/tipo de contenido usados y tiempo dedicado a cada uno (FR-001, FR-002).
- Vista por franjas horarias de los últimos 7 días (FR-003).
- Aviso cuando hay menos de 3 días de uso registrado (FR-005).
- Pantalla de detalle de un ítem del mapa.

Fuera del MVP de este sprint (aunque estén diseñadas o en la spec):

- Comparativa semanal real con datos históricos (Historia 3, P2) — se deja como pantalla navegable con datos de ejemplo si da tiempo, no como prioridad.
- Acceso real a datos de uso del sistema operativo (permisos nativos iOS/Android): se simulan datos, no se integra la API real del SO.
- Cualquier tipo de cuenta, login o sincronización entre dispositivos.
- Recomendaciones, check-ins emocionales o retos sociales (fuera de spec).

## 2. Tecnología

Prioridad: sencillez y velocidad para construir con IA sin tocar código a mano, y que se vea bien en el móvil.

- **Stack**: web app en React (Vite) + Tailwind CSS, responsive centrada en viewport móvil. Alternativa igualmente válida si la herramienta elegida lo simplifica más: Lovable con el mismo stack por debajo.
- **Datos**: mock de datos de uso en un JSON/TS local (sesiones de uso con app, tipo de contenido, franja horaria, duración) — nada de backend ni base de datos real para el MVP.
- **Estado**: estado local de React (sin librería de estado global; no hace falta para 4-5 pantallas).
- **Estilo**: tokens de color, tipografía y espaciado de `design/DESIGN.md` trasladados a variables CSS / config de Tailwind, para que la IA no reinvente la paleta en cada pantalla.
- **Despliegue**: ninguno todavía (el Sprint 3 no publica en tienda ni dominio, ver `sprint_3.md`). Correr en local / preview del propio Lovable o similar, probado en el móvil vía navegador.

## 3. Orden de construcción

1. **Base del proyecto y sistema de diseño**: scaffold del proyecto, variables de color/tipografía/espaciado de `DESIGN.md`, componentes base reutilizables (botón primario/secundario, tarjeta, bottom tab bar).
2. **Datos simulados**: generador/fixture de sesiones de uso de varios días (para poder probar los 3 escenarios de aceptación de la Historia 1: con permiso, sin permiso, con menos de 3 días de datos).
3. **Pantalla 1 — Permiso de acceso a datos**: explicación + botón de conceder permiso (simulado), según `vibecheck-01-permiso-datos@3x.png`.
4. **Pantalla 2 — Mi mapa** (pantalla estrella): lista de apps/tipo de contenido con tiempo dedicado + vista por franjas horarias (barras), según `vibecheck-02-mi-mapa@3x.png`. Incluye el estado de "menos de 3 días de uso".
5. **Pantalla 3 — Detalle de ítem**: al tocar una app/tipo de contenido desde "Mi mapa", ver su desglose por franja horaria y navegación de vuelta, según `vibecheck-03-detalle-item.html`.
6. **Pantalla 4 — Comparativa semanal** (si el tiempo lo permite tras validar el resto): esta semana vs. anterior, con aviso si no hay 2 semanas de histórico, según `vibecheck-04-comparativa-semanal.html`.
7. **Pulido y prueba end-to-end**: recorrer el flujo completo con el dedo en el móvil (permiso → mi mapa → detalle), corregir cualquier desviación respecto a `DESIGN.md`.

## 4. Criterio de "hecho" del sprint

- El flujo permiso → Mi mapa → detalle de ítem funciona de principio a fin en el móvil.
- La app se parece a las pantallas del Sprint 2 (si no, corregir contra `DESIGN.md`, no rediseñar).
- Todo el código en el repositorio de GitHub, sin líneas escritas a mano.

## 5. Siguiente paso

Trocear este plan en tareas pequeñas en `tasks.md` (Paso 2 del Sprint 3), cada una construible y probable en una sola sesión.
