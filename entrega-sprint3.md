# Entrega Sprint 3 — VibeCheck · Equipo 9

## 🔗 Repositorio

https://github.com/FPoncela/viberano-2026-team9 — `plan.md`, `tasks.md` y la app (React + Vite + Tailwind) en la raíz del repo.

## 🎬 Demo

👉 **https://fponcela.github.io/viberano-2026-team9/** — landing con el vídeo narrado del recorrido completo por el MVP (permiso de acceso, Mi mapa, detalle por app, comparativa semanal y filtro por categoría), viendo la app en vivo desde el navegador. Fuente en [`demo/index.html`](demo/index.html); el vídeo también está disponible suelto en [`demo/vibecheck-demo-narrado.mp4`](demo/vibecheck-demo-narrado.mp4).

## ⭐ Qué funciona ya

- **Mi mapa** (pantalla estrella): gráfica de franjas horarias de los últimos 7 días con el pico marcado, lista de apps usadas con tiempo agrupado, y filtro por categoría funcional.
- Pantalla de permiso de acceso a datos (simulado), con aviso si se declina y guard que redirige aquí si no se ha concedido.
- Detalle por app: tiempo total de la semana, sesiones, sesión más larga, primera apertura y desglose por franja horaria.
- Comparativa semanal (P2): esta semana vs. la anterior por app, con indicador de tendencia.
- Avisos de "sin suficiente histórico" (menos de 3 días para el mapa, menos de 2 semanas para la comparativa) en vez de mostrar algo vacío o engañoso.

## 🙏 Qué NO funciona todavía

- Los datos son simulados: no hay integración real con las APIs de uso de pantalla de iOS/Android.
- Sin backend ni cuentas: todo vive en estado local de React, no persiste entre sesiones ni dispositivos.
- El permiso de acceso es una simulación (un botón), no pide permisos reales del sistema.
- No está publicado en tienda ni dominio propio (eso es Sprint 4).

## 📝 Tres líneas

Le pedimos a Claude Code que construyera el MVP completo siguiendo `plan.md`/`tasks.md`, tarea a tarea con commits locales. Se atascó al no tener Node.js instalado y al no poder probar en el móvil por el firewall de Windows; lo desatascamos autorizando la instalación de Node.js y usando un túnel de Cloudflare para exponer el servidor local sin depender de la red WiFi.
