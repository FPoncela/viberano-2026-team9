/** @typedef {import('./types.js').SesionDeUso} SesionDeUso */
/** @typedef {import('./types.js').MapaDePatrones} MapaDePatrones */

/**
 * Agrega una lista de sesiones de uso en un Mapa de patrones (FR-001, FR-002, FR-003).
 *
 * @param {SesionDeUso[]} sesiones
 * @returns {MapaDePatrones}
 */
export function construirMapaDePatrones(sesiones) {
  const porAppMap = new Map()
  const porHora = Array.from({ length: 24 }, (_, hora) => ({ hora, minutosTotales: 0 }))
  const diasVistos = new Set()
  let minutosTotales = 0

  for (const sesion of sesiones) {
    minutosTotales += sesion.duracionMin
    diasVistos.add(sesion.fecha)
    porHora[sesion.hora].minutosTotales += sesion.duracionMin

    const acumuladoApp = porAppMap.get(sesion.app) ?? { app: sesion.app, minutosTotales: 0, numSesiones: 0 }
    acumuladoApp.minutosTotales += sesion.duracionMin
    acumuladoApp.numSesiones += 1
    porAppMap.set(sesion.app, acumuladoApp)
  }

  const porApp = [...porAppMap.values()].sort((a, b) => b.minutosTotales - a.minutosTotales)

  return {
    porApp,
    porHora,
    diasConDatos: diasVistos.size,
    minutosTotales,
  }
}
