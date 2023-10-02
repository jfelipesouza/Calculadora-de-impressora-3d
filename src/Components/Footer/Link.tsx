import React from 'react'

type FooterLinkProps = {
  link: string
  title: string
}

export const FooterLink: React.FC<FooterLinkProps> = ({ link, title }) => {
  return (
    <a
      href={link}
      className="text-sky-50  hover:cursor-pointer hover:underline font-black "
      target="_blank"
    >
      {title}
    </a>
  )
}
