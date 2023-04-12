import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import MenteeCard from './menteeCard';

function MenteeSlide() {
    
    const {data, loading, error} = useFetch("https://randomuser.me/api/?results=8");

    if (loading) console.log(loading);
    if (error) console.log(error);
    console.log(data)
    const mentor = data;
  return (
    <div className='flex flex-col justify-center bg-none pt-10 md:pt-0'>
        <div className='home-workshop-intro mb-4'>
                <h2 className='text-2xl md:text-4xl font-bold text-[#e0b0ff]'>Experienced Engineers and Managers offer mentorship support to women in our workshop </h2>
                <h4 className='text-2xl text-black'>Mentors of the month:</h4>
        </div>

        <div className='eve-slide pt-18'> 
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    mentor.map((item) => (
                        <SwiperSlide key={item.id} className='swiper-slide'>
                            <MenteeCard mentor = {item} />
                        </SwiperSlide>
                    ))
                }
                
                
            </Swiper>
        </div>
    </div>
    
  )
}

export default MenteeSlide