import './App.css'
import Carousel from './Components/Carousel/Carousel'
import Featured from './Components/Featured/Featured'
import Footer from './Components/Footer/Footer'
import HighlightedProducts from './Components/HighlightedProducts/HighlightedProducts'
import Navbar from './Components/NavBar/Navbar'
import Process from './Components/Process/Process'

function App() {
  
  return (
    <>
      <Navbar />
    <Carousel/>
    <HighlightedProducts />
    <Featured />
    
    <Process />
    
    <Footer />
    </>
  )
}

export default App
