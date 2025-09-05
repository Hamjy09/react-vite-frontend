import { useState } from 'react';
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar"
import HeroCarousel from './components/heroCarousel';
import Benefit from "./components/benifit"
import Recomend from './components/recomend';
import TopRated from './components/topRated' ;
import SpecialOffer from './components/specialOffer';
import NewProducts  from './components/newProducts';
import ExclusiveProducts from './components/exclusiveProducts';
import WhyUs from './components/whyUs';
import OurServices from './components/ourServices';
import Footer from './components/footer';
import About from './components/about';
import Newsletter from './components/Newsletter';
import VideoSection from './components/Videosection';




function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='relative'>
            {/* Sidebar component */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      
        <Navbar openNav={() => setSidebarOpen(true)} />
   
         
        <HeroCarousel/>
        <Benefit/>
        <div className='flex  flex-col md:flex-row  md:items-center justify-between  '>
          <Recomend/>
          <Recomend/>
        </div>
        <TopRated/>
        <SpecialOffer/>
       
        <NewProducts/>
        {/* < ExclusiveProducts/> */}
        < VideoSection/>
        <WhyUs/>
        <OurServices />
        <About/>
        <Newsletter/>





        <Footer/>
      
       
       
       
        
      
    </div>
  )
}

export default App
