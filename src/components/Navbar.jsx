import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
    const [nav,setNav] = useState(false)
    const [light,setLight]= useState(false)
    const body = document.documentElement;
    
  
  return (
    <div id="nav" data-aos="fade-up" className='w-full h-[100px] nav text-black flex shadow-xl justify-between items-center px-8 lg:px-[80px]'>
        <div className='flex gap-2 items-center'>
            <img src="logo.png"  className='lg:w-[60px]  w-[45px] object-cover' alt="" />
            <h1 className="poppin text-yellow-400 text-2xl lg:text-4xl font-bold">Burger</h1>

        </div>

        <div className='lg:flex md:flex hidden gap-4 text-xl font-semibold nunito'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/about">About </NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
         

        </div>
        <div className='text-5xl my-4 mr-2 gap-2 items-center  cursor-pointer lg:hidden md:hidden flex'>
            <IoMenu onClick={()=>setNav(!nav)}/>
          
        </div>
        {nav?
         <div className='md:hidden transition-all flex absolute top-[100px] h-[60vh] text-2xl flex-col w-full bg-white text-primary items-center z-20 left-0   lg:hidden gap-8 font-semibold nunito'>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/menu">Menu</NavLink>
         <NavLink to="/about">About </NavLink>
         <NavLink to="/contact">Contact Us</NavLink>


     </div>
        
        :
        <div className='md:hidden flex absolute transition-all top-[100px] h-[0vh] overflow-hidden text-2xl flex-col w-full bg-white text-primary items-center z-20 left-0   lg:hidden gap-8 font-semibold nunito'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/contact">Contact Us</NavLink>


    </div>}
       
    </div>
  )
}
