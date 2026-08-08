# 🗓️ Sprint 2: Del 21 de julio al 4 de agosto

**Rebeldes IÁgiles:** ya tenéis vuestro `spec.md` (el qué). Estas dos semanas toca ver por fin qué pinta va a tener vuestra app.

**El objetivo del sprint:** diseñar, con IA, las pantallas de vuestra app de móvil. Nada más. Este sprint no se construye nada.

> **La regla del reto:** Sprint 2 se dibuja · Sprint 3 se construye · Sprint 4 brilla.

---

## 📺 Material de referencia

Antes de poneros, echadle un ojo al último directo de Gema con Javier Garzás.
Ahí tenéis explicado el método y os va a ahorrar mucho tiempo. Si os atascáis en algo de este sprint, empezad por ahí.

---

## 📱 Dos cosas que mandan en este sprint

1. **Estáis diseñando una APP DE MÓVIL.**
   Las pantallas se diseñan en vertical, en tamaño móvil, pensando en que se usan con el dedo y muchas veces con una sola mano. Nada de pantallas de ordenador.

2. **Todo lo diseña la IA. Vosotros dirigís.**
   El reto es aprender a dirigir a la IA, no a manejar un programa de diseño. Vosotros describís lo que queréis, la IA lo dibuja, vosotros lo corregís.

---

## 🤖 ¿Con qué IA? Con la que ya uséis

Vale cualquier IA generalista: Claude (incluido Claude Design), ChatGPT, Gemini… la que tengáis a mano y os resulte cómoda. Aquí no hay herramienta obligatoria.

**Lo que NO vale este sprint:**

- ❌ Dibujarlo vosotros a mano (Figma, Canva, papel…). Si lo has dibujado tú, no cuenta.
- ❌ Herramientas que construyen la app (tipo Lovable). Ojo: Lovable no diseña, construye la app entera — y os coméis el Sprint 3 antes de tiempo. Aparcadla hasta agosto.

Lo único obligatorio es el resultado: **acabar con imágenes de vuestras pantallas de móvil, hechas por IA.**

---

## 💡 El truco que os va a salvar: el DESIGN.md

Si pedís las pantallas una a una sin más, os saldrán como si fueran 5 apps distintas. La solución tiene nombre y es un estándar de verdad: **DESIGN.md**, un fichero de texto con vuestras reglas de diseño (colores, tipografía, botones, espaciados, tono) que le pasáis a la IA cada vez que le pedís una pantalla.

Y lo mejor: no tenéis que inventároslo de cero.

### Opción A (recomendada) · Copiad uno que ya existe y adaptadlo

Entrad en 👉 https://github.com/VoltAgent/awesome-design-md

Hay 73 ficheros DESIGN.md ya hechos, de marcas conocidas: Linear, Notion, Claude, OpenAI, Figma, Vercel, Supabase, Apple, Spotify, Nike, Starbucks… (libres, licencia MIT).

Elegid el que más se parezca al rollo que queréis para vuestra app y copiad su contenido.

Pedidle a la IA:

> "Este es un DESIGN.md que me gusta como punto de partida. Adáptamelo a mi app de móvil sobre [vuestro tema], para [vuestro público], con mi nombre y mis colores. Dame mi propio DESIGN.md."

📌 **Adaptadlo, no lo copiéis tal cual.** Vuestra app tiene que tener identidad propia, no parecer un clon de Spotify.

### Opción B · Que la IA os lo cree de cero

> "Créame un DESIGN.md para mi app de móvil sobre [tema], dirigida a [público]. Incluye paleta de colores, tipografía, estilo de botones, esquinas, espaciados y tono de los textos."

Y a partir de ahí, en CADA pantalla:

> "Diseña esta pantalla siguiendo estrictamente mi DESIGN.md: [qué hace, qué se ve, quién la usa]. App de móvil, en vertical, para usar con el dedo."

📌 **Guardad vuestro DESIGN.md en el repositorio.** En el Sprint 3 lo reutilizaréis para construir con el mismo estilo. Este fichero os acompaña hasta el final del reto.

