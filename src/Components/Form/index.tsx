import React, { useState, useEffect, useCallback } from 'react'
import { FormItem } from '../FormItem'
import { TextField } from '../TextField'
import { Box } from '../Box'
import { ResultField } from '../ResultField'
import { formatMoney } from '../../Services/utils'

type TimeObject = {
  seconds: number
  minutes: number
  hours: number
}

type ResinObject = {
  value: number
  ml: number
}
type MachineObject = {
  value: number
  life: number
  consume: number
}

export const Form: React.FC = () => {
  const [time, setTime] = useState<TimeObject>({
    seconds: 0,
    hours: 0,
    minutes: 0
  })
  const [rezin, setRezin] = useState<ResinObject>({
    ml: 0,
    value: 0
  })
  const [machine, setMachine] = useState<MachineObject>({
    value: 2000,
    life: 2000,
    consume: 72
  })

  const [total, setTotal] = useState({ rezin: 150, energie: 200, liquid: 160 })

  const [extra, setExtra] = useState(0)
  const [extraVolume, setExtraVolume] = useState(0)
  const [energie, setEnergie] = useState(0.89)
  const [lucro, setLucro] = useState({ value: 40 })

  const [custo, setCusto] = useState({
    rezin: 0,
    extra: 0,
    energie: 0
  })

  const [price, setPrice] = useState(0)

  const handleUpdateTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { id, value } = event.target
    const updateTime = Number(value)
    if (id === 'hours') {
      setTime(prev => {
        return { ...prev, hours: updateTime }
      })
    } else if (id === 'minutes') {
      setTime(prev => {
        return { ...prev, minutes: updateTime }
      })
    } else {
      setTime(prev => {
        return { ...prev, seconds: updateTime }
      })
    }
  }

  const handleUpdateMachine = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { id, value } = event.target

    setMachine(prev => ({ ...prev, [id]: Number(value) }))
  }

  const handleUpdateRezin = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { id, value } = event.target
    const valueItem = Number(value)

    if (id === 'value') {
      setRezin(prev => {
        return { ...prev, value: valueItem }
      })
    } else if (id === 'ml') {
      Promise.all([
        setRezin(prev => {
          return { ...prev, ml: valueItem }
        }),
        setExtraVolume(valueItem * 0.1 + valueItem)
      ])
    }
  }

  const handleCalc = useCallback(() => {
    const { hours, minutes, seconds } = time
    const { value: rezinValue, ml } = rezin
    if (rezinValue > 0 && ml > 0) {
      const rezin = (rezinValue * ml) / 1000
      setCusto(prev => ({ ...prev, rezin }))
    }
    if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      let total = 0
      if (hours > 0) {
        total += hours * 60
      }
      if (minutes > 0) {
        total += minutes
      }
      if (seconds > 0) {
        total += seconds > 30 ? 1 : 0
      }
      if (machine.consume > 0 && energie > 0) {
        total = energie * ((machine.consume * (total / 60)) / 1000)
      }
      setCusto(prev => ({ ...prev, energie: total }))
    }
    if (machine.value > 0 && machine.life > 0) {
      let total = 1
      if (hours > 0 && minutes <= 0) {
        total = ((seconds > 29 ? 1 : 0) + hours * 60) / 60
      } else if (hours > 0 && minutes > 0) {
        total = (minutes + (seconds > 29 ? 1 : 0) + hours * 60) / 60
      }
      total = (machine.value * total) / machine.life
      if (extra > 0) {
        total += extra
      }
      setCusto(prev => ({ ...prev, extra: total }))
    }
  }, [energie, extra, machine, rezin, time])

  const handleUpdateLucro = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { value } = event.target
    setLucro({
      value: Number(value)
    })
  }

  useEffect(() => {
    handleCalc()
  }, [time, rezin, machine, extra, energie, handleCalc])

  useEffect(() => {
    const liquid = custo.energie + custo.extra + custo.rezin
    Promise.all([
      setTotal({
        energie: custo.energie,
        liquid,
        rezin: custo.rezin
      }),
      setPrice(liquid + liquid * (lucro.value / 100))
    ])
  }, [custo, lucro.value])

  return (
    <div
      className={
        ' text-text border-borderPurple border-solid border-4 rounded-md  max-h-max h-max pb-8 '
      }
    >
      <h2 className="mt-8 text-4xl font-black w-full text-center">
        Calculadora de Impressão 3D
      </h2>

      <div
        className={
          'grid max-[700px]:grid-cols-1 max-[1250px]:grid-cols-2 grid-cols-3 auto-rows-max w-full min-[350px]:px-5 px-3 py-10 gap-x-10 gap-y-10 items-center'
        }
      >
        <FormItem title="Tempo de Impressão">
          <Box>
            <TextField
              name={'Hora'}
              type={'number'}
              placeholder={'0'}
              id={'hours'}
              onChange={handleUpdateTime}
            />
            <TextField
              min={0}
              name={'Minutos'}
              type={'number'}
              id={'minutes'}
              placeholder={'0'}
              max={59}
              onChange={handleUpdateTime}
            />
            <TextField
              min={0}
              name={'Segundos'}
              type={'number'}
              placeholder={'0'}
              id={'seconds'}
              max={59}
              onChange={handleUpdateTime}
            />
          </Box>
        </FormItem>

        <FormItem title="Quantidade de Resina">
          <Box>
            <TextField
              min={0}
              name={'Valor  (R$/L)'}
              type={'number'}
              placeholder={formatMoney(0)}
              id={'value'}
              onChange={handleUpdateRezin}
            />
            <TextField
              min={0}
              name={'Quantidade (ml)'}
              type={'number'}
              placeholder={'0 ml'}
              id={'ml'}
              onChange={handleUpdateRezin}
            />
          </Box>
        </FormItem>

        <FormItem title="Custo Máquina">
          <Box>
            <TextField
              min={0}
              name={'Maquinário (R$)'}
              type={'number'}
              placeholder={formatMoney(0)}
              id={'value'}
              defaultValue={machine.value}
              onChange={handleUpdateMachine}
            />
            <TextField
              min={0}
              name={'Vida útil (h)'}
              type={'number'}
              placeholder={'0'}
              id={'life'}
              defaultValue={machine.life}
              onChange={handleUpdateMachine}
            />
            <TextField
              min={0}
              name={'Consumo (W)'}
              type={'number'}
              placeholder={formatMoney(0)}
              id={'consume'}
              defaultValue={machine.consume}
              onChange={handleUpdateMachine}
            />
          </Box>
        </FormItem>

        <FormItem title="Custos Extras">
          <Box>
            <TextField
              min={0}
              name={'Limpeza e modelagem (R$)'}
              type={'number'}
              placeholder={'R$ 0,00'}
              onChange={event => setExtra(Number(event.target.value))}
            />
          </Box>
        </FormItem>

        <FormItem title="Energia Elétrica">
          <Box>
            <TextField
              min={0}
              name={'Custo por kwh (R$)'}
              type={'number'}
              placeholder={'0'}
              step={0.01}
              value={energie}
              onChange={event => setEnergie(Number(event.target.value))}
            />
          </Box>
        </FormItem>
      </div>

      <div className={'min-[350px]:px-5 px-3'}>
        <FormItem title="Resultados">
          <div
            className={
              'flex flex-row gap-x-8 gap-y-8 min-[600px]:justify-between max-[600px]:flex-col'
            }
          >
            <Box>
              <ResultField
                content={formatMoney(total.rezin)}
                name={'Total Resina'}
              />
              <ResultField
                content={formatMoney(total.energie)}
                name={'Total Energia'}
              />
              <ResultField
                content={formatMoney(total.liquid)}
                name={'Custo líquido'}
              />
            </Box>

            <Box className="gap-4">
              <TextField
                min={10}
                name={'Margem de lucro (%)'}
                type={'number'}
                placeholder={'0'}
                step="0.5"
                value={lucro.value}
                onChange={handleUpdateLucro}
              />
              <ResultField
                name={'Preço de venda (R$)'}
                content={formatMoney(price)}
              />
            </Box>
          </div>
        </FormItem>
      </div>
    </div>
  )
}
