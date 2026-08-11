export function formatDuracion(minutos) {
  if (minutos < 60) return `${minutos}m`
  const horas = Math.floor(minutos / 60)
  const resto = minutos % 60
  return resto === 0 ? `${horas}h` : `${horas}h ${resto}m`
}
