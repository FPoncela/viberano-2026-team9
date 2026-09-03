import Card from '../components/Card'
import BarraHoraria from '../components/BarraHoraria'
import IconoApp from '../components/IconosApp'
import { infoDeApp } from '../data/apps'
import { formatDuracion } from '../data/formato'
import { datasetUsoNormal } from '../data/fixtures'
import { construirMapaDePatrones, filtrarUltimosDias } from '../data/mapaPatrones'

function IconoVolver() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
      <path
        d="M10 13L5 8L10 3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DetalleItem({ app, onVolver }) {
  const info = infoDeApp(app)
  const sesionesApp = filtrarUltimosDias(datasetUsoNormal, 7).filter((s) => s.app === app)
  const mapa = construirMapaDePatrones(sesionesApp)

  const numSesiones = sesionesApp.length
  const sesionMasLarga = numSesiones === 0 ? 0 : Math.max(...sesionesApp.map((s) => s.duracionMin))
  const primeraApertura = numSesiones === 0 ? null : Math.min(...sesionesApp.map((s) => s.hora))
  const pico = mapa.porHora.reduce((max, h) => (h.minutosTotales > max.minutosTotales ? h : max))

  return (
    <div className="min-h-svh flex flex-col p-md pb-lg gap-sm">
      <button
        type="button"
        onClick={onVolver}
        className="flex items-center gap-xs text-caption text-text-secondary font-medium py-xs self-start"
      >
        <IconoVolver /> Mi mapa
      </button>

      <div className="flex items-center gap-md my-xs">
        <span
          aria-hidden="true"
          style={{ backgroundColor: info.bg, color: info.color }}
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        >
          <IconoApp app={app} className="w-6 h-6" />
        </span>
        <div>
          <p className="text-h1">{app}</p>
          <p className="text-caption text-text-secondary">{info.categoria}</p>
        </div>
      </div>

      <Card className="text-center">
        <p className="text-caption text-text-secondary uppercase tracking-wide">Esta semana</p>
        <p className="text-[44px] font-bold leading-none tracking-tight">
          {formatDuracion(mapa.minutosTotales)}
        </p>
        <p className="text-caption text-text-secondary mt-xs">últimos 7 días</p>
      </Card>

      <div className="flex gap-sm">
        <Card className="flex-1 !p-sm">
          <p className="text-h3">{numSesiones}</p>
          <p className="text-caption text-text-secondary">sesiones</p>
        </Card>
        <Card className="flex-1 !p-sm">
          <p className="text-h3">{sesionMasLarga} min</p>
          <p className="text-caption text-text-secondary">sesión más larga</p>
        </Card>
        <Card className="flex-1 !p-sm">
          <p className="text-h3">{primeraApertura === null ? '—' : `${primeraApertura}h`}</p>
          <p className="text-caption text-text-secondary">primera apertura</p>
        </Card>
      </div>

      <div>
        <h2 className="text-h2">¿Cuándo la abres?</h2>
        <p className="text-body text-text-secondary mb-sm">Por horas, esta semana</p>
        <Card>
          <BarraHoraria porHora={mapa.porHora} />
          <p className="text-body text-primary font-semibold mt-sm">Tu pico es a las {pico.hora}h</p>
        </Card>
      </div>
    </div>
  )
}

export default DetalleItem
