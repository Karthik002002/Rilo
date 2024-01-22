import React from 'react'
import NavbarTop from '../../components/Homepage/Navbar'
import Mpc from '../../components/Homepage/Mpc'
import { ThemeProvider } from '../../Context/ThemeContext'
import Steps from '../../components/Estate/Steps'
import Project from '../../components/Homepage/Project'


export default function Home() {
  return (
    <>
    <ThemeProvider>
      <div className='home-container'>
        <NavbarTop />
        <Mpc />
        <Steps />
        <Project />
      </div>
      </ThemeProvider>
    </>
  )
}
