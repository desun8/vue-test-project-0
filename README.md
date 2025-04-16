# Тестовое задание

## Комментарии

- В [API](https://status.neuralgeneration.com/api/currency) курсы rub-usd и usd-rub отличаются: курс rub-usd завышен по отношению к рублю, то есть при обмене 100 рублей получается сумма в долларах больше, чем при обратном обмене. Возможно, для других валютных пар тоже есть различия.
- Для инпута суммы я использую тип `number`, поэтому отдельная валидация не требуется — нельзя ввести что-либо кроме числа. Если бы использовался тип `text`, я бы добавил валидацию через `yup` (с выводом сообщения об ошибке), а также фильтровал бы нечисловые символы через регулярное выражение на событии `input`. Если интересно, могу показать пример такого кода.

## Запуск проекта

Требуется Node.js v22+.

1. Установите зависимости:
   ```bash
   npm install 
   ```
2. Запустите проект в режиме разработки:
   ```bash
   npm run dev 
   ```
3. Либо выполните сборку и предпросмотр:
```bash
npm run build
npm run preview
   ```
