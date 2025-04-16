export function truncateToTwoDecimals(num: number) {
  return Math.trunc(num * 100) / 100
}
