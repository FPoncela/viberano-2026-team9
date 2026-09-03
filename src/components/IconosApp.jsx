// Glifos genéricos por app (no son los logos reales) — dan la sensación de
// icono nativo de la app sin reproducir marcas de terceros.
const GLIFOS = {
  Instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16.2" cy="7.8" r="1.1" fill="currentColor" />
    </>
  ),
  TikTok: (
    <path
      d="M14 3v10.2a3.3 3.3 0 1 1-2.6-3.23M14 3c.4 2.4 2 4 4.4 4.3"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  WhatsApp: (
    <path
      d="M6 19l1.1-3.2A7 7 0 1 1 10 18l-4 1zM9 10c0 2.5 2 4.5 4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  YouTube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10.5 9.3v5.4l4.5-2.7z" fill="currentColor" />
    </>
  ),
  Spotify: (
    <path
      d="M6 10.5c3.6-1 8.4-.6 11.4 1.3M6.6 13.6c2.9-.7 6.7-.4 9.2 1.1M7.2 16.6c2.3-.5 5.2-.3 7.1.9"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      fill="none"
    />
  ),
}

const GLIFO_DEFAULT = (
  <>
    <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
  </>
)

function IconoApp({ app, className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {GLIFOS[app] ?? GLIFO_DEFAULT}
    </svg>
  )
}

export default IconoApp
