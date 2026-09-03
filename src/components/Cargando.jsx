import { useEffect, useState } from 'react'

// Pantalla de carga breve entre "Dar acceso" y Mi mapa — simula que la app
// está leyendo de verdad los datos de uso del sistema, en vez de saltar
// instantáneamente a un mapa que ya estaba preparado. La duración la decide
// quien la muestra (aleatoria, para que no se sienta siempre igual), y la
// barra de progreso se anima a ese mismo ritmo.
function Cargando({ mensaje = 'Recopilando datos…', duracionMs = 4000 }) {
  const [progreso, setProgreso] = useState(6)

  useEffect(() => {
    const id = requestAnimationFrame(() => setProgreso(94))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="min-h-svh flex flex-col items-center justify-center gap-md px-md text-center">
      <span
        className="w-10 h-10 rounded-full border-4 border-primary-soft border-t-primary animate-spin"
        aria-hidden="true"
      />
      <p className="text-body font-medium text-text-primary">{mensaje}</p>
      <div className="w-40 h-1.5 rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full bg-primary ease-out"
          style={{ width: `${progreso}%`, transitionProperty: 'width', transitionDuration: `${duracionMs - 200}ms` }}
        />
      </div>
    </div>
  )
}

export default Cargando
