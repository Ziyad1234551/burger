import React from 'react';
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
export const Testimonial = () => {
    const testimonials = [
        {
            image:"1.png",
            text:"Hands down, the best burgers in town! Every bite is a flavor explosion, and the quality of the ingredients is unmatched. My taste buds are still thanking me!",
            name:"jennifer"
        },
        {
            image:"2.png",
            text:"I'm a self-proclaimed burger enthusiast, and this place exceeded all my expectations. The burgers are a perfect blend of juiciness and flavor, and the variety on the menu ensures there's something for everyone. A definite must-try!",
            name:"jonathan"
        },
        {
            image:"3.png",
            text:"I've never been more impressed with a burger joint. The burgers here are not just a meal; they're an experience. From the first bite to the last, I was in burger heaven. The staff is friendly, the atmosphere is inviting – it's a burger lover's paradise!",
            name:"michella"
        },
    ]
  return (
    <div data-aos="fade-left" className='my-[150px]  w-full px-7 lg:px-[100px]'>
        <h1 className='lg:text-5xl text-2xl  lg:my-8 md:my-0 md:text-4xl dm-display text-center font-bold'>What Our Client Say About Us</h1>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        modules={[Autoplay]}
        className="mySwiper w-full md:h-[45vh] h-[30vh] my-[100px] flex justify-center items-center"
      >
        {testimonials.map((testi)=>{
            return(

                <SwiperSlide>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className="w-[600px] rounded-md py-6 h-[400px] lg:h-[300px] bg-primary px-5 ">
                            <img src={testi.image} className='w-[80px] h-[80px] mx-auto rounded-full object-cover' alt="" />
                            <h1 className="text-white text-center font-bold text-2xl capitalize my-3 poppin ">{testi.name}</h1>
                            <p className='text-center text-lg dm-display text-white'>
                                {testi.text}
                            </p>
                            <div className="flex gap-3 justify-center text-red-900 my-2">
                                <FaStar/>
                                <FaStar/>                                <FaStar/>
                                <FaStar/>

                                <FaStar/>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
       
      </Swiper>
    </div>
  )
}
