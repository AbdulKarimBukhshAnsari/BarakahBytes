import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'

function App() {


  return (
    <>
    <Header />
    <Hero />
    <Outlet />  
    </>
  )
}

export default App
