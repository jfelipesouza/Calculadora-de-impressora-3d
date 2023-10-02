import React from 'react'
import { FooterLink } from './Link'
import { informationsLinks } from '../../Services/constants'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-borderPurple flex flex-1 items-center justify-center py-5 px-4">
      <span className="text-white text-lg font-normal ">
        Desenvolvido por {''}
        {informationsLinks.map((item, index) => {
          return (
            <>
              <FooterLink link={item.link} title={item.title} key={index} />
              {index === 0 && ' & '}
            </>
          )
        })}
      </span>
    </footer>
  )
}
