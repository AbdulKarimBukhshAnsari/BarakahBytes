import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import KeyFeatures from './Components/KeyFeatures/KeyFeatures'

function App() {


  return (
    <>
    <Header />
    <Hero />
    <KeyFeatures />
    <Outlet />  
    </>
  )
}

export default App
