// Hoja/modal inferior generica — DESIGN.md pide que los filtros se elijan
// en una hoja, nunca como chips permanentes en la pantalla principal.
function Hoja({ titulo, onCerrar, children }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={onCerrar} aria-hidden="true" />
      <div className="relative bg-surface rounded-t-[24px] p-md pb-lg flex flex-col gap-md max-h-[80svh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-h2">{titulo}</h2>
          <button
            type="button"
            onClick={onCerrar}
            aria-label="Cerrar"
            className="text-text-secondary text-h3 leading-none px-xs"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Hoja
