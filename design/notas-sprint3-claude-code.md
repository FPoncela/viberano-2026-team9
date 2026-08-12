# Notas · Construcción del Sprint 3 con Claude Code

Resumen de cómo se construyó la parte de Juan Miguel del Sprint 3, complementario al
[`handover-sprint3.md`](handover-sprint3.md) que dejó preparado el resto del equipo. Sirve también
como la documentación que pide `sprint_3.md` para la entrega: qué se le pidió a la IA, dónde se
atascó y cómo se desatascó.

## 1. Cambio de herramienta

En vez de continuar la construcción en Lovable, se decidió dirigir la implementación con
**Claude Code**, tarea a tarea desde `tasks.md`.

## 2. Antes de empezar

Se le pidió a la IA que confirmara que tenía toda la información necesaria (`spec.md`,
`DESIGN.md`, `plan.md`, `tasks.md`) y que valorara si esos documentos estaban bien hechos.
Confirmó que sí, y que no hacía falta instalar el GitHub Spec Kit porque el equipo ya tenía el
equivalente hecho a mano (spec → plan → tasks).

## 3. Modo de trabajo

Se marcó explícitamente: construir `tasks.md` tarea a tarea, en orden, con un commit local por
tarea, probando cada pantalla en el navegador (viewport móvil) antes de darla por buena, sin
necesidad de intervención hasta el final salvo que surgiera una decisión de producto ambigua no
cubierta por `spec.md` o `DESIGN.md`.

## 4. Bloqueo técnico: Node.js

El equipo no tenía Node.js instalado (necesario para React + Vite). La IA detectó el bloqueo,
pidió permiso antes de instalar software nuevo en el equipo, y se autorizó.

## 5. Construcción de los 7 bloques (T1.1 → T7.3)

Un commit local por bloque:

- **Bloque 1** — scaffold del proyecto (React + Vite + Tailwind) y tokens de `DESIGN.md`.
- **Bloque 2** — modelo de datos y 3 datasets simulados (uso normal, pocos días, sin permiso).
- **Bloque 3** — pantalla de permiso, con el guard que redirige si no hay permiso concedido.
- **Bloque 4** — ⭐ **Mi mapa**: franjas horarias, lista de apps, aviso de "menos de 3 días",
  navegación a detalle.
- **Bloque 5** — pantalla de detalle por app.
- **Bloque 6** — comparativa semanal (P2, se hizo porque había margen de tiempo).
- **Bloque 7** — build de producción y lint sin errores, cotejo contra `DESIGN.md` y los mockups.

## 6. Cómo se probó en el móvil

Al intentar probarlo desde el móvil por la misma red WiFi, el firewall de Windows lo bloqueaba y
no había permisos para cambiarlo. Se preguntó a la IA por alternativas gratuitas y se optó por
**Cloudflare Tunnel**: expone el servidor de desarrollo local con una URL pública temporal
(`*.trycloudflare.com`), sin necesidad de tocar el firewall ni estar en la misma red. Se cerró el
túnel y el servidor al terminar las pruebas.

## 7. Revisión pantalla por pantalla

Siguiendo el propio método del reto (simular las pantallas una a una), se fue dando feedback
concreto que la IA corrigió:

| Feedback | Corrección |
|---|---|
| Permiso: no se mostraba la hora como en el mockup | Añadida una barra de estado con la hora real del dispositivo, visible en todas las pantallas |
| Permiso: el botón "Ahora no" no hacía nada | Ahora muestra un aviso in-app explicando que sin el permiso no se puede dibujar el mapa |
| Permiso: el botón "Ahora no" quedaba pegado al borde inferior | Más espaciado inferior (`pb-xl` en vez de `pb-lg`) |
| Mi mapa: el botón "Filtros" no hacía nada | Se decidió implementarlo de verdad: abre una hoja para filtrar la lista de apps por categoría |
| Tab bar: iconos de Mapa/Comparativa no coincidían con el diseño | Sustituidos por los iconos outline exactos del mockup del Sprint 2 |
| Permiso: al arreglar los iconos de la tab bar, el icono de esta pantalla desentonaba | Unificado con el mismo icono que ya usa la pestaña Mapa |
| Duda: ¿tamaños de letra coherentes con el diseño? | Se verificó que el código sigue exactamente los tamaños de `DESIGN.md` (28px/22px/18px/16px/13px); la diferencia con el PNG del mockup viene de que ese PNG lo generó otra IA de imágenes y no coincide pixel a pixel con el documento de texto. Se decidió mantener `DESIGN.md` como fuente de verdad, según la regla ya fijada en `handover-sprint3.md` |

## 8. Estado al cierre de esta sesión

Todo el trabajo anterior está commiteado en local. Queda pendiente el `git push` al repositorio
remoto, a la espera de confirmación explícita antes de subirlo.
