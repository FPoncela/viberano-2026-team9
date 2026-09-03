import { useState } from 'react'
import PermisoDatos from './screens/PermisoDatos'
import MiMapa from './screens/MiMapa'
import DetalleItem from './screens/DetalleItem'
import Comparativa from './screens/Comparativa'
import TabBar from './components/TabBar'
import BarraEstado from './components/BarraEstado'
import { IconoMapaTab, IconoComparativaTab } from './components/IconosTab'

const TABS = [
  { id: 'mapa', label: 'Mapa', icon: IconoMapaTab },
  { id: 'comparativa', label: 'Comparativa', icon: IconoComparativaTab },
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

  let pantalla
  let mostrarTabBar = false
  if (screenAMostrar === 'permiso') {
    pantalla = <PermisoDatos onConceder={concederPermiso} />
  } else if (screenAMostrar === 'detalle') {
    pantalla = <DetalleItem app={appSeleccionada} onVolver={() => setScreen('mapa')} />
  } else {
    mostrarTabBar = true
    pantalla =
      screenAMostrar === 'comparativa' ? <Comparativa /> : <MiMapa onSeleccionarApp={irADetalle} />
  }

  return (
    <>
      <BarraEstado />
      <div key={screenAMostrar} className="pantalla-scroll">
        {pantalla}
      </div>
      {mostrarTabBar && <TabBar tabs={TABS} activeTab={screenAMostrar} onTabChange={setScreen} />}
    </>
  )
}

export default App
