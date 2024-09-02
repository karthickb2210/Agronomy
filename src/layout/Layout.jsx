import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from '../Components/HomePage/MainPage'
import Shop from '../Components/Shop/Shop.jsx'
import VisitUs from '../Components/Farm/VisitUs.jsx'
import Farm from '../Components/Farm/Farm.jsx'
import CheckOut from '../Components/CheckoutPage/CheckOut.jsx'
export default function Layout() {
  return (
    <>
        <BrowserRouter>
             
            <Routes>
                <Route path='/' element={<MainPage />}></Route>
                <Route path='/store' element={<Shop />}></Route>
                <Route path='/farm' element={<Farm />}></Route>
                <Route path='/cart/checkout' element={<CheckOut />}></Route>
            </Routes>
            
        </BrowserRouter>
    </>
  )
}
