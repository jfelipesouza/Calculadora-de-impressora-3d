import { ChangeEvent } from 'react'

export const formatMoney = (value: number | null): string => {
  if (value === null) return ''

  const format = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return format.replace(/\.[0-9]{2}$/, '')
}

export const handleChangeMoneyMasked = (
  event: ChangeEvent<HTMLInputElement>
) => {
  const inputValue = event.target.value
  console.log(inputValue)
  const numericValue = inputValue.replace(/[^\d]/g, '').replace(',', '.')
  return parseInt(numericValue, 10)
}
