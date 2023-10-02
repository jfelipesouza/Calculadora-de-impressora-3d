import React from 'react'

type DisplayProps = {
  name: string
  value: number | string
}

export const Display: React.FC<DisplayProps> = ({ name, value }) => {
  return (
    <div className="flex flex-col flex-grow gap-2">
      <h3 className="text-text font-semibold max-mobileSM:text-formItemLabelMobileSM ">
        {name}
      </h3>
      <div
        className={
          'w-full bg-white border-2 border-solid border-borderGray rounded-md py-2 pl-3 '
        }
      >
        {value}
      </div>
    </div>
  )
}
