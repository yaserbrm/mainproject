"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '@/components/common/cards/product-card';

// import required modules
// import { Pagination } from 'swiper/modules';
// import CardBox from '@/components/common/cards/card-box';


function Slider({newLearns}) {
     
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
            spaceBetween: 30,
          },
        }}
        spaceBetween={15}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className=" mySwiper"
      >
        {
          newLearns.map((item,i)=>(
              <SwiperSlide key={i} className=' sliderProductCard' >
                  <ProductCard key={i} category={item.category.name} src={item.image} title={item.subject} link={`/weblog/${item.id}/${item.subject}`}  /> 
              </SwiperSlide>
          ))
        }

      </Swiper>
    </>
  ) 
}

export default Slider


{/* <Swiper
slidesPerView={1.5}
// breakpoints={{
//   640: {
//     slidesPerView: 3.5,
//     spaceBetween: 20,
//   },
//   768: {
//     slidesPerView: 4.5,
//     spaceBetween: 25,
//   },
//   1024: {
//     slidesPerView: 5.5,
//     spaceBetween: 30,
//   },
// }}
spaceBetween={30}
// pagination={{
//   clickable: true,
// }}
// modules={[Pagination]}
className=" mySwiper !h-[571px]"
> 
{
  items.map((item,i)=>(
      <SwiperSlide key={i} className='!h-full border-2' >

          <ProductCard key={i} category={item.category} src={item.img} title={item.title} link={item.link}  />
      </SwiperSlide>
  ))
}
</Swiper> */}