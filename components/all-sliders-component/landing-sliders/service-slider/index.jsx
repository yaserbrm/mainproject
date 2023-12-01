"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import required modules
// import { Pagination } from 'swiper/modules';
import CardBox from '@/components/common/cards/card-box';
 

function ServiceSlider({project}) {
    const items=[
        {id:1,number:"01",img:'/pi.svg',title:'1 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
        {id:2,number:"02",img:'/pi.svg',title:'2 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
        {id:3,number:"03",img:'/pi.svg',title:'3 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
        {id:4,number:"04",img:'/pi.svg',title:'4 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
        {id:5,number:"05",img:'/pi.svg',title:'5 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
        {id:6,number:"06",img:'/pi.svg',title:'6 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
        {id:7,number:"07",img:'/pi.svg',title:'7 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
        {id:8,number:"08",img:'/pi.svg',title:'8 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
        {id:9,number:"09",img:'/pi.svg',title:'9 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
        {id:10,number:"10",img:'/pi.svg',title:'10 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
        {id:11,number:"11",img:'/pi.svg',title:'11 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
        {id:12,number:"12",img:'/pi.svg',title:'12 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
    ]
  return (
    <>
      <Swiper 
        slidesPerView={1.5}
        breakpoints={{
          640: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 5.5,
            spaceBetween: 25,
          },
        }}
        spaceBetween={20}
        navigation={{
          nextEl:".next_service_button",
          prevEl:".prev_service_button"
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation]}
        className="serviceSlider  !select-none mySwiper"
      >
        {
          project?.map((item,i)=>(
            <SwiperSlide key={i} className='cardBox ' ><CardBox imgClasses=" h-[257px]" number={`${i+1}` < 10 ? `0${i+1}` : `${i+1}`} src={item.image} title={item.name} link={`service/${item.id}/${item.name}`} classes="h-full " /></SwiperSlide>
          ))
        }

      </Swiper>
    </>
  )
}

export default ServiceSlider