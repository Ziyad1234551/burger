import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';

import { Testimonial } from './components/Testimonial';
function App() {
  useEffect(()=>{
    AOS.init({
      delay:100,
      duration:1000,
      easing:"ease-in-out",
      offset:500
    });
  })
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Menu/>
    <Testimonial/>
    <Footer/>
   </div>
  );
}

export default App;
