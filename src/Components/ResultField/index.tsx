import React from 'react'

type TextFieldProps = {
  name: string
  content: string | number
}

export const ResultField: React.FC<TextFieldProps> = ({ content, name }) => {
  return (
    <div className="flex flex-col flex-grow gap-2">
      <h3 className="text-text font-semibold max-mobileSM:text-formItemLabelMobileSM ">
        {name}
      </h3>
      <p
        className={
          'w-full bg-white border-2 border-solid border-borderGray rounded-md py-2 pl-3 '
        }
      >
        {content}
      </p>
    </div>
  )
}
