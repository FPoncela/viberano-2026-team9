import { useState } from 'react'
import PermisoDatos from './screens/PermisoDatos'
import MiMapa from './screens/MiMapa'

function App() {
  const [permisoConcedido, setPermisoConcedido] = useState(false)
  // Arranca intentando ir a "mapa" para poder probar el guard de abajo:
  // sin permiso, cualquier intento de entrar a Mi mapa se queda en "permiso".
  const [screen, setScreen] = useState('mapa')

  const screenAMostrar = screen === 'mapa' && !permisoConcedido ? 'permiso' : screen

  function concederPermiso() {
    setPermisoConcedido(true)
    setScreen('mapa')
  }

  function revocarPermiso() {
    setPermisoConcedido(false)
    setScreen('mapa')
  }

  if (screenAMostrar === 'permiso') {
    return <PermisoDatos onConceder={concederPermiso} onDeclinar={() => setScreen('permiso')} />
  }

  return <MiMapa onRevocarPermiso={revocarPermiso} />
}

export default App
