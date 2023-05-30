import React from 'react'

type FormItem = {
  title: string
  children?: React.ReactNode
}

export const FormItem: React.FC<FormItem> = ({ title, children }) => {
  return (
    <div className="flex flex-1 self-start flex-col w-auto  max-mobileSM:min-h-30 min-h-40 border-borderGray border-2 rounded-md py-4 min-[350px]:px-5 px-2">
      <h3 className="text-text font-bold max-mobileSM:text-formItemTitleMobileSM min-[350px]:text-xl ">
        {title}
      </h3>
      <div className=" flex w-full my-5">{children}</div>
    </div>
  )
}
