import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLeft } from 'react-icons/hi';

function CardBox({src,title,classes,number,link,imgClasses}) {
  return (
    <div className={` relative flex flex-col items-start justify-start w-full gap-2 ${classes}`}  >
        <div className="p-0"><span className="upNum opacity-50 text-[#ccc] text-start text-2xl lg:text-3xl font-MorabbaRegular ">{number}</span></div>
        <div className={`productImg w-full ${imgClasses} `}  >
            <Image
             width={100}
             height={100}
             className="w-full h-full object-cover"
             src={src}
            //  src={'/pi.svg'}
             alt={'img'}
             title={'img'}
             unoptimized
            />
        </div>
        <div className="flex items-center justify-between gap-2 w-full">
          <Link target="_blank" href={link} >
              <h4 className="text-c25 text-start text-sm lg:text-lg font-MorabbaMedium  " >
              {title}
              </h4>
          </Link>
          <span className="downNum opacity-50 text-[#ccc] text-start text-2xl lg:text-3xl font-MorabbaRegular ">{number}</span>
        
        </div>

        
        {/* <div className=" " ></div> */}
    </div>
  )
}

export default CardBox