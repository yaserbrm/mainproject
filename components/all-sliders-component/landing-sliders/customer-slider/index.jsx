"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import required modules
// import { Pagination } from 'swiper/modules';

function CustomerSlider({items}) {
   
  return (
    <>
      <Swiper 
        slidesPerView={3.5}
        breakpoints={{
          640: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 5.5,
            spaceBetween: 25,
          },
        }}
        spaceBetween={20}
    
        modules={[Navigation]}
        className="  !select-none mySwiper"
      >
        {
          items.map((item,i)=>(
            <SwiperSlide key={i} >
                <div key={i} className="flex items-center lg:justify-start justify-center"><Image unoptimized width={100} height={100} alt={''} src={item.img}  /></div>
                {/* <CardBox imgClasses=" h-[257px]" number={item.number} src={item.img} title={item.title} link={`service/${item.id}/${item.title}`} classes="h-full " /> */}
            </SwiperSlide>
          ))
        }

      </Swiper>
    </>
  )
}

export default CustomerSlider