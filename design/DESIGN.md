# DESIGN.md — VibeCheck

App de bienestar digital para adolescentes (13-18 años) enfocada en autoconocimiento sobre el uso del móvil, sin juicio ni prohibición.

## Filosofía de diseño

VibeCheck **no compite por tu atención** — es lo contrario de las apps que analiza. Mientras Instagram o TikTok usan color, movimiento y urgencia para engancharte, VibeCheck usa calma, espacio y curiosidad para que te mires a ti mismo con honestidad. Si una pantalla se siente como "otra app tirando de ti", hemos fallado.

Tres reglas simples:
1. **Espejo, no sermón.** Mostramos datos, no dictamos conductas. Nunca decimos "deberías" o "está mal".
2. **Curiosidad antes que culpa.** El tono es de descubrimiento ("mira esto"), nunca de regaño.
3. **Calma antes que urgencia.** Sin badges rojos parpadeantes, sin contadores alarmantes, sin gamificación agresiva.

---

## Paleta de colores

Paleta calmada e introspectiva, deliberadamente alejada de los rojos/rosas saturados de las redes sociales.

| Token | Hex | Uso |
|---|---|---|
| `--color-bg` | `#FAF8F5` | Fondo principal (cálido, no blanco clínico) |
| `--color-surface` | `#FFFFFF` | Tarjetas, superficies elevadas |
| `--color-primary` | `#E8967A` | Coral cálido — CTA principal, botones, iconos activos |
| `--color-primary-soft` | `#FBE9E1` | Fondos suaves, estados activos sutiles |
| `--color-accent` | `#6B5B95` | Lavanda — acento secundario (iconos de privacidad, detalles) |
| `--color-accent-soft` | `#E8E3F5` | Fondos de acento suaves |
| `--color-text-primary` | `#2B2730` | Texto principal (nunca negro puro) |
| `--color-text-secondary` | `#7A7480` | Texto secundario, metadatos |
| `--color-border` | `#EAE5DF` | Bordes y separadores sutiles |
| `--color-success` | `#7A9E7E` | Confirmaciones (verde apagado, no neón) |
| `--color-caution` | `#D4A24C` | Avisos (ámbar suave — nunca rojo de alarma) |
| `--color-on-primary` | `#FFFFFF` | Texto sobre superficies coral (botones) |

📌 **El color de acción principal (botones, CTA) es siempre el coral cálido**, nunca la lavanda — la lavanda queda reservada para acentos secundarios como iconos de privacidad.
📌 **Nunca usar rojo saturado ni rosa/magenta neón.** Esos colores son el lenguaje visual de las apps que generan la adicción que combatimos.

---

## Tipografía

- **Fuente principal:** un sans-serif geométrico y legible tipo *General Sans*, *Inter* o *Manrope* (cualquiera de estas vale; usar la misma en toda la app).
- **Titulares (H1-H2):** Semibold, tamaño generoso, tracking normal — cercanos, no gritones.
- **Cuerpo de texto:** Regular, 16px mínimo en móvil, line-height 1.5 para lectura relajada.
- **Nunca todo mayúsculas** en textos largos (sensación de regaño). Mayúsculas solo en etiquetas cortas de categoría (ej. "TIKTOK").

| Estilo | Tamaño | Peso |
|---|---|---|
| H1 | 28px | Semibold |
| H2 | 22px | Semibold |
| H3 | 18px | Medium |
| Body | 16px | Regular |
| Caption | 13px | Regular |

---

## Botones

- **Radio de esquina:** 14px (ni cuadrado-corporativo ni pastilla-infantil — un término medio cercano).
- **Primario:** fondo `--color-primary`, texto blanco, sombra suave opcional (blur alto, opacidad baja).
- **Secundario:** borde `--color-border`, fondo transparente, texto `--color-text-primary`.
- **Altura mínima táctil:** 48px (uso con el dedo, muchas veces con una sola mano).
- Sin animaciones de rebote exagerado ni confetti — micro-interacciones sutiles (fade, escala mínima 0.98→1).

---

## Espaciados

Sistema de 8px como base.

| Token | Valor | Uso |
|---|---|---|
| `--space-xs` | 4px | Entre elementos muy relacionados |
| `--space-sm` | 8px | Padding interno pequeño |
| `--space-md` | 16px | Padding estándar de tarjetas |
| `--space-lg` | 24px | Separación entre secciones |
| `--space-xl` | 40px | Márgenes superiores de pantalla |

Margen lateral de pantalla: 20px. Mucho aire entre bloques — la app debe respirar, no apretar información.

---

## Esquinas y superficies

- **Tarjetas:** radio 16px, sin bordes duros, sombra muy suave (`0 2px 12px rgba(43,39,48,0.06)`).
- **Iconos:** trazo (outline), nunca relleno sólido agresivo — línea de 1.5-2px, esquinas redondeadas.
- **Gráficas del mapa de patrones:** barras verticales con esquinas superiores redondeadas, espaciado generoso entre ellas y colores cálidos (coral para el pico, tonos neutros/lavanda suave para el resto) — un estilo cuidado y profesional, pero sin ejes agresivos, sin rejillas densas ni aspecto de "informe de rendimiento" corporativo. El eje horizontal siempre en horas reales (ej. 0h, 6h, 12h, 18h, 24h), nunca en etiquetas sueltas tipo "Mañana/Tarde".

---

## Tono de los textos (copy)

- **Segunda persona, cercana:** "tú", nunca "usted" ni genérico.
- **Preguntas antes que órdenes:** "¿Sabías que sueles abrir TikTok justo antes de dormir?" en vez de "Deberías dejar de usar TikTok antes de dormir".
- **Nunca palabras de alarma:** evitar "adicción", "peligro", "exceso" en la interfaz (aunque el problema de fondo sea ese). Usar "patrón", "momento", "descubre".
- **Nunca comparar con otros usuarios** ni con "lo normal" — el punto de referencia es siempre uno mismo en el tiempo (esta semana vs. la anterior).
- Ejemplo de microcopy para pantalla de permiso: *"Para mostrarte tu propio mapa, necesitamos ver qué apps usas y cuánto tiempo. Solo tú lo ves — nunca se lo mandamos a nadie más."*

---

## Navegación (contexto móvil)

- Diseño vertical, pensado para una mano.
- Navegación inferior (bottom tab bar) para las secciones principales, con zona táctil de 48px+.
- Botón de retroceso siempre visible en pantallas de detalle.
- Evitar todo lo que imite "notificaciones sin leer" o badges rojos — usar puntos suaves en `--color-accent` si hace falta indicar novedad.
- **Filtros:** se activan mediante un botón de filtro (icono de embudo + texto "Filtros", con badge numérico si hay filtros activos), que abre una hoja/modal para elegir opciones — nunca como chips seleccionables permanentes en la pantalla principal.
