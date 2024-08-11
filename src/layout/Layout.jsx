import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from '../Components/HomePage/MainPage'
export default function Layout() {
  return (
    <>
        <BrowserRouter>
             
            <Routes>
                <Route path='/' element={<MainPage />}></Route>
            </Routes>
            
        </BrowserRouter>
    </>
  )
}
