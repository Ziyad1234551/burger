import React from 'react'

export const About = () => {
  return (
    <div data-aos="fade-up" id="nava" className='w-full  md:flex-row nav gap-4 mb-[40px] transition-all py-[60px] h-auto lg:h-[60vh] body lg:flex-row flex-col md:gap-8 md:items-center flex justify-between lg:px-[100px] px-4'>
        <div>
            <h1 className='lg:text-5xl text-4xl poppin font-bold my-4'>About Us</h1>
            <p className='lg:w-[600px] md:w-[400px] w-auto my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusantium illo, veniam in repellendus eius cupiditate explicabo eveniet praesentium ducimus. Repellat iure porro quidem optio labore nam itaque pariatur nihil, temporibus non reiciendis qui laudantium rem? Saepe, officiis. Eligendi similique excepturi iusto sapiente eum!</p>

            <button className='bg-[#ffb703] w-[180px] py-4 rounded-lg text-white'>Read More</button>
        </div>
        <div>
            <img src="about.png" className='rounded-lg mt-[60px]' alt="" />
        </div>
    </div>
  )
}
