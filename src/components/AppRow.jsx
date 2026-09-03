import { infoDeApp } from '../data/apps'
import { formatDuracion } from '../data/formato'
import IconoApp from './IconosApp'

function AppRow({ app, minutos, onClick }) {
  const info = infoDeApp(app)

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-md rounded-card bg-surface p-md shadow-[0_2px_12px_rgba(43,39,48,0.06)] text-left transition-all duration-150 hover:shadow-[0_6px_20px_rgba(43,39,48,0.14)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-soft)] active:translate-y-0 active:scale-[0.99]"
    >
      <IconoApp app={app} />
      <span className="flex-1">
        <p className="text-h3">{app}</p>
        <p className="text-caption text-text-secondary">{info.categoria}</p>
      </span>
      <span className="text-h3 shrink-0">{formatDuracion(minutos)}</span>
    </button>
  )
}

export default AppRow
