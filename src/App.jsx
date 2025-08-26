import './App.css';
import Navbar from "./components/navbar"
import HeroCarousel from './components/heroCarousel'; 
import { Theme } from '@radix-ui/themes';


function App() {

  return (
    <>
      <Theme>
        <Navbar/>
        <HeroCarousel/>
      </Theme>
      
    </>
  )
}

export default App
