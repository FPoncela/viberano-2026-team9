import { useState } from 'react'
import BarraHoraria from '../components/BarraHoraria'
import AppRow from '../components/AppRow'
import Card from '../components/Card'
import Button from '../components/Button'
import Hoja from '../components/Hoja'
import { construirMapaDePatrones, filtrarUltimosDias } from '../data/mapaPatrones'
import { datasetUsoNormal } from '../data/fixtures'
import { infoDeApp } from '../data/apps'

function IconoFiltro() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path
        d="M4 5h16l-6 7v6l-4 2v-8z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconoCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-primary">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MiMapa({ onSeleccionarApp }) {
  const mapa = construirMapaDePatrones(filtrarUltimosDias(datasetUsoNormal, 7))
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false)
  const [categoriasActivas, setCategoriasActivas] = useState([])

  if (mapa.diasConDatos < 3) {
    return (
      <div className="min-h-svh flex flex-col p-md pb-24 gap-md">
        <h1 className="text-h1">Mi mapa</h1>
        <Card className="mt-lg">
          <p className="text-h3 mb-xs">Todavía es pronto</p>
          <p className="text-body text-text-secondary">
            Llevamos {mapa.diasConDatos} {mapa.diasConDatos === 1 ? 'día' : 'días'} de uso
            registrado. Necesitamos al menos 3 días para dibujar un mapa fiable — vuelve pronto.
          </p>
        </Card>
      </div>
    )
  }

  const pico = mapa.porHora.reduce((max, h) => (h.minutosTotales > max.minutosTotales ? h : max))
  const categoriasDisponibles = [...new Set(mapa.porApp.map((u) => infoDeApp(u.app).categoria))]
  const appsFiltradas =
    categoriasActivas.length === 0
      ? mapa.porApp
      : mapa.porApp.filter((u) => categoriasActivas.includes(infoDeApp(u.app).categoria))

  function alternarCategoria(categoria) {
    setCategoriasActivas((actual) =>
      actual.includes(categoria) ? actual.filter((c) => c !== categoria) : [...actual, categoria]
    )
  }

  return (
    <div className="min-h-svh flex flex-col p-md pb-24 gap-lg">
      <div>
        <h1 className="text-h1">Mi mapa</h1>
        <p className="text-body text-text-secondary">Últimos 7 días</p>
      </div>

      <div>
        <h2 className="text-h2">Tus franjas horarias</h2>
        <p className="text-body text-text-secondary mb-sm">Cuándo caes más</p>
        <Card>
          <BarraHoraria porHora={mapa.porHora} />
          <p className="text-body text-primary font-semibold mt-sm">Tu pico es a las {pico.hora}h</p>
        </Card>
      </div>

      <div className="flex flex-col gap-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-h2">Qué has estado viendo</h2>
          <button
            type="button"
            onClick={() => setFiltrosAbiertos(true)}
            className="flex items-center gap-xs text-caption font-medium border border-border rounded-btn px-sm py-xs text-text-primary"
          >
            <IconoFiltro /> Filtros
            {categoriasActivas.length > 0 && (
              <span className="w-4 h-4 rounded-full bg-primary text-on-primary text-[10px] flex items-center justify-center font-bold">
                {categoriasActivas.length}
              </span>
            )}
          </button>
        </div>

        {appsFiltradas.length === 0 ? (
          <Card>
            <p className="text-body text-text-secondary">Ninguna app coincide con los filtros elegidos.</p>
          </Card>
        ) : (
          appsFiltradas.map((uso) => (
            <AppRow
              key={uso.app}
              app={uso.app}
              minutos={uso.minutosTotales}
              onClick={() => onSeleccionarApp(uso.app)}
            />
          ))
        )}
      </div>

      {filtrosAbiertos && (
        <Hoja titulo="Filtrar por categoría" onCerrar={() => setFiltrosAbiertos(false)}>
          <div className="flex flex-col gap-sm">
            {categoriasDisponibles.map((categoria) => {
              const activa = categoriasActivas.includes(categoria)
              return (
                <button
                  key={categoria}
                  type="button"
                  onClick={() => alternarCategoria(categoria)}
                  className={`w-full flex items-center justify-between rounded-btn border px-md py-sm text-left ${
                    activa ? 'border-primary bg-primary-soft' : 'border-border'
                  }`}
                >
                  <span className="text-body">{categoria}</span>
                  {activa && <IconoCheck />}
                </button>
              )
            })}
          </div>
          <div className="flex gap-sm mt-md">
            <Button variant="secondary" className="flex-1" onClick={() => setCategoriasActivas([])}>
              Limpiar
            </Button>
            <Button variant="primary" className="flex-1" onClick={() => setFiltrosAbiertos(false)}>
              Ver resultados
            </Button>
          </div>
        </Hoja>
      )}
    </div>
  )
}

export default MiMapa