*(¿Curiosidad por el estándar? La especificación es de Google Labs Code: https://github.com/google-labs-code/design.md — está en alpha y no necesitáis nada técnico de ahí, solo el concepto.)*

---

## 🛠️ Paso a paso

**Paso 1 · Sacad la lista de pantallas que necesita vuestra app**
Con vuestro spec.md delante, preguntadle a la IA:

> "Según este spec.md, ¿qué pantallas necesita esta app de móvil para hacer lo que promete? Dame la lista mínima, sin florituras."

📌 Queremos las pantallas funcionales: las que hacen el trabajo de verdad, no las de relleno.

**Paso 2 · Quedaos con 3 o 4 pantallas como mucho**
No hay que diseñar la app entera. Elegid las imprescindibles y marcad cuál es vuestra pantalla estrella: la que enseña de un vistazo para qué sirve la app.

**Paso 3 · Conseguid vuestro DESIGN.md**
Con la Opción A o la B de aquí arriba. Aquí decidís nombre y colores… y ya no se tocan el resto del reto.

**Paso 4 · Que la IA diseñe cada pantalla**
Siempre pasándole vuestro DESIGN.md, para que todas salgan de la misma familia.

**Paso 5 · Dadle 2 o 3 vueltas**
Miradlas con ojo de usuario, en el móvil: ¿se entiende qué hago aquí? ¿lo importante se ve nada más entrar? ¿los botones se tocan bien con el dedo? Pedidle cambios a la IA hasta que os guste.
📌 Aquí está el aprendizaje del sprint: iterar con la IA hasta que quede bien.

**Paso 6 · Guardadlo todo en vuestro repositorio**
Una carpeta `diseño/` con las imágenes, más vuestro DESIGN.md, junto al spec.md.

**Paso 7 · Entregad el 4 de agosto** (comentario en el hilo del reto)

- 🖼️ Las imágenes de vuestras pantallas de móvil
- 📝 Una línea por pantalla: qué hace el usuario ahí
- ⭐ Cuál es vuestra pantalla estrella
- 📄 Vuestro DESIGN.md
- 🔗 Enlace al repositorio

---

## 🚫 Lo que NO se hace en este sprint

- ❌ Nada de plan.md ni tasks.md → eso es el Sprint 3
- ❌ No se publica nada, no hay enlace
- ❌ No se diseña a mano — lo hace la IA
- ❌ No hace falta que nada funcione

Solo "dibujar", dirigiendo a la IA. Si os ponéis a construir, os quedáis sin gasolina para el Sprint 3.

---

## 🥇 Reglas de oro

1. Ni una línea de código. Este sprint ni falta que hace.
2. Todo con IA. Si lo has dibujado tú a mano, no cuenta.
3. Móvil, en vertical y pensado para el dedo.
4. Nombre y colores se deciden ahora y no se tocan.
5. Pocas pantallas y claras > muchas y confusas.
6. Todo en abierto, en vuestro repositorio de GitHub.

---

## 🚦 Mirad vuestro caso

- ⚠️ **Escuadrón 7** — antes del 24 de julio: vuestra spec está en un PDF suelto y así no sirve para el método. Pasadla a spec.md en repositorio público y a diseñar. El tema (trading) 👌.
- ✅ **Escuadrones 4, 5 y 11:** ya tenéis plan.md y tasks.md (¡muy bien!), pero este sprint se evalúa por el diseño. Guardad esos documentos para el Sprint 3 y centraos ahora en las pantallas.

---

## ❓ Dudas típicas

**"¿Y si mi app necesita muchas pantallas?"**
→ Da igual: este sprint solo 3 o 4, las imprescindibles.

**"No tengo Claude Design, ¿puedo con ChatGPT?"**
→ Sí. Cualquier IA vale.

**"¿Y si no me gusta cómo queda?"**
→ Pues se lo dices a la IA y lo repite. Esa es justo la habilidad que estamos entrenando.

---

**A diseñar. Que la IAgilidad os acompañe. 🚀**
