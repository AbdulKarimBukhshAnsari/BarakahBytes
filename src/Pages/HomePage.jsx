import React from "react";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import HowToUse from "../Components/HowToUse/HowToUse";
import KeyFeatures from "../Components/KeyFeatures/KeyFeatures";
import StartNow from "../Components/StartNow/StartNow";


export default function HomePage(){

    return (
        <>
        <Hero />
        <KeyFeatures />
        <HowToUse />
        <StartNow />
        <Footer />
        </>

    )
}