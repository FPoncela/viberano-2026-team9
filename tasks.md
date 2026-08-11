# tasks.md — VibeCheck (Sprint 3: "Se construye")

Desglose de `plan.md` en tareas pequeñas, cada una construible y probable en una sola sesión con IA. Orden secuencial salvo que se indique lo contrario.

## Bloque 1 · Base del proyecto

- [x] **T1.1 — Scaffold del proyecto**: crear proyecto React + Vite + Tailwind (o equivalente en Lovable), estructura de carpetas mínima (`components/`, `data/`, `screens/`). Probar que arranca y muestra una pantalla en blanco en el móvil (navegador, viewport móvil).
- [x] **T1.2 — Tokens de diseño**: trasladar a variables CSS / config de Tailwind los colores, tipografía y espaciados de `design/DESIGN.md` (paleta coral/lavanda, tipografía, radios, espaciado de 8px). Probar con una pantalla de ejemplo que usa los tokens.
- [x] **T1.3 — Componentes base**: botón primario y secundario (48px alto, radio 14px), tarjeta (radio 16px, sombra suave), bottom tab bar. Probar cada componente aislado (Storybook-like o pantalla de pruebas).

## Bloque 2 · Datos simulados

- [x] **T2.1 — Modelo de datos**: definir tipo/interfaz de "Sesión de uso" (app, tipo de contenido, franja horaria, duración) y "Mapa de patrones" (agregación), según entidades clave de `design/spec.md`.
- [x] **T2.2 — Fixtures de datos**: generar 3 datasets de ejemplo: (a) usuario con 7+ días de uso normal, (b) usuario con menos de 3 días de uso, (c) usuario sin permiso concedido. Probar que cada dataset se puede importar y usar en pantalla.

## Bloque 3 · Pantalla 1 — Permiso de acceso a datos

- [x] **T3.1 — Pantalla de permiso**: construir según `design/vibecheck-01-permiso-datos@3x.png`, con el microcopy de `DESIGN.md` ("Para mostrarte tu propio mapa..."). Botón que simula conceder el permiso.
- [x] **T3.2 — Estado sin permiso**: si el permiso no está concedido, cualquier intento de entrar a "Mi mapa" redirige aquí. Probar el escenario de aceptación 2 de la Historia 1 (spec.md).

## Bloque 4 · Pantalla 2 — Mi mapa (pantalla estrella) ⭐

- [x] **T4.1 — Lista de apps/tipo de contenido**: mostrar apps usadas y tiempo dedicado a cada una, agrupado, según `design/vibecheck-02-mi-mapa@3x.png`.
- [x] **T4.2 — Vista por franjas horarias**: gráfica de barras de los últimos 7 días, eje en horas reales (0h, 6h, 12h, 18h, 24h), sin rejilla densa, según estilo de `DESIGN.md`.
- [x] **T4.3 — Estado "menos de 3 días de uso"**: con el dataset (b), mostrar el aviso correspondiente en vez de un mapa vacío o parcial (escenario 3, Historia 1).
- [x] **T4.4 — Navegación a detalle**: cada app/tipo de contenido de la lista es tocable y lleva a la Pantalla 3.

## Bloque 5 · Pantalla 3 — Detalle de ítem

- [x] **T5.1 — Pantalla de detalle**: nombre de app/contenido, tiempo total, desglose por franja horaria (reutilizando el componente de barras), según `design/vibecheck-03-detalle-item.html`.
- [x] **T5.2 — Navegación de vuelta**: botón de retroceso a "Mi mapa" (no tab bar), estado se mantiene al volver.

## Bloque 6 · Pantalla 4 — Comparativa semanal (si da tiempo, P2)

- [ ] **T6.1 — Pantalla de comparativa**: esta semana vs. semana anterior por app/tipo de contenido, según `design/vibecheck-04-comparativa-semanal.html`.
- [ ] **T6.2 — Estado sin histórico suficiente**: con menos de 2 semanas de datos, mostrar aviso en vez de comparación (escenario 2, Historia 3).

## Bloque 7 · Prueba end-to-end y pulido

- [ ] **T7.1 — Flujo completo con el dedo**: en el móvil (navegador), recorrer permiso → Mi mapa → detalle → (comparativa si existe) sin fricciones.
- [ ] **T7.2 — Cotejo contra DESIGN.md**: revisar cada pantalla construida junto a su mockup/PNG del Sprint 2; corregir cualquier desviación de color, tipografía o tono de copy — no rediseñar desde cero.
- [ ] **T7.3 — Commit y push final**: todo el código en el repositorio de GitHub, listo para la entrega del 18 de agosto.

## Notas para la entrega

Al terminar, documentar (según `sprint_3.md`): qué funciona ya (empezando por la pantalla estrella), qué no funciona todavía, y tres líneas sobre qué se le pidió a la IA, dónde se atascó y cómo se desatascó.
