import { useState } from 'react'
import { formatDuracion } from '../data/formato'

// Barras verticales por hora (0-23h), esquinas superiores redondeadas,
// eje en horas reales, sin rejilla densa — según DESIGN.md.
// Interactiva: el hover resalta la barra bajo el cursor con una vista previa
// del tooltip, y un toque/clic la fija (útil en pantallas táctiles, donde no
// hay hover) con un tooltip más grande y legible.
const ETIQUETAS_EJE = [0, 6, 12, 18, 24]

function colorDeBarra(minutos, maxMinutos) {
  if (maxMinutos === 0) return 'var(--color-border)'
  const ratio = minutos / maxMinutos
  if (ratio >= 0.98) return 'var(--color-primary)'
  if (ratio >= 0.5) return '#EFAF97'
  if (ratio >= 0.15) return 'var(--color-accent-soft)'
  return 'var(--color-border)'
}

function BarraHoraria({ porHora }) {
  const maxMinutos = Math.max(0, ...porHora.map((h) => h.minutosTotales))
  const [horaHover, setHoraHover] = useState(null)
  const [horaSeleccionada, setHoraSeleccionada] = useState(null)
  const horaActiva = horaSeleccionada ?? horaHover

  return (
    <div>
      <div className="h-40 flex items-end gap-[3px]">
        {porHora.map(({ hora, minutosTotales }) => {
          const alturaPct = maxMinutos === 0 ? 4 : Math.max(6, (minutosTotales / maxMinutos) * 100)
          const activa = horaActiva === hora
          return (
            <div
              key={hora}
              className="relative flex-1 h-full flex items-end justify-center"
              onMouseEnter={() => setHoraHover(hora)}
              onMouseLeave={() => setHoraHover(null)}
            >
              {activa && (
                <div
                  role="status"
                  className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 z-10 rounded-btn bg-text-primary text-on-primary px-sm py-xs text-center shadow-lg whitespace-nowrap"
                >
                  <p className="text-caption opacity-80">{hora}h</p>
                  <p className="text-h3 font-bold leading-tight">{formatDuracion(minutosTotales)}</p>
                  <span
                    aria-hidden="true"
                    className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-text-primary rotate-45"
                  />
                </div>
              )}
              <button
                type="button"
                onClick={() => setHoraSeleccionada((actual) => (actual === hora ? null : hora))}
                aria-label={`${hora}h, ${formatDuracion(minutosTotales)}`}
                aria-pressed={horaSeleccionada === hora}
                className="w-full rounded-t-md border-0 p-0 cursor-pointer transition-[transform,filter] duration-150 origin-bottom"
                style={{
                  height: `${alturaPct}%`,
                  backgroundColor: activa ? 'var(--color-primary)' : colorDeBarra(minutosTotales, maxMinutos),
                  transform: activa ? 'scaleX(1.35)' : 'scaleX(1)',
                  filter: activa ? 'drop-shadow(0 2px 6px rgba(232,150,122,0.55))' : 'none',
                }}
              />
            </div>
          )
        })}
      </div>
      <div className="flex justify-between text-caption text-text-secondary mt-xs border-t border-border pt-xs">
        {ETIQUETAS_EJE.map((h) => (
          <span key={h}>{h}h</span>
        ))}
      </div>
    </div>
  )
}

export default BarraHoraria
