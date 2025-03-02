import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import KeyFeatures from './Components/KeyFeatures/KeyFeatures'
import HowToUse from './Components/HowToUse/HowToUse'
import StartNow from './Components/StartNow/StartNow'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
    <Header />
    <Hero />
    <KeyFeatures />
    <Outlet /> 
    <HowToUse /> 
    <StartNow />
    <Footer />
    </>
  )
}

export default App
