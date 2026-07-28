# Handover · Sprint 2 (Diseño) — VibeCheck

Contexto para retomar el trabajo de diseño de pantallas donde lo dejamos. Esto resume lo ya decidido, para que puedas seguir directamente con las pantallas 3 y 4 sin repetir el proceso desde cero.

## Punto de partida

- **Producto:** VibeCheck, app de bienestar digital para adolescentes (13-18 años). Propuesta de valor: "Descubre qué te engancha, no solo cuánto tiempo pierdes" — autoconocimiento, no control parental ni prohibición.
- **Spec de referencia:** `docs/spec-mapa-patrones-scroll.md` (feature "Mapa de patrones de scroll"). De ahí salen las 4 pantallas del sprint. El fichero que se encuentra en `design/spec.md` es el mismo.
- **Sprint:** Sprint 2 del reto — solo diseño con IA, nada de código. Entrega 4 de agosto.

## Las 4 pantallas del happy path (acordadas)

1. ✅ **Permiso de acceso a datos** (FR-004) — hecha - El fichero que se encuentra en `design/vibecheck-01-permiso-datos@3x.png`
2. ✅ **Mi mapa** ⭐ pantalla estrella (Historia 1 + 2) — hecha - El fichero que se encuentra en `design/vibecheck-02-mi-mapa@3x.png`
3. ⬜ **Detalle de un ítem** del mapa (una app/tipo de contenido concreto) — pendiente
4. ⬜ **Comparativa semanal** (Historia 3: esta semana vs. semana anterior) — pendiente

📌 Descartamos "Login" (no existe en la spec, no hay historias de cuentas de usuario) y "Recomendaciones de mejora" (choca con la propuesta de valor: la app no le dice al usuario qué hacer, sin check-ins ni retos sociales — esos son features separadas, fuera de alcance de esta spec).

## DESIGN.md — decisiones clave y por qué

El fichero `DESIGN.md` ya está en `design/` (o listo para subir). Cosas importantes que no son obvias solo leyéndolo, por si tu compañero quiere entender el "por qué":

- **Paleta cálida y clara** (fondo `#FAF8F5`, no blanco clínico). Probamos también variantes en negro (con acento coral y con acento azul) y blanco+azul — se descartaron todas, nos quedamos con la original cálida/clara.
- **Coral (`#E8967A`) es el color de acción principal** (botones, CTA). Ojo: en un momento la lavanda (`#6B5B95`) se coló como color de botón por error de asignación — quedó corregido. Si ves algún elemento con CTA en lavanda, es un desliz, corrígelo a coral.
- **Nunca rojo.** Ni para alertas, ni para "uso alto". El tono más "urgente" que existe en la paleta es el ámbar.
- **Gráficas:** en la Pantalla 2 iteramos de una curva orgánica tipo "blob" a un diagrama de barras — el usuario prefería un estilo más profesional/elegante. Se actualizó `DESIGN.md`: barras con esquinas superiores redondeadas, colores cálidos, sin rejilla densa, eje siempre en horas reales (0h, 6h, 12h...), nunca en palabras sueltas ("Mañana/Tarde/Noche").
- **Filtros:** no van como chips seleccionables permanentes en pantalla. Van como un botón "Filtros" (icono de embudo + badge con nº de filtros activos) que abriría una hoja/modal aparte.
- **Tono de copy:** segunda persona, sin palabras de alarma ("adicción", "peligro", "exceso"), preguntas antes que órdenes, nunca comparar con otros usuarios — solo contigo mismo en el tiempo.

## Cómo van las pantallas 1 y 2 (para replicar el estilo)

- Formato: mockup de móvil vertical, marco de teléfono (frame oscuro `#2B2730`), pantalla interior con esquinas redondeadas.
- Iconografía: outline, trazo 1.5-2px, nunca relleno sólido agresivo.
- Tarjetas blancas (`#FFFFFF`), radio 16px, sin bordes duros.
- Botón primario: altura 48px, radio 14px, coral, texto blanco.
- Los PNG entregados: `vibecheck-01-permiso-datos.png` y `vibecheck-02-mi-mapa.png`.

## Para tu compañero: cómo pedir las pantallas 3 y 4

Usa este mismo patrón de prompt que hemos seguido en las dos primeras (funciona bien porque fuerza a Claude a seguir el DESIGN.md estrictamente y a describir qué hace, qué se ve y quién la usa):

> "Diseña la pantalla [nombre] siguiendo estrictamente mi `DESIGN.md`: [1. Qué hace - ... 2. Qué se ve - ... 3. Quién la usa - ...]. App de móvil, en vertical, para usar con el dedo."

Para la **pantalla 3 (Detalle de un ítem)**, lo lógico es que muestre: nombre de la app/contenido, tiempo total, quizá su propio desglose por franja horaria (reutilizando el estilo de barras de la Pantalla 2), y navegación de vuelta a "Mi mapa" (botón atrás, no tab bar).

Para la **pantalla 4 (Comparativa semanal)**, la spec (Historia 3) pide: comparación de tiempo dedicado a cada app/tipo de contenido entre esta semana y la semana anterior, y un mensaje si aún no hay 2 semanas de histórico (evitar comparar con "lo normal" o con otros usuarios — el DESIGN.md es explícito en esto).

Cuando ambas estén validadas, quedan los pasos 6 y 7 del sprint: guardar todo en `diseño/` (o `design/`) junto al DESIGN.md y al spec.md, y entregar el 4 de agosto con: las 4 imágenes, una línea por pantalla de qué hace el usuario ahí, cuál es la pantalla estrella (Mi mapa), el DESIGN.md, y el enlace al repo.

## Ficheros a subir a `design/` en el repo

- `DESIGN.md`
- `vibecheck-01-permiso-datos.png`
- `vibecheck-02-mi-mapa.png`
- (pendiente) pantallas 3 y 4 cuando estén listas
