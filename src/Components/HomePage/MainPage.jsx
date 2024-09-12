import React from 'react'

import Carousel from "./Carousel/Carousel"
import HighlightedProducts from "./HighlightedProducts/HighlightedProducts"
import Featured from "./Featured/Featured"
import Process from "./Process/Process"
import Footer from "./Footer/Footer"
import Popup from './Popup'
import Navbar from './NavBar/NavBar'


export default function MainPage() {
  return (
    <>
    <Popup />
        <Navbar />
    <Carousel/>
    {/* <AeroponicsFarming /> */}
    <HighlightedProducts />
    <Featured />
    <div className=' sm:invisible xl:visible md:visible'>
    <Process />
    </div>
    <Footer />
    </>
  )
}
