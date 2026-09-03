# Entrega Sprint 4 (final) — VibeCheck · Equipo 9

## 🔗 Enlaces

- **Repositorio**: https://github.com/FPoncela/viberano-2026-team9
- **Presentación** (landing con el pitch, capturas reales y comparativa frente a Screen Time): https://fponcela.github.io/viberano-2026-team9/
- **Demo narrada** (vídeo con voz guiando el recorrido por el MVP): https://fponcela.github.io/viberano-2026-team9/demo-narrada.html
- **App en vivo** (el MVP real, navegable desde el móvil o el navegador): https://fponcela.github.io/viberano-2026-team9/app/

## 🎯 Qué se ha hecho en este sprint

Punto de partida: el MVP funcional del Sprint 3 (permiso → Mi mapa → detalle → comparativa, con datos simulados). Este sprint fue de pulido y entrega, no de nueva funcionalidad de producto:

- **Presentación propia** (`demo/index.html`, antes `presentacion.html`) publicada como landing principal del repositorio en GitHub Pages, con el pitch del producto, mosaico de capturas reales de la app y una comparativa directa frente a Screen Time y alternativas existentes.
- **Reordenación de las demos**: la presentación pasa a ser la portada (`/`); el vídeo narrado del Sprint 3 se conserva en `/demo-narrada.html`.
- **Marco de dispositivo real**: la app se ve siempre como un móvil (notch, barra de estado con hora/señal/wifi/batería reales, home indicator) se abra donde se abra y en cualquier tamaño de ventana, sin que el bisel se corte contra el borde.
- **Menú inferior fijo**: la barra de pestañas (Mapa / Comparativa) deja de ser un overlay que tapaba la última fila de contenido; ahora cada pantalla tiene su propio scroll y el menú queda siempre fuera de él.
- **Iconos de marca reales** por app (Instagram, TikTok, WhatsApp, YouTube, Spotify) y tooltips interactivos en las gráficas de franjas horarias.
- **Marca "VibeCheck" visible dentro de la app**, en la propia interfaz de cada pantalla, para identificar en todo momento que se está dentro de la aplicación (no en la barra de estado simulada del sistema).
- **Pantalla de permiso de acceso** revisada: los botones quedan arriba sin necesidad de hacer scroll dentro del marco del móvil, con más aire respecto al texto. Al declinar el permiso aparece la opción **"Salir de la app"**, que cierra la pestaña (si la abrió el icono de la presentación) o, si el navegador lo bloquea, lleva de vuelta a la última diapositiva de la presentación — cerrando el círculo de la demo.
- **Fondo gris claro en los gráficos de barras** (Mi mapa y detalle por app) para diferenciarlos del blanco de las tarjetas.
- **README.md reescrito por completo**, orientado a esta entrega: qué es el producto, qué hace hoy, los cuatro sprints y qué se hizo en cada uno, stack técnico y cómo correr el proyecto en local.

## ⭐ Estado del producto

Las 4 pantallas del MVP (permiso, Mi mapa, detalle por app, comparativa semanal) funcionan de principio a fin, con datos simulados, publicadas y navegables en vivo. Ver [`README.md`](README.md) para el detalle completo del producto y [`design/notas-sprint3-claude-code.md`](design/notas-sprint3-claude-code.md) para el registro de cómo se construyó con Claude Code en el Sprint 3.

## 🙏 Qué NO funciona todavía

Sin cambios respecto al Sprint 3: los datos son simulados (sin integración real con las APIs de uso de pantalla de iOS/Android), no hay backend ni cuentas, el permiso de acceso es una simulación, y no está publicado en tienda ni dominio propio.

## 📌 Pendiente

Grabar el vídeo con la demo final del producto.
