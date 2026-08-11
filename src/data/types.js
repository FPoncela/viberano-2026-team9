/**
 * Sesión de uso: registro de uso de una app/contenido por el adolescente.
 * Ver entidades clave en design/spec.md.
 *
 * @typedef {Object} SesionDeUso
 * @property {string} id
 * @property {string} app - app/tipo de contenido, a nivel de app completa (ej. "TikTok")
 * @property {string} fecha - fecha ISO de la sesión (YYYY-MM-DD)
 * @property {number} hora - hora de inicio de la sesión (0-23)
 * @property {number} duracionMin - duración de la sesión en minutos
 */

/**
 * Agregado de uso de una app dentro de un Mapa de patrones.
 *
 * @typedef {Object} UsoPorApp
 * @property {string} app
 * @property {number} minutosTotales
 * @property {number} numSesiones
 */

/**
 * Agregado de uso en una franja horaria dentro de un Mapa de patrones.
 *
 * @typedef {Object} UsoPorHora
 * @property {number} hora - 0-23
 * @property {number} minutosTotales
 */

/**
 * Mapa de patrones: agregación de sesiones de uso de un adolescente en un
 * periodo dado, organizada por app y por franja horaria (FR-001, FR-002, FR-003).
 *
 * @typedef {Object} MapaDePatrones
 * @property {UsoPorApp[]} porApp - agregado por app, ordenado desc por minutosTotales
 * @property {UsoPorHora[]} porHora - agregado por franja horaria, 24 posiciones (0-23)
 * @property {number} diasConDatos - número de días distintos con al menos una sesión
 * @property {number} minutosTotales - suma de duración de todas las sesiones del periodo
 */

export {}
