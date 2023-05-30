import React from 'react'

type FormItem = {
  title: string
  children?: React.ReactNode
}

export const FormItem: React.FC<FormItem> = ({ title, children }) => {
  return (
    <div className="flex flex-col w-auto  max-mobileSM:h-30 h-40 border-borderGray border-2 rounded-md py-4 min-[350px]:px-5 px-2">
      <h3 className="text-text font-bold max-mobileSM:text-formItemTitleMobileSM min-[350px]:text-xl ">
        {title}
      </h3>
      <div className=" flex flex-1 w-full justify-between mt-5">{children}</div>
    </div>
  )
}
