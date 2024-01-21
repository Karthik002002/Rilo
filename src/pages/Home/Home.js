import React from 'react'
import NavbarTop from '../../components/Homepage/Navbar'
import Mpc from '../../components/Homepage/Mpc'
import { ThemeProvider } from '../../Context/ThemeContext'
import Steps from '../../components/Estate/Steps'


export default function Home() {
  return (
    <>
    <ThemeProvider>
      <div className='home-container'>
        <NavbarTop />
        <Mpc />
        <Steps />
      </div>
      </ThemeProvider>
    </>
  )
}
