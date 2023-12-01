"use client"
import React from "react";
import { SlArrowLeft ,SlArrowRight} from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css/bundle';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Image from "next/image";
//            spaceBetween={30}    slidesPerView={'auto'} centeredSlides={true}
// import required modules
import { Pagination, Navigation ,EffectCoverflow} from "swiper/modules";

function ThreeDimensionalSlider({gallery}) {
  console.log('gallery ::',gallery)
  return (
    <>
      <Swiper
        slidesPerView={2}
        centeredSlides
        // slidesPerView='auto'

        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 1,
          depth: 100,
          modifier: 1,
        }}
        grabCursor={true}
        
        pagination={{
          clickable: true, 
        }}
        navigation={{
          nextEl:".next_threeD_button",
          prevEl:".prev_threeD_button"
        }}
        modules={[EffectCoverflow,Pagination, Navigation]}
        className="mySwiper threeD"
      >
        {
          gallery?.gallery?.map((item,i)=>(

            <SwiperSlide
            key={i}
            //  style={{
            //     backgroundImage:
            //       "url(https://swiperjs.com/demos/images/nature-1.jpg)"
            //   }}
            >
                <Image
                width={100}
                height={100}
                className="w-full h-full object-cover"
                src={item.image}
                //  src={'/pi.svg'}
                alt={'img'}
                title={'img'}
                unoptimized
                />
            </SwiperSlide>
          ))
        }
       
        <div className=" z-50 absolute top-[45%] left-5 right-5 flex items-center justify-between gap-5">
          <div className="prev_threeD_button flex items-center justify-center w-5 h-5 lg:w-10 lg:h-10 rounded-full bg-[#0000004D] bg-opacity-20 cursor-pointer text-cf" ><SlArrowRight className=" lg:text-xl" /></div>
          <div className="next_threeD_button flex items-center justify-center w-5 h-5 lg:w-10 lg:h-10 rounded-full bg-[#0000004D] bg-opacity-20 cursor-pointer text-cf" ><SlArrowLeft className=" lg:text-xl" /></div>
        </div>
      </Swiper>
    </>
  );
}

export default ThreeDimensionalSlider;
