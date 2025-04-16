export function toLocaleMoney(value: number, currency: string) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    maximumFractionDigits: 2,
    currency,
  }).format(value)
}
