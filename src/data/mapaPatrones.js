import { formatearFechaISO } from './fecha'

/** @typedef {import('./types.js').SesionDeUso} SesionDeUso */
/** @typedef {import('./types.js').MapaDePatrones} MapaDePatrones */

/**
 * Filtra sesiones a los últimos `dias` días (incluyendo hoy) — la ventana fija
 * de FR-003, sin selector de rango.
 *
 * @param {SesionDeUso[]} sesiones
 * @param {number} dias
 * @returns {SesionDeUso[]}
 */
export function filtrarUltimosDias(sesiones, dias) {
  const limite = new Date()
  limite.setDate(limite.getDate() - (dias - 1))
  const limiteStr = formatearFechaISO(limite)
  return sesiones.filter((sesion) => sesion.fecha >= limiteStr)
}

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

/**
 * Compara el uso por app entre la semana actual (últimos 7 días) y la semana
 * inmediatamente anterior (FR-006, Historia 3 de spec.md).
 *
 * @param {SesionDeUso[]} sesiones
 * @returns {{ hayHistoricoSuficiente: boolean, apps: Array<{app: string, minutosEstaSemana: number, minutosSemanaAnterior: number, delta: number, tendencia: 'up'|'down'|'flat'}> }}
 */
export function construirComparativaSemanal(sesiones) {
  const diasUnicos = new Set(sesiones.map((s) => s.fecha)).size
  const hayHistoricoSuficiente = diasUnicos >= 14

  if (!hayHistoricoSuficiente) {
    return { hayHistoricoSuficiente, apps: [] }
  }

  const estaSemana = filtrarUltimosDias(sesiones, 7)
  const fechasEstaSemana = new Set(estaSemana.map((s) => s.fecha))
  const semanaAnterior = filtrarUltimosDias(sesiones, 14).filter(
    (s) => !fechasEstaSemana.has(s.fecha)
  )

  const mapaEstaSemana = construirMapaDePatrones(estaSemana)
  const mapaSemanaAnterior = construirMapaDePatrones(semanaAnterior)
  const minutosPorAppEstaSemana = new Map(mapaEstaSemana.porApp.map((u) => [u.app, u.minutosTotales]))
  const minutosPorAppSemanaAnterior = new Map(
    mapaSemanaAnterior.porApp.map((u) => [u.app, u.minutosTotales])
  )

  const todasLasApps = new Set([...minutosPorAppEstaSemana.keys(), ...minutosPorAppSemanaAnterior.keys()])

  const apps = [...todasLasApps]
    .map((app) => {
      const minutosEstaSemana = minutosPorAppEstaSemana.get(app) ?? 0
      const minutosSemanaAnterior = minutosPorAppSemanaAnterior.get(app) ?? 0
      const delta = minutosEstaSemana - minutosSemanaAnterior
      const tendencia = Math.abs(delta) < 10 ? 'flat' : delta > 0 ? 'up' : 'down'
      return { app, minutosEstaSemana, minutosSemanaAnterior, delta, tendencia }
    })
    .sort((a, b) => b.minutosEstaSemana - a.minutosEstaSemana)

  return { hayHistoricoSuficiente, apps }
}
