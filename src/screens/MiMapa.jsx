// Placeholder de la pantalla estrella — se construye en el Bloque 4 (T4.1-T4.4).
function MiMapa({ onRevocarPermiso }) {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center gap-md p-md text-center">
      <h1 className="text-h1">Mi mapa</h1>
      <p className="text-body text-text-secondary">
        Permiso concedido. La pantalla real se construye en el Bloque 4.
      </p>
      <button type="button" onClick={onRevocarPermiso} className="text-caption text-text-secondary">
        Revocar permiso (prueba T3.2)
      </button>
    </div>
  )
}

export default MiMapa
