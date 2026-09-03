# VibeCheck

**Descubre qué te engancha, no solo cuánto tiempo pierdes.**

VibeCheck es una app de bienestar digital para adolescentes de 13 a 18 años. En vez de bloquear el móvil o poner límites impuestos desde fuera —lo que ya existe hoy (Screen Time, apps de bloqueo, control parental) y que se ignora, se desinstala o genera guerra en casa—, VibeCheck le da al propio adolescente un espejo de su comportamiento: un mapa de qué apps usa más, en qué momentos del día cae más, y cómo cambia su uso semana a semana. Sin juicio, sin sermón, sin compartirlo con nadie más.

👉 **[Ver la presentación](https://fponcela.github.io/viberano-2026-team9/)** — landing con capturas reales de la app y el pitch completo del producto.
👉 **[Ver la demo narrada](https://fponcela.github.io/viberano-2026-team9/demo-narrada.html)** — vídeo con voz guiando todo el recorrido por el MVP.
👉 **[Probar la app en vivo](https://fponcela.github.io/viberano-2026-team9/app/)** — el MVP real, funcionando en el navegador con datos simulados.

---

## El producto

### El problema

Los adolescentes no son conscientes de sus propios patrones de scroll: qué contenido les engancha, en qué momentos del día, ni cuánto tiempo real le dedican a cada cosa. Lo que existe hoy para esto es punitivo (control parental) o solitario (apps de bloqueo) — nada les ayuda a entenderse a sí mismos, todo decide por ellos.

### La solución (este MVP)

Un **mapa de patrones de scroll**: analítica visual y personal de qué apps enganchan, a qué hora del día y cuánto tiempo real se dedica a cada una. Es la primera de las tres soluciones del [Lean Canvas](docs/lean-canvas.md) original (las otras dos —check-in emocional post-scroll y retos sociales con amigos— quedan fuera de este MVP, ver [`design/spec.md`](design/spec.md)).

### Qué hace la app hoy

- **Permiso de acceso a datos** (simulado) — la app explica por qué necesita ver el historial de uso antes de mostrar nada; si se declina, lo recuerda sin insistir.
- **Mi mapa** ⭐ (pantalla estrella) — qué apps se han usado y cuánto tiempo, agrupadas y filtrables por categoría, más una gráfica de en qué franjas horarias del día cae más el uso, con el pico marcado.
- **Detalle por app** — al tocar una app desde el mapa: tiempo total de la semana, número de sesiones, sesión más larga, primera apertura del día y su propio desglose por hora.
- **Comparativa semanal** — esta semana vs. la anterior, app por app, con indicador de si el uso sube o baja.
- **Avisos honestos de histórico insuficiente** — si hay menos de 3 días de datos para el mapa, o menos de 2 semanas para la comparativa, la app lo dice en vez de mostrar una gráfica vacía o un número inflado.

Los datos son simulados (fixtures locales); no hay integración real con las APIs de uso de pantalla del sistema operativo, ni backend, ni cuentas — todo vive en estado local de React durante la sesión.

### Principios de diseño

VibeCheck **no compite por tu atención** — es lo contrario de las apps que analiza. Tres reglas de [`design/DESIGN.md`](design/DESIGN.md) gobiernan cada pantalla:

1. **Espejo, no sermón.** Se muestran datos, nunca se dictan conductas ("deberías", "está mal").
2. **Curiosidad antes que culpa.** Tono de descubrimiento, nunca de regaño.
3. **Calma antes que urgencia.** Sin badges rojos parpadeantes, sin contadores de alarma, sin gamificación agresiva — paleta cálida de coral y lavanda, deliberadamente alejada del rojo/rosa saturado de las redes sociales que combate.

---

## Cómo se ha construido: los cuatro sprints

Este repositorio es el resultado de un reto de 233 Academy (Viberano 2026): construir una app real en un verano, **sin escribir una sola línea de código a mano**, dirigiendo únicamente a la IA. Cada sprint tenía una regla y un entregable propio.

### Sprint 1 — Se piensa (spec)

Punto de partida: un [Lean Canvas](docs/lean-canvas.md) del problema, el segmento de cliente y la propuesta de valor, seguido de una especificación formal en [`design/spec.md`](design/spec.md) (historias de usuario, criterios de aceptación en Gherkin, requisitos funcionales) centrada en la primera de las tres soluciones del canvas: el mapa de patrones de scroll.

### Sprint 2 — Se dibuja (diseño)

Solo diseño, ninguna línea de código. Se definió [`design/DESIGN.md`](design/DESIGN.md) (paleta, tipografía, botones, espaciados, tono) como fuente de verdad de estilo, y sobre él se diseñaron con IA las 4 pantallas del MVP — marcando **Mi mapa** como pantalla estrella. Entrega: [`entrega-sprint2.md`](entrega-sprint2.md).

### Sprint 3 — Se construye (MVP)

De `spec.md` + `DESIGN.md` se derivaron [`plan.md`](plan.md) y [`tasks.md`](tasks.md), y se construyó el MVP completo tarea a tarea con **Claude Code**, un commit por bloque. Las 4 pantallas quedaron funcionando de principio a fin: permiso → Mi mapa → detalle → comparativa, con React + Vite + Tailwind y datos simulados.

Iterando con la IA se resolvieron detalles concretos frente a los mockups del Sprint 2 (barra de estado con la hora real, el botón "Ahora no" que no hacía nada, el filtro por categoría que pasó de decorativo a funcional, iconos de la tab bar ajustados al mockup exacto...) — el registro completo está en [`design/notas-sprint3-claude-code.md`](design/notas-sprint3-claude-code.md). El bloqueo más gordo del sprint fue no tener Node.js instalado ni forma de abrir la app desde el móvil por el firewall de la red; se resolvió instalando Node.js y usando un túnel de Cloudflare para exponer el servidor local sin depender del WiFi. Entrega: [`entrega-sprint3.md`](entrega-sprint3.md).

### Sprint 4 — Se entrega (esta entrega)

Pulido final del MVP construido en el Sprint 3 y su presentación al mundo:

- **Landing/presentación** ([`demo/index.html`](demo/index.html)) con el pitch del producto, capturas reales de la app y comparativa frente a Screen Time y alternativas existentes.
- **Demo narrada** ([`demo/demo-narrada.html`](demo/demo-narrada.html)) con recorrido guiado en vídeo por todo el flujo del MVP.
- **App publicada** en GitHub Pages, navegable de verdad desde el móvil o el navegador, simulando siempre el marco de un dispositivo real.
- Ajustes de pulido de interfaz sobre el MVP del Sprint 3: iconos de marca reales por app, tooltips en las gráficas, marco de móvil consistente en cualquier tamaño de pantalla, y una marca "VibeCheck" visible dentro de la propia interfaz para identificar en todo momento que se está dentro de la app.

Lo que queda fuera de esta entrega — y es la frontera natural de un "Sprint 5" si este proyecto continuara: integración real con las APIs de uso de pantalla de iOS/Android, backend con persistencia y cuentas, permisos reales del sistema operativo, y publicación en tienda o dominio propio.

---

## Stack técnico

- **React 19 + Vite** — SPA, sin backend.
- **Tailwind CSS 4** — tokens de diseño (`src/index.css`) trasladados 1:1 desde `design/DESIGN.md`.
- **Estado local de React** — sin librería de estado global; datos simulados en `src/data/fixtures.js`.
- **GitHub Pages + GitHub Actions** ([`.github/workflows/pages.yml`](.github/workflows/pages.yml)) — cada push a `main` construye la app y publica landing + demo + app en un único sitio.

```
src/
  screens/      # PermisoDatos, MiMapa, DetalleItem, Comparativa
  components/   # Card, Button, TabBar, BarraHoraria, AppRow...
  data/         # fixtures simuladas, modelo de sesión de uso, agregación del mapa
demo/
  index.html          # presentación / landing
  demo-narrada.html   # demo en vídeo narrado
design/
  DESIGN.md     # sistema de diseño (fuente de verdad de estilo)
  spec.md       # especificación funcional (historias, FRs, criterios de éxito)
docs/
  lean-canvas.md      # modelo de negocio de partida
```

## Desarrollo local

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run lint     # oxlint
```

## Equipo

Equipo 9 — Viberano 2026 (233 Academy): **Juan Miguel Tomàs Roselló** y **Fernando Poncela Moreno**.
