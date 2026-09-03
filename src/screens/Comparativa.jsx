import Card from '../components/Card'
import IconoApp from '../components/IconosApp'
import { infoDeApp } from '../data/apps'
import { formatDuracion } from '../data/formato'
import { datasetUsoNormal } from '../data/fixtures'
import { construirComparativaSemanal } from '../data/mapaPatrones'

const COLOR_TENDENCIA = {
  up: 'text-caution',
  down: 'text-success',
  flat: 'text-text-secondary',
}

function signo(delta) {
  if (delta === 0) return '±0m'
  return `${delta > 0 ? '+' : '-'}${formatDuracion(Math.abs(delta))}`
}

function FilaComparativa({ fila, maxMinutos }) {
  const info = infoDeApp(fila.app)
  const pctEstaSemana = maxMinutos === 0 ? 0 : (fila.minutosEstaSemana / maxMinutos) * 100
  const pctSemanaAnterior = maxMinutos === 0 ? 0 : (fila.minutosSemanaAnterior / maxMinutos) * 100

  return (
    <Card className="flex gap-sm items-start">
      <IconoApp app={fila.app} />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline gap-sm">
          <p className="text-h3">{fila.app}</p>
          <p className={`text-caption font-bold shrink-0 ${COLOR_TENDENCIA[fila.tendencia]}`}>
            {signo(fila.delta)}
          </p>
        </div>
        <p className="text-caption text-text-secondary">{info.categoria}</p>

        <div className="flex flex-col gap-xs mt-sm">
          <div className="flex items-center gap-xs">
            <div className="w-24 h-[7px] bg-transparent rounded-full shrink-0">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${pctEstaSemana}%` }}
              />
            </div>
            <span className="text-caption text-text-secondary">
              {formatDuracion(fila.minutosEstaSemana)}
            </span>
          </div>
          <div className="flex items-center gap-xs">
            <div className="w-24 h-[7px] bg-transparent rounded-full shrink-0">
              <div
                className="h-full rounded-full bg-border"
                style={{ width: `${pctSemanaAnterior}%` }}
              />
            </div>
            <span className="text-caption text-text-secondary">
              {formatDuracion(fila.minutosSemanaAnterior)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}

function Comparativa() {
  const { hayHistoricoSuficiente, apps } = construirComparativaSemanal(datasetUsoNormal)

  if (!hayHistoricoSuficiente) {
    return (
      <div className="min-h-full flex flex-col p-md pb-lg gap-md">
        <h1 className="text-h1">Comparativa</h1>
        <Card className="mt-lg">
          <p className="text-h3 mb-xs">Todavía no hay suficiente histórico</p>
          <p className="text-body text-text-secondary">
            Necesitamos al menos 2 semanas de uso registrado para comparar esta semana con la
            anterior. Vuelve pronto.
          </p>
        </Card>
      </div>
    )
  }

  const maxMinutos = Math.max(...apps.map((f) => Math.max(f.minutosEstaSemana, f.minutosSemanaAnterior)))

  return (
    <div className="min-h-full flex flex-col p-md pb-lg gap-md">
      <div>
        <h1 className="text-h1">Comparativa</h1>
        <p className="text-body text-text-secondary">Esta semana vs. la anterior</p>
      </div>

      <div className="flex gap-md text-caption text-text-secondary">
        <span className="flex items-center gap-xs">
          <span aria-hidden="true" className="w-2.5 h-2.5 rounded-sm bg-primary" /> Esta semana
        </span>
        <span className="flex items-center gap-xs">
          <span aria-hidden="true" className="w-2.5 h-2.5 rounded-sm bg-border" /> Semana anterior
        </span>
      </div>

      <div className="flex flex-col gap-sm">
        {apps.map((fila) => (
          <FilaComparativa key={fila.app} fila={fila} maxMinutos={maxMinutos} />
        ))}
      </div>
    </div>
  )
}

export default Comparativa
