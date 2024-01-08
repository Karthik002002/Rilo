import React from 'react'
import NavbarTop from '../../components/navbar/Navbar'
import Mpc from '../../components/Mainpage Contents/Mpc'

export default function Home() {
  return (
    <>
      <div className='home-container'>
        <NavbarTop />
        <Mpc />
      </div>
    </>
  )
}
