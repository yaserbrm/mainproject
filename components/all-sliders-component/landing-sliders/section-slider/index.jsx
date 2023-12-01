
"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { SlArrowLeft ,SlArrowRight} from "react-icons/sl";
import { Navigation, Pagination } from "swiper/modules";
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function SectionSlider({data}) {
     
  //  const area = useTranslations("Area");
  const [activeImageIndex, setActiveImageIndex] = useState(1);
  const sliderItems = [
    {
      id: 1,
      title: "app",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      img: "/p1.png",
    },
    {
      id: 2,
      title: "banner",
      desc: "Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.",
      img: "/p1.png",
    },
    {
      id: 3,
      title: "graphic",
      desc: "In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      img: "/p2.png",
    },
  ];


  return (
    <div className="container w-full    grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 relative mb-20">
    

      <div className=" relative  ">
        
          <Swiper
            onSlideChange={(swiper) => setActiveImageIndex(swiper.realIndex)}
            // dir="rtl"
            loop={true}
            // navigation={{
            //   prevEl: navigationPrevRef.current,
            //   nextEl: navigationNextRef.current,
            // }}
            navigation={{
              nextEl:".next_section_button",
              prevEl:".prev_section_button"
            }}
            pagination={{
              clickable: true,
            }}
            // mousewheel={true}
            // keyboard={true}
            modules={[Navigation, Pagination]}
            className="sectionSlider !select-none mySwiper"
          >
            {data.slice(0,5).map((item, i) => (
              <SwiperSlide key={i} className=" !h-[385px]">
                <div className="relative !h-full ">
                  <Image
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={'img'}
                    title={'img'}
                    unoptimized
                  />
                  
                </div>
              </SwiperSlide>
            ))}

            <div className=" z-50 absolute top-[45%] left-5 right-5 flex items-center justify-between gap-5">
              <div className="prev_section_button flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#0000004D] bg-opacity-20 cursor-pointer text-cf" ><SlArrowRight className=" lg:text-xl" /></div>
              <div className="next_section_button flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#0000004D] bg-opacity-20 cursor-pointer text-cf" ><SlArrowLeft className=" lg:text-xl" /></div>
            </div>
          </Swiper>
 
      </div>

      <div className=" transition-all duration-150 ease-linear flex flex-col  justify-center  gap-3 lg:gap-5  relative ">
        
        
          <h2 className=" transition-all duration-150 ease-linear leading-8 lg:leading-10 font-MorabbaRegular text-lg lg:text-[2.2vw] text-c25 ">
            {data[activeImageIndex].subject}
            {/* پروژه شماره یک */}
          </h2>
          <p className=" transition-all duration-150 ease-linear text-sm lg:text-[1.2vw] lg:leading-[2vw] font-IranYekanRegular text-c97 text-justify">
            {data[activeImageIndex].summery}
            {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،  */}
          </p>
          <div className=" transition-all duration-150 ease-linear flex items-center justify-end" > 
        
            <Link href={`/project/${data[activeImageIndex].id}/${data[activeImageIndex].subject}`}
                className="text-c25 bg-ce inline-flex items-center justify-center gap-2 text-base lg:text-lg font-MorabbaRegular  p-2 px-4 lg:p-2 lg:px-6"
                type="button"
              >
                <span> مطالعه بیشتر </span>
                <HiOutlineArrowLeft />
            </Link>
          </div>

      </div>
      
    </div>
  ); 
}

export default SectionSlider;