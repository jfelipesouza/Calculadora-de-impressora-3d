import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-borderPurple flex flex-1 items-center justify-center py-5 px-4">
      <span className="text-white text-lg font-normal ">
        Desenvolvido por {''}
        <a className="text-sky-50  hover:cursor-pointer hover:underline font-black ">
          Felipe Souza
        </a>
        {' & '}
        <a className="text-sky-50  hover:cursor-pointer hover:underline font-black ">
          Livia Martins
        </a>
      </span>
    </footer>
  )
}
