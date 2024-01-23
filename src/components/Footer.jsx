import React from 'react'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <div data-aos="fade-down" className='w-full lg:mt-[60px] absolute bg-black py-10 grid grid-cols-1 lg:grid-cols-4 gap-[40px] poppin px-4 lg:px-[100px] h-auto lg:h-[60vh] text-white'>
        <div>
            <h1 className='text-primary font-bold text-4xl '>Get In Touch</h1>
            <p className="text-white my-3 leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor oluptates, sunt obcaecati quisquam nisi repellendus eum sed quos minus omnis rem asperiores magni? Quos, nihil.</p>
            <div className="flex my-2 text-4xl gap-2 text-primary">
                <FaInstagram/>
                <FaGithub/>
                <FaFacebook/>
            </div>


        </div>
            <div>
            <h1 className='text-primary font-bold text-2xl '>Important Links</h1>
            <p className='text-white my-2 text-lg'>Home</p>
            <p className='text-white my-2 text-lg'>Blog</p>
            <p className='text-white my-2 text-lg'>About</p>
            <p className='text-white my-2 text-lg'>Contact</p>


            </div>
            <div>
            <h1 className='text-primary font-bold text-2xl '>Important Links</h1>
            <p className='text-white my-2 text-lg'>Home</p>
            <p className='text-white my-2 text-lg'>Blog</p>
            <p className='text-white my-2 text-lg'>About</p>
            <p className='text-white my-2 text-lg'>Contact</p>


            </div>
            <div>
            <h1 className='text-primary font-bold text-2xl '>Important Links</h1>
            <p className='text-white my-2 text-lg'>Home</p>
            <p className='text-white my-2 text-lg'>Blog</p>
            <p className='text-white my-2 text-lg'>About</p>
            <p className='text-white my-2 text-lg'>Contact</p>


            </div>
    </div>
  )
}
