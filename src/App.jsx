import { useState } from 'react'
import PermisoDatos from './screens/PermisoDatos'
import MiMapa from './screens/MiMapa'
import DetalleItem from './screens/DetalleItem'
import Comparativa from './screens/Comparativa'
import TabBar from './components/TabBar'
import BarraEstado from './components/BarraEstado'

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

  let contenido
  if (screenAMostrar === 'permiso') {
    contenido = <PermisoDatos onConceder={concederPermiso} />
  } else if (screenAMostrar === 'detalle') {
    contenido = <DetalleItem app={appSeleccionada} onVolver={() => setScreen('mapa')} />
  } else {
    contenido = (
      <>
        {screenAMostrar === 'comparativa' ? <Comparativa /> : <MiMapa onSeleccionarApp={irADetalle} />}
        <TabBar tabs={TABS} activeTab={screenAMostrar} onTabChange={setScreen} />
      </>
    )
  }

  return (
    <>
      <BarraEstado />
      {contenido}
    </>
  )
}

export default App
