import React from 'react'
import Link from "next/link";
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Image from "next/image";

function CardSectionBox({ img,title,desc,link,number}) {
  return (
    <div className="cardSectionBox grid grid-cols-12 lg:grid-cols-12 gap-[1.5rem] py-7 " >
      <div className=" pictureBox col-span-12 lg:col-span-6   " >
        <div className="relative w-[87%] lg:w-[85%] !h-full ">
            <span className="num opacity-50 text-[#ccc] text-start text-[3rem] lg:text-[7.5rem] font-MorabbaRegular" >{number}</span>
            <Image
              width={100}
              height={100}
              className="w-full h-full object-cover"
              src={img}
              alt={'img'}
              title={'img'}
              unoptimized
            />        
        </div>
      </div>
      <div className=" textBox col-span-12 lg:col-span-6 flex flex-col justify-center " >
        <h2 className="font-MorabbaRegular text-[1.3rem] lg:text-[1.5rem] text-c25 ">{title}</h2>
        <p className="text-[0.7rem] lg:text-[0.9rem] lg:leading-[2vw] font-IranYekanRegular text-c97 text-justify" >{desc}</p>
        <div className="flex items-center justify-end" > 
            <Link target="_blank" href={link}
                className="text-c25 bg-ce inline-flex items-center justify-center gap-2 text-base lg:text-lg font-MorabbaRegular  p-2 px-4 lg:p-2 lg:px-6"
                type="button"
            >
                <span> مطالعه بیشتر </span>
                <HiOutlineArrowLeft />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default CardSectionBox