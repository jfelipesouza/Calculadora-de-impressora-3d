import React from 'react'

type BoxProps = {
  children: React.ReactNode
  className?: string
}
export const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={`flex max-[1200px]:flex-wrap max-w-full gap-3 ${className}`}
    >
      {children}
    </div>
  )
}
