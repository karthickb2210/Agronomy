import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from '../Components/HomePage/MainPage'
import Shop from '../Components/Shop/Shop.jsx'
import Farm from '../Components/Farm/Farm.jsx'
import CheckOut from '../Components/CheckoutPage/CheckOut.jsx'
import RentTowerPage from '../Components/TowerRent/RentTowerPage.jsx'
export default function Layout() {
  return (
    <>
        <BrowserRouter>
             
            <Routes>
                <Route path='/' element={<MainPage />}></Route>
                <Route path='/store' element={<Shop />}></Route>
                <Route path='/farm' element={<Farm />}></Route>
                <Route path='/cart/checkout' element={<CheckOut />}></Route>
                <Route path='/towerRent' element={<RentTowerPage />}></Route>
            </Routes>
            
        </BrowserRouter>
        <footer className="py-2 bg-gray-800 text-white text-center">
        <p>© 2024 Your Aeroponics Farm - All rights reserved</p>
      </footer>
    </>
  )
}
