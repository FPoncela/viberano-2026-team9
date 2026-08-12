import { useEffect, useState } from 'react'

function formatearHora(date) {
  const horas = String(date.getHours()).padStart(2, '0')
  const minutos = String(date.getMinutes()).padStart(2, '0')
  return `${horas}:${minutos}`
}

// Barra de estado simulada (como en los mockups del Sprint 2) con la hora
// real del dispositivo, para que la app se sienta como una app movil.
function BarraEstado() {
  const [hora, setHora] = useState(() => formatearHora(new Date()))

  useEffect(() => {
    const id = setInterval(() => setHora(formatearHora(new Date())), 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="text-center text-caption font-semibold text-text-primary pt-sm" aria-hidden="true">
      {hora}
    </div>
  )
}

export default BarraEstado
