import React from 'react'

export const Menu = () => {
    const burgers = [
        {
        image:"pngwing.png",
        name:"chicken big burger",
        price:4000
    },
    {
        image:"pngwing4.png",
        name:"lamb burger",
        price:2000
    },
    {
        image:"pngwing5.png",
        name:"beef spicy burger",
        price:2000
    },
    {
        image:"pngwing6.png",
        name:"beef burger",
        price:2000
    },
    {
        image:"pngwing7.png",
        name:"chicken spicy burger",
        price:2000
    },
    {
        image:"burger.png",
        name:"lamb spicy burger",
        price:2000
    },
    {
        image:"pngwing5.png",
        name:"beef spicy burger",
        price:2000
    },
    {
        image:"pngwing6.png",
        name:"beef burger",
        price:2000
    },

]
  return (
    <div data-aos="zoom-in" name="menu" className='w-full px-6 lg:px-[100px] mx-auto lg:my-[200px]'>
        <h1 className='lg:text-6xl text-4xl font-bold dm-display  text-center'>Our Menu</h1>

        <div className="lg:grid-cols-4 md:grid-cols-2 grid-cols-1  grid my-10 gap-10">
            {burgers.map((burger)=>{
                return(
                    <div className='mx-auto bg-white px-6 py-4 shadow-xl rounded-md w-[300px] h-[340px]'>
                        <img src={burger.image} className='w-[180px] hover:scale-105 transition-all cursor-pointer h-[140px] mx-auto object-cover' alt="" />
                        <h1 className='text-center my-4 font-bold text-xl text-red-500 poppin'>{burger.name}</h1>
                        <p className='dm-display text-xl text-center font-semibold'>Price : ${burger.price}</p>
                        <button className='w-full bg-red-500 my-3 transition-all hover:shadow-lg cursor-pointer text-white rounded-lg py-4 poppin font-bold'>Buy Now</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
