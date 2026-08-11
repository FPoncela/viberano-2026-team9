// Catálogo visual por app: categoría, iniciales y color, para pintar la lista
// de "Qué has estado viendo" (T4.1) y la cabecera del detalle (T5.1).
// Un app no catalogada cae en DEFAULT_APP_INFO (ver caso límite de spec.md).
export const APP_INFO = {
  TikTok: { categoria: 'Vídeo', abbr: 'Ti', bg: 'var(--color-accent-soft)', color: 'var(--color-accent)' },
  Instagram: { categoria: 'Redes sociales', abbr: 'In', bg: 'var(--color-primary-soft)', color: 'var(--color-primary)' },
  WhatsApp: { categoria: 'Mensajería', abbr: 'Wa', bg: '#E3EDE4', color: 'var(--color-success)' },
  YouTube: { categoria: 'Vídeo', abbr: 'Yo', bg: '#F5E9D3', color: 'var(--color-caution)' },
  Spotify: { categoria: 'Música', abbr: 'Sp', bg: 'var(--color-border)', color: 'var(--color-text-secondary)' },
}

export const DEFAULT_APP_INFO = { categoria: 'Sin categoría', abbr: '?', bg: 'var(--color-border)', color: 'var(--color-text-secondary)' }

export function infoDeApp(app) {
  return APP_INFO[app] ?? DEFAULT_APP_INFO
}
