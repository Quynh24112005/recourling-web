export function toTitleFromPath(path) {
  return path
    .replace(/^\//, '')
    .split('/')
    .join(' ')
    .split('-')
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(' ')
}

export function toPercent(value) {
  const n = Number(value)
  if (Number.isNaN(n)) return '0%'
  const bounded = Math.max(0, Math.min(100, n))
  return `${bounded.toFixed(0)}%`
}

export function formatDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '-'
  return date.toLocaleDateString('vi-VN')
}
