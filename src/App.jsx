import { useState , useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'




function App() {
  const [data , setData] = useState({});
  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("data") || '{}'))
  } , [])
  return (
    <>
    <Header data = {data}  setData = {setData} />
    <Outlet /> 
    </>
  )
}

export default App
