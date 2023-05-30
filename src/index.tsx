import React from 'react'
import { Form } from './Components/Form'
import { Footer } from './Components/Footer'

export const App: React.FC = () => {
  return (
    <>
      <main
        className={
          'flex flex-1  min-h-screen max-w-full w-screen py-10 min-[350px]:px-5 px-2 bg-background '
        }
      >
        <Form />
      </main>
      <Footer />
    </>
  )
}
