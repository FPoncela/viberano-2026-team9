import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import TabBar from './components/TabBar'
import { datasetUsoNormal, datasetPocosDias, datasetSinPermiso } from './data/fixtures'
import { construirMapaDePatrones } from './data/mapaPatrones'

const TABS = [
  { id: 'mapa', label: 'Mi mapa', icon: '🗺️' },
  { id: 'comparativa', label: 'Comparativa', icon: '📊' },
]

const DATASETS = {
  normal: datasetUsoNormal,
  pocosDias: datasetPocosDias,
  sinPermiso: datasetSinPermiso,
}

function App() {
  const [activeTab, setActiveTab] = useState('mapa')
  const [dataset, setDataset] = useState('normal')

  const mapa = construirMapaDePatrones(DATASETS[dataset])

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

      <h2 className="text-h2">Prueba de datasets (T2.1 / T2.2)</h2>
      <div className="flex gap-sm">
        {Object.keys(DATASETS).map((key) => (
          <button
            key={key}
            onClick={() => setDataset(key)}
            className={`text-caption px-sm py-xs rounded-btn border border-border ${
              dataset === key ? 'bg-primary-soft text-primary' : ''
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      <Card>
        <p className="text-caption text-text-secondary">Dataset: {dataset}</p>
        <p className="text-h3">{mapa.minutosTotales} min · {mapa.diasConDatos} días</p>
        <ul className="text-body">
          {mapa.porApp.map((uso) => (
            <li key={uso.app}>
              {uso.app}: {uso.minutosTotales} min ({uso.numSesiones} sesiones)
            </li>
          ))}
        </ul>
      </Card>

      <TabBar tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App
