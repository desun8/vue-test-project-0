export const ROUTES = {
  index: {
    path: '/',
    label: 'Главная',
  },
  convert: {
    path: '/convert',
    label: 'Конвертация',
  },
}

export const CURRENCIES_CODE = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
}

export const CURRENCIES_CODE_LIST = Object.values(CURRENCIES_CODE)

export const CURRENCIES = {
  RUB: { code: CURRENCIES_CODE.RUB, name: 'Рубли' },
  USD: { code: CURRENCIES_CODE.USD, name: 'Доллары' },
  EUR: { code: CURRENCIES_CODE.EUR, name: 'Евро' },
}
