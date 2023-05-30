import React from 'react'

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
}

const TextField: React.FC<TextFieldProps> = ({ name, ...props }) => {
  return (
    <div className="flex flex-col flex-grow gap-2">
      <h3 className="text-text font-semibold max-mobileSM:text-formItemLabelMobileSM ">
        {name}
      </h3>
      <input
        {...props}
        className={
          'w-full bg-white border-2 border-solid border-borderGray rounded-md py-2 pl-3 '
        }
      />
    </div>
  )
}

export { TextField }
