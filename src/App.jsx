import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import TabBar from './components/TabBar'

const TABS = [
  { id: 'mapa', label: 'Mi mapa', icon: '🗺️' },
  { id: 'comparativa', label: 'Comparativa', icon: '📊' },
]

function App() {
  const [activeTab, setActiveTab] = useState('mapa')

  return (
    <div id="app" className="flex flex-col gap-md p-md pb-20">
      <h1 className="text-h1">Componentes base</h1>

      <Card>
        <p className="text-caption text-text-secondary">Tarjeta</p>
        <p className="text-h3">TikTok · 42 min</p>
      </Card>

      <div className="flex flex-col gap-sm">
        <Button variant="primary">Botón primario</Button>
        <Button variant="secondary">Botón secundario</Button>
      </div>

      <TabBar tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App
