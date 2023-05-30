import React from 'react'
import { FormItem } from '../FormItem'

export const Form: React.FC = () => {
  return (
    <div
      className={
        'grid max-[700px]:grid-cols-1 grid-cols-2 auto-rows-max w-full y-full text-text border-borderPurple border-solid border-2 rounded-md min-[350px]:px-5 px-3 py-10 gap-x-10 gap-y-10 items-center '
      }
    >
      <FormItem title="Tempo de Impressão">
        <div className="flex flex-1 max-w-full gap-3">
          <div className="flex flex-col flex-1 gap-2">
            <h3 className="text-text font-semibold max-mobileSM:text-formItemLabelMobileSM ">
              Hora
            </h3>
            <input
              type="number"
              className="w-full bg-white border-2 border-solid border-borderGray rounded-md py-2 pl-3 "
            />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <h3 className="text-text font-semibold max-mobileSM:text-formItemLabelMobileSM ">
              Minuto
            </h3>
            <input
              type="number"
              className="w-full bg-white border-2 border-solid border-borderGray rounded-md py-2 pl-3 "
            />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <h3 className="text-text font-semibold max-mobileSM:text-formItemLabelMobileSM ">
              Segundos
            </h3>
            <input
              type="number"
              className="w-full bg-white border-2 border-solid border-borderGray rounded-md py-2 pl-3 "
            />
          </div>
        </div>
      </FormItem>
      <FormItem title="Quantidade de Resina"></FormItem>
      <FormItem title="Custos Extras"></FormItem>
      <FormItem title="Energia Elétrica"></FormItem>
      <FormItem title="Custo Máquina"></FormItem>
    </div>
  )
}
