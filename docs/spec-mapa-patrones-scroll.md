# Especificación de Feature: Mapa de patrones de scroll

**Rama**: `001-mapa-patrones-scroll`  
**Creada**: 2026-07-15  
**Estado**: Listo (aclaraciones resueltas 2026-07-15)  
**Input**: Lean Canvas — App de bienestar digital para adolescentes ([docs/lean-canvas.md](https://github.com/FPoncela/viberano-2026-team9/blob/main/docs/lean-canvas.md)), Solución #1: "Mapa de patrones de scroll — analítica visual de qué apps/contenido enganchan, a qué hora del día, y cuánto tiempo real se dedica a cada tipo de contenido."

## Contexto del problema
Los adolescentes de 13 a 18 años no son conscientes de sus propios patrones de scroll: qué contenido les engancha, en qué momentos del día, y cómo se sienten después de esas sesiones (Problema 2 del Lean Canvas). Las alternativas actuales —límites de tiempo nativos del móvil, apps de bloqueo tipo Forest/One Sec, o control parental— no resuelven esto: se ignoran, se desinstalan a la semana o generan conflicto en casa, porque ninguna le da al adolescente un espejo de su propio comportamiento; todas deciden por él o se lo prohíben, en vez de ayudarle a entenderse. El Mapa de patrones de scroll ataca directamente ese vacío: convierte datos de uso que ya existen en el dispositivo en una vista que el propio adolescente puede interpretar, sin intervención externa, como primer paso hacia el autoconocimiento que promete la propuesta de valor ("descubre qué te engancha, no solo cuánto tiempo pierdes"). 

## Escenarios de usuario y pruebas *(obligatorio)*

### Historia de Usuario 1 - Ver mi mapa de patrones de scroll (Prioridad: P1)

Como adolescente que quiere entender mejor mi relación con el móvil, quiero ver un resumen visual de qué apps y tipo de contenido consumo más, para descubrir qué me engancha sin que nadie me lo diga o me lo prohíba.

**Por qué esta prioridad**: es el núcleo de la feature; sin esta vista no hay "mapa" que mostrar, y es lo mínimo que ya entrega el valor central ("descubre qué te engancha, no solo cuánto tiempo pierdes").

**Test independiente**: se puede probar generando datos de uso simulados de un día y comprobando que el mapa refleja apps, horas y tiempo dedicado correctamente, sin depender de check-ins emocionales ni de retos sociales.

**Escenarios de aceptación**:
1. **Dado** que tengo la app instalada y los permisos de datos de uso concedidos, **cuando** abro la sección "Mi mapa", **entonces** veo qué apps/contenido he usado más, agrupado por tipo, con el tiempo dedicado a cada uno.
2. **Dado** que no he concedido permiso de acceso a datos de uso, **cuando** abro "Mi mapa", **entonces** la app me explica por qué necesita el permiso y cómo concederlo, sin mostrar datos parciales o erróneos.
3. **Dado** que abro el mapa antes de acumular 3 días de uso registrado, **cuando** consulto "Mi mapa", **entonces** la app me indica que necesita al menos 3 días de uso antes de mostrar patrones fiables, en vez de mostrar un mapa vacío o engañoso.

### Historia de Usuario 2 - Ver en qué momentos del día caigo más (Prioridad: P1)

Como adolescente, quiero ver a qué horas del día uso más el móvil, para identificar mis momentos de mayor "enganche" (ej. antes de dormir, al despertar).

**Por qué esta prioridad**: el "cuándo" es tan central como el "qué" en la propuesta de valor ("en qué momentos del día"); sin él el mapa es solo una lista de apps, no un patrón temporal.

**Test independiente**: se puede probar con datos de uso distribuidos en distintas franjas horarias, comprobando que la vista temporal agrupa correctamente por franja.

**Escenarios de aceptación**:
1. **Dado** que tengo datos de uso de varios días, **cuando** consulto la vista por horas, **entonces** veo una distribución de mi uso a lo largo del día que refleja mis picos reales de actividad.
2. **Dado** que mi patrón de uso cambia de una semana a otra, **cuando** reviso la vista por horas (que siempre muestra los últimos 7 días, sin selector de rango), **entonces** veo reflejado el cambio en ese periodo fijo.

### Historia de Usuario 3 - Comparar mi uso por tipo de contenido a lo largo del tiempo (Prioridad: P2)

Como adolescente que ya vio su mapa inicial, quiero comparar cómo cambia mi consumo de un tipo de contenido semana a semana, para saber si estoy mejorando o empeorando en algo que me importa.

**Por qué esta prioridad**: aporta valor de seguimiento y motivación, pero depende de que exista ya el mapa base (Historia 1) y de acumular histórico suficiente.

**Test independiente**: se puede probar con al menos dos semanas de datos históricos simulados, verificando que la comparación muestra la diferencia correctamente.

**Escenarios de aceptación**:
1. **Dado** que tengo al menos dos semanas de datos, **cuando** abro la vista de evolución, **entonces** veo la comparación de tiempo dedicado a cada tipo de contenido entre esta semana y la anterior.
2. **Dado** que tengo menos de dos semanas de datos, **cuando** abro la vista de evolución, **entonces** la app me indica que aún no hay suficiente histórico para comparar.

### Casos límite

- ¿Qué pasa si el sistema operativo restringe o revoca el permiso de acceso a datos de uso mientras la app ya lo tenía concedido?
- ¿Cómo se maneja un día sin ningún uso de móvil registrado (0 minutos)?
- ¿Qué pasa si el adolescente borra o reinstala la app y pierde el histórico acumulado?
- ¿Cómo se clasifica el uso de una app nueva o no catalogada dentro del mapa (mientras no se le asigne una categoría de app conocida)?

## Requisitos *(obligatorio)*

### Requisitos funcionales

- **FR-001**: El sistema DEBE mostrar al adolescente qué apps ha usado y el tiempo total dedicado a cada una, en un periodo determinado.
- **FR-002**: El sistema DEBE clasificar el uso por "tipo de contenido" a nivel de app completa (p.ej. Instagram, TikTok, YouTube como unidades), sin desglosar formatos dentro de una misma app (Reels, Stories, DMs, etc.).
- **FR-003**: El sistema DEBE mostrar la distribución del uso a lo largo del día, agrupada por franjas horarias, siempre sobre los últimos 7 días (sin selector de rango).
- **FR-004**: El sistema DEBE solicitar y explicar al adolescente el permiso necesario para acceder a los datos de uso del dispositivo antes de mostrar cualquier dato del mapa.
- **FR-005**: El sistema DEBE informar al adolescente cuando tenga menos de 3 días de uso registrado, en vez de mostrar un mapa vacío o engañoso.
- **FR-006**: El sistema DEBE permitir comparar el tiempo dedicado a cada app/tipo de contenido entre la semana actual (últimos 7 días) y la semana inmediatamente anterior.
- **FR-007**: El sistema DEBE conservar el histórico de datos de uso del adolescente de forma indefinida mientras su cuenta exista, permitiendo comparativas a largo plazo.
- **FR-008**: El sistema NO DEBE mostrar ni compartir con terceros (padres, colegio) los datos individuales de este mapa, en línea con la propuesta de valor basada en la agencia propia del adolescente.

### Entidades clave

- **Sesión de uso**: registro de uso de una app/contenido por el adolescente, con app, tipo de contenido, franja horaria y duración.
- **Mapa de patrones**: agregación de sesiones de uso de un adolescente en un periodo dado, organizada por app/tipo de contenido y por franja horaria.
- **Tipo de contenido**: categoría a nivel de app (p.ej. "Instagram", "TikTok") a la que pertenece una sesión de uso, usada para agrupar y comparar el mapa.

## Criterios de éxito *(obligatorio)*

### Resultados medibles

- **SC-001**: Al menos el 70% de los adolescentes que instalan la app conceden el permiso de acceso a datos de uso y llegan a ver su mapa de patrones en el primer uso.
- **SC-002**: Al menos el 60% de los adolescentes que ven su mapa de patrones vuelven a abrirlo al menos una vez más en los siguientes 7 días (contribuye a la retención D7, métrica norte del Lean Canvas).
- **SC-003**: Al menos el 50% de los adolescentes activos abre la vista de comparación semanal (Historia 3) al menos una vez al mes (métrica principal, basada en eventos de producto, coherente con el enfoque del Lean Canvas).
- **SC-004**: En una encuesta breve e in-app opcional tras ver el mapa, al menos el 50% de los adolescentes que la responden declara haber descubierto un patrón de uso que no conocía (métrica complementaria y cualitativa, no obligatoria para el MVP).

## Suposiciones

- El dispositivo del adolescente (iOS/Android) permite obtener datos de uso por app mediante permisos estándar del sistema operativo, y el adolescente puede concederlos.
- El adolescente usa un único dispositivo principal; no se contempla en esta spec consolidar datos de varios dispositivos.
- Queda FUERA de alcance en esta feature: el check-in emocional post-scroll y los retos sociales con amigos (son soluciones independientes del mismo Lean Canvas, con sus propias specs).
- Los colegios/instituciones no tienen acceso a este mapa individual; cualquier vista agregada para colegios (capa B2B2C del canvas) es una feature distinta, fuera de este alcance.
- El adolescente es el único que ve y controla su propio mapa; no hay panel de control parental sobre estos datos.
