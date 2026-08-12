// Iconos de la barra inferior, calcados de vibecheck-04-comparativa-semanal.html
// (Sprint 2) para mantener fidelidad visual con el diseño.
export function IconoMapaTab({ className }) {
  return (
    <svg viewBox="0 0 21 21" fill="none" className={className}>
      <rect x="2.5" y="13" width="4" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8.5" y="8" width="4" height="10.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14.5" y="4.5" width="4" height="14" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function IconoComparativaTab({ className }) {
  return (
    <svg viewBox="0 0 21 21" fill="none" className={className}>
      <path d="M3 7.5H13.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M10.5 4.5L13.5 7.5L10.5 10.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 13.5H7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M10.5 10.5L7.5 13.5L10.5 16.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
