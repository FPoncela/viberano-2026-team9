import { formatearFechaISO } from './fecha'

/** @typedef {import('./types.js').SesionDeUso} SesionDeUso */

const CATALOGO_APPS = ['TikTok', 'Instagram', 'YouTube', 'WhatsApp', 'Spotify']

// Franjas donde es más probable que haya uso (antes de dormir, al despertar,
// hora de comer) para que la vista por horas del mapa refleje picos reales.
const HORAS_PICO = [20, 21, 22, 23, 7, 8, 12, 13]

function elegir(lista) {
  return lista[Math.floor(Math.random() * lista.length)]
}

function entre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function elegirHora() {
  return Math.random() < 0.7 ? elegir(HORAS_PICO) : entre(0, 23)
}

/**
 * Genera sesiones de uso simuladas para los últimos `dias` días (incluyendo hoy).
 *
 * @param {number} dias
 * @returns {SesionDeUso[]}
 */
export function generarSesiones(dias) {
  const sesiones = []
  const hoy = new Date()
  let idCounter = 0

  for (let offset = 0; offset < dias; offset++) {
    const fechaDia = new Date(hoy)
    fechaDia.setDate(hoy.getDate() - offset)
    const fecha = formatearFechaISO(fechaDia)
    const numSesionesDelDia = entre(3, 7)

    for (let i = 0; i < numSesionesDelDia; i++) {
      sesiones.push({
        id: `s-${fecha}-${idCounter++}`,
        app: elegir(CATALOGO_APPS),
        fecha,
        hora: elegirHora(),
        duracionMin: entre(5, 45),
      })
    }
  }

  return sesiones
}

// (a) Usuario con 7+ días de uso normal.
export const datasetUsoNormal = generarSesiones(9)

// (b) Usuario con menos de 3 días de uso (escenario de aceptación 3, Historia 1).
export const datasetPocosDias = generarSesiones(2)

// (c) Usuario sin permiso concedido: sin sesiones registradas.
export const datasetSinPermiso = []
