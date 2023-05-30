import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-borderPurple flex flex-1 items-center justify-center py-5 px-4">
      <span className="text-white text-lg font-normal ">
        Desenvolvido por {''}
        <a className="text-white  hover:cursor-pointer hover:underline font-semibold ">
          Felipe Souza
        </a>
        {' & '}
        <a className="text-white  hover:cursor-pointer hover:underline font-semibold ">
          Livia Martins
        </a>
      </span>
    </footer>
  )
}
