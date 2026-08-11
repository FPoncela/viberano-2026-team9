// Barras verticales por hora (0-23h), esquinas superiores redondeadas,
// eje en horas reales, sin rejilla densa — según DESIGN.md.
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

  return (
    <div>
      <div className="h-40 flex items-end gap-[3px]">
        {porHora.map(({ hora, minutosTotales }) => {
          const alturaPct = maxMinutos === 0 ? 4 : Math.max(6, (minutosTotales / maxMinutos) * 100)
          return (
            <div
              key={hora}
              className="flex-1 rounded-t-md"
              style={{ height: `${alturaPct}%`, backgroundColor: colorDeBarra(minutosTotales, maxMinutos) }}
              title={`${hora}h · ${minutosTotales} min`}
            />
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
