"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TeamCard from "@/components/common/cards/team-card";

function TeamSlider({ teamItems }) {
  return (
    <div className="!container">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={25}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className=" mySwiper"
      >
        {teamItems.map((item, i) => (
          <SwiperSlide  className='cardBox'  key={i}>
            <TeamCard
              key={i}
              img={item.image}
              name={item.name}
              link={'#'}
              position={item.positions.name}
              number={`${i+1}` < 10 ? `0${i+1}` : `${i+1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TeamSlider;
