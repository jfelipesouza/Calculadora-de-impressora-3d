import React from 'react'
import { FormItem } from '../FormItem'
import { TextField } from '../TextField'

export const Form: React.FC = () => {
  return (
    <div
      className={
        ' text-text border-borderPurple border-solid border-4 rounded-md  max-h-max h-max  '
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
          <div className="flex max-[1200px]:flex-wrap max-w-full gap-3">
            <TextField name={'Hora'} type={'number'} placeholder="00" />
            <TextField name={'Minutos'} type={'number'} placeholder="00" />
            <TextField name={'Segundos'} type={'number'} placeholder="00" />
          </div>
        </FormItem>
        <FormItem title="Quantidade de Resina">
          <div className="flex max-[1200px]:flex-wrap max-w-full gap-3">
            <TextField
              name={'Valor da resina (R$/L)'}
              type={'number'}
              placeholder="00"
            />
            <TextField
              name={'Quantidade gasta (ml)'}
              type={'number'}
              placeholder="00"
            />
          </div>
        </FormItem>
        <FormItem title="Custo Máquina">
          <div className="flex max-[1200px]:flex-wrap max-w-full gap-3">
            <TextField
              name={'Valor da impressora (R$)'}
              type={'number'}
              placeholder="00"
            />
            <TextField
              name={'Vida útil média (horas)'}
              type={'number'}
              placeholder="00"
            />
          </div>
        </FormItem>
        <FormItem title="Custos Extras">
          <div className="flex max-[1200px]:flex-wrap max-w-full gap-3">
            <TextField
              name={'Limpesa e modelagem (R$)'}
              type={'number'}
              placeholder="00"
            />
          </div>
        </FormItem>
        <FormItem title="Energia Elétrica">
          <div className="flex max-[1200px]:flex-wrap max-w-full gap-3">
            <TextField
              name={'Custo por hora (kwh)'}
              type={'number'}
              placeholder="00"
            />
          </div>
        </FormItem>
      </div>
    </div>
  )
}
