import React from 'react'

export const Hero = () => {
  return (
    <div data-aos="fade-right" className='w-full md:gap-6 md:flex-row h-auto lg:flex-row flex-col lg:h-[60vh] transition-all bg-[#ffb703] px-7 lg:px-[100px] flex justify-between py-[30px]'>
        <div>
            <h1 className='lg:text-6xl text-3xl poppin font-bold text-white'>Eat Healthy Burger</h1>
            <p className="text-white w-auto md:w-[400px] lg:w-[700px] my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat deleniti eius itaque delectus tenetur quos tempora? Quia aliquam sed, hic ullam itaque accusantium accusamus laudantium obcaecati dolorem deserunt similique veniam nam iure consequatur a earum natus ipsam temporibus voluptas atque ipsum beatae cumque laboriosam.</p>

            <button className="my-4 bg-white w-[160px] py-4  border-[#ffb703] rounded-lg text-[#ffb703]">Read More</button>
        </div>
        <div>
            <img src="hero.png" className='w-[440px] object-cover' alt="" />
        </div>
    </div>
  )
}
