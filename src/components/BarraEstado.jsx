import { useEffect, useState } from 'react'

function formatearHora(date) {
  const horas = String(date.getHours()).padStart(2, '0')
  const minutos = String(date.getMinutes()).padStart(2, '0')
  return `${horas}:${minutos}`
}

// Barra de estado simulada (hora real + iconos de señal, wifi y batería)
// para que la app se sienta como una app movil de verdad, no como una
// pagina web dentro de un movil.
function BarraEstado() {
  const [hora, setHora] = useState(() => formatearHora(new Date()))

  useEffect(() => {
    const id = setInterval(() => setHora(formatearHora(new Date())), 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="flex items-center justify-between px-md pt-sm text-caption font-semibold text-text-primary"
      aria-hidden="true"
    >
      <span>{hora}</span>
      <span className="flex items-center gap-xs text-text-primary">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M2 17h2v4H2zm4.5-3h2v7h-2zM11 11h2v10h-2zm4.5-4h2v14h-2zM20 4h2v17h-2z" />
        </svg>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M2 8.5a16 16 0 0 1 20 0M5.5 12a11 11 0 0 1 13 0M9 15.5a6 6 0 0 1 6 0" />
          <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
        </svg>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="2" y="7" width="18" height="10" rx="2.5" />
          <rect x="4.5" y="9.5" width="10" height="5" fill="currentColor" stroke="none" />
          <path d="M22 10v4" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  )
}

export default BarraEstado
