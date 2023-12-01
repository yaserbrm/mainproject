"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlArrowLeft ,SlArrowRight} from "react-icons/sl";
// import './styles.css';
 
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Link from 'next/link';

function HeaderSlider({sliderDatas}) {
  // const swiper = useSwiper(); /01.jpg  /lhs1.jpg /s1.jpg
  // backgroundImage: `linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)),url(${item.bgImg})`,
  // const sliderItem = [
  //   {
  //     id: 1,
  //     bgImg: "/01.jpg",
  //     title: "همین امروز ، مسیر آینده را هموار میسازیم1",
  //     btnSubject: "با هم، یک پروژه را شروع کنیم",
  //   },
  //   {
  //     id: 2,
  //     bgImg: "/02.jpg",
  //     title: "همین امروز ، مسیر آینده را هموار میسازیم2",
  //     btnSubject: "با هم، یک پروژه را شروع کنیم",
  //   },
  //   {
  //     id: 3,
  //     bgImg: "/03.jpg",
  //     title: "همین امروز ، مسیر آینده را هموار میسازیم3",
  //     btnSubject: "با هم، یک پروژه را شروع کنیم",
  //   }
    
  // ];

  return (
    <> 
      <Swiper
        // cssMode={true}
        navigation={{
          nextEl:".next_header_button",
          prevEl:".prev_header_button"
        }}
        pagination={{
          clickable: true,
        }}
        // mousewheel={true}
        // keyboard={true}
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper relative landingHeaderSlider"
      >
        {sliderDatas?.map((item, i) => (
          <SwiperSlide
            key={i}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)),url(${item.file})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="!bg-center !bg-cover !bg-no-repeat lg:px-10"
          >

            <div className="w-full h-full container !gap-8 !flex !flex-col !justify-center !items-start">
              <h3 className="text-cf text-2xl lg:text-4xl font-MorabbaMedium">
                {item.title}
              </h3>
              <Link
                href="/"
                className="text-cf bg-cRed text-base lg:text-xl font-MorabbaRegular border-[1px] border-cRed p-2 px-4 lg:p-2 lg:px-6"
                // type="button"
              >
                {/* {item.link} */}
                با هم، یک پروژه را شروع کنیم
                {/* {item.btnSubject} */}
              </Link>
            </div>
          </SwiperSlide>
        ))}
            <div className=" z-50 absolute top-[45%] left-5 right-5 flex items-center justify-between gap-5">
              <div className="prev_header_button flex items-center justify-center w-10 h-10 lg:w-16 lg:h-16 rounded-full hover:bg-[#0000004D] bg-opacity-20 cursor-pointer text-cf" ><SlArrowRight className=" lg:text-2xl" /></div>
              <div className="next_header_button flex items-center justify-center w-10 h-10 lg:w-16 lg:h-16 rounded-full hover:bg-[#0000004D] bg-opacity-20 cursor-pointer text-cf" ><SlArrowLeft className=" lg:text-2xl" /></div>
            </div>
      </Swiper>
    </>
  );
}


export default HeaderSlider;
