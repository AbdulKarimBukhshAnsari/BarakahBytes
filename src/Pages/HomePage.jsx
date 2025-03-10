import React from "react";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import HowToUse from "../Components/HowToUse/HowToUse";
import KeyFeatures from "../Components/KeyFeatures/KeyFeatures";
import StartNow from "../Components/StartNow/StartNow";
import { useState , useEffect } from "react";


export default function HomePage(){
    const [data , setData] = useState({});
    
        useEffect(()=>{
          setData(JSON.parse(localStorage.getItem("data") || '{}'))
        } , [])

    return (
        <>
        <Hero data = {data} setData = {setData}/>
        <KeyFeatures  />
        <HowToUse />
        <StartNow />
        <Footer />
        </>

    )
}