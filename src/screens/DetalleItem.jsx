// Placeholder de la pantalla de detalle — se construye de verdad en el Bloque 5 (T5.1-T5.2).
function DetalleItem({ app, onVolver }) {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center gap-md p-md text-center">
      <h1 className="text-h1">{app}</h1>
      <p className="text-body text-text-secondary">
        Detalle pendiente de construir en el Bloque 5.
      </p>
      <button type="button" onClick={onVolver} className="text-body text-primary font-medium">
        ← Volver a Mi mapa
      </button>
    </div>
  )
}

export default DetalleItem
