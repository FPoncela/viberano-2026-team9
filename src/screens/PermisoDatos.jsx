import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { IconoMapaTab } from '../components/IconosTab'

function IconoDispositivo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-on-primary">
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M11 18h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function PermisoDatos({ onConceder }) {
  const [declinado, setDeclinado] = useState(false)

  return (
    <div className="min-h-svh flex flex-col px-md pt-xl pb-xl gap-lg text-center">
      <div className="mx-auto w-24 h-24 rounded-[28px] bg-primary-soft flex items-center justify-center">
        <IconoMapaTab className="w-10 h-10 text-primary" />
      </div>

      <h1 className="text-h1">Antes de ver tu mapa</h1>

      <p className="text-body text-text-secondary">
        VibeCheck necesita acceso a tus datos de uso del móvil para dibujar tu mapa: qué apps
        usas, cuándo y cuánto tiempo. Sin este permiso no podemos mostrarte nada todavía.
      </p>

      <div className="flex flex-col gap-sm text-left">
        <Card>
          <p className="text-body">
            Solo tú ves tu mapa. Nunca se comparte con tus padres ni con el colegio.
          </p>
        </Card>
        <Card className="flex gap-sm items-start">
          <span className="w-6 h-6 rounded-md bg-success flex items-center justify-center shrink-0 mt-0.5">
            <IconoDispositivo />
          </span>
          <p className="text-body">
            Se pide una vez, desde los ajustes de tu sistema. Puedes cambiarlo cuando quieras.
          </p>
        </Card>
      </div>

      <div className="mt-auto flex flex-col gap-sm">
        {declinado && (
          <Card className="text-left">
            <p className="text-body text-text-secondary">
              Vale, lo entendemos. Pero sin este permiso no podemos dibujar tu mapa todavía — en
              cuanto quieras verlo, pulsa "Dar acceso".
            </p>
          </Card>
        )}
        <Button variant="primary" onClick={onConceder}>
          Dar acceso
        </Button>
        {!declinado && (
          <button
            type="button"
            onClick={() => setDeclinado(true)}
            className="text-body text-text-secondary py-sm"
          >
            Ahora no
          </button>
        )}
      </div>
    </div>
  )
}

export default PermisoDatos
