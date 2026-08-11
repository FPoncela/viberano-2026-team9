import { useState } from 'react'
import PermisoDatos from './screens/PermisoDatos'
import MiMapa from './screens/MiMapa'
import DetalleItem from './screens/DetalleItem'
import TabBar from './components/TabBar'

const TABS = [
  { id: 'mapa', label: 'Mapa', icon: '🗺️' },
  { id: 'comparativa', label: 'Comparativa', icon: '📊' },
]

function App() {
  const [permisoConcedido, setPermisoConcedido] = useState(false)
  // Arranca intentando ir a "mapa" para poder probar el guard de abajo:
  // sin permiso, cualquier intento de entrar a Mi mapa se queda en "permiso".
  const [screen, setScreen] = useState('mapa')
  const [appSeleccionada, setAppSeleccionada] = useState(null)

  const necesitaPermiso = ['mapa', 'comparativa', 'detalle'].includes(screen) && !permisoConcedido
  const screenAMostrar = necesitaPermiso ? 'permiso' : screen

  function concederPermiso() {
    setPermisoConcedido(true)
    setScreen('mapa')
  }

  function irADetalle(app) {
    setAppSeleccionada(app)
    setScreen('detalle')
  }

  if (screenAMostrar === 'permiso') {
    return <PermisoDatos onConceder={concederPermiso} onDeclinar={() => setScreen('permiso')} />
  }

  if (screenAMostrar === 'detalle') {
    return <DetalleItem app={appSeleccionada} onVolver={() => setScreen('mapa')} />
  }

  return (
    <>
      {screenAMostrar === 'comparativa' ? (
        <div className="min-h-svh flex flex-col items-center justify-center gap-md p-md pb-24 text-center">
          <h1 className="text-h1">Comparativa</h1>
          <p className="text-body text-text-secondary">Se construye en el Bloque 6 (si da tiempo).</p>
        </div>
      ) : (
        <MiMapa onSeleccionarApp={irADetalle} />
      )}
      <TabBar tabs={TABS} activeTab={screenAMostrar} onTabChange={setScreen} />
    </>
  )
}

export default App
