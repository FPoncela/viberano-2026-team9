import BarraHoraria from '../components/BarraHoraria'
import AppRow from '../components/AppRow'
import Card from '../components/Card'
import { construirMapaDePatrones } from '../data/mapaPatrones'
import { datasetUsoNormal } from '../data/fixtures'

function IconoFiltro() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path
        d="M4 5h16l-6 7v6l-4 2v-8z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MiMapa({ onSeleccionarApp }) {
  const mapa = construirMapaDePatrones(datasetUsoNormal)

  if (mapa.diasConDatos < 3) {
    return (
      <div className="min-h-svh flex flex-col p-md pb-24 gap-md">
        <h1 className="text-h1">Mi mapa</h1>
        <Card className="mt-lg">
          <p className="text-h3 mb-xs">Todavía es pronto</p>
          <p className="text-body text-text-secondary">
            Llevamos {mapa.diasConDatos} {mapa.diasConDatos === 1 ? 'día' : 'días'} de uso
            registrado. Necesitamos al menos 3 días para dibujar un mapa fiable — vuelve pronto.
          </p>
        </Card>
      </div>
    )
  }

  const pico = mapa.porHora.reduce((max, h) => (h.minutosTotales > max.minutosTotales ? h : max))

  return (
    <div className="min-h-svh flex flex-col p-md pb-24 gap-lg">
      <div>
        <h1 className="text-h1">Mi mapa</h1>
        <p className="text-body text-text-secondary">Últimos 7 días</p>
      </div>

      <div>
        <h2 className="text-h2">Tus franjas horarias</h2>
        <p className="text-body text-text-secondary mb-sm">Cuándo caes más</p>
        <Card>
          <BarraHoraria porHora={mapa.porHora} />
          <p className="text-body text-primary font-semibold mt-sm">Tu pico es a las {pico.hora}h</p>
        </Card>
      </div>

      <div className="flex flex-col gap-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-h2">Qué has estado viendo</h2>
          <button
            type="button"
            className="flex items-center gap-xs text-caption font-medium border border-border rounded-btn px-sm py-xs text-text-primary"
          >
            <IconoFiltro /> Filtros
          </button>
        </div>
        {mapa.porApp.map((uso) => (
          <AppRow
            key={uso.app}
            app={uso.app}
            minutos={uso.minutosTotales}
            onClick={() => onSeleccionarApp(uso.app)}
          />
        ))}
      </div>
    </div>
  )
}

export default MiMapa
