import { infoDeApp } from '../data/apps'
import { formatDuracion } from '../data/formato'

function AppRow({ app, minutos, onClick }) {
  const info = infoDeApp(app)

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-md rounded-card bg-surface p-md shadow-[0_2px_12px_rgba(43,39,48,0.06)] text-left"
    >
      <span
        aria-hidden="true"
        style={{ backgroundColor: info.bg, color: info.color }}
        className="w-11 h-11 rounded-2xl flex items-center justify-center font-semibold shrink-0"
      >
        {info.abbr}
      </span>
      <span className="flex-1">
        <p className="text-h3">{app}</p>
        <p className="text-caption text-text-secondary">{info.categoria}</p>
      </span>
      <span className="text-h3 shrink-0">{formatDuracion(minutos)}</span>
    </button>
  )
}

export default AppRow
