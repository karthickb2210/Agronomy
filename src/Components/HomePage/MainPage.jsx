import React from 'react'
import Navbar from "./NavBar/Navbar"
import Carousel from "./Carousel/Carousel"
import HighlightedProducts from "./HighlightedProducts/HighlightedProducts"
import Featured from "./Featured/Featured"
import Process from "./Process/Process"
import Footer from "./Footer/Footer"
import AeroponicsFarming from '../Aeroponics/AeroponicsFarming'


export default function MainPage() {
  return (
    <>
        <Navbar />
    <Carousel/>
    <AeroponicsFarming />
    <HighlightedProducts />
    <Featured />
    
    <Process />
    
    <Footer />
    </>
  )
}
