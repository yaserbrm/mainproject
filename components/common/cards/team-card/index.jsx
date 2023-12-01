import React from 'react'
import Image from "next/image";
import Link from "next/link";
function TeamCard({img,name,classes,position,link,number}) {
  return (
    <div className={` relative flex flex-col items-start justify-start gap-2 ${classes}`}  >
        <div className=""><span className="upNum opacity-50 text-[#ccc] text-start text-2xl lg:text-3xl font-MorabbaRegular ">{number}</span></div>
        <div className="productImg h-[315px] w-full " >
            <Image
             width={100}
             height={100}
             className="w-full h-full object-cover"
             src={img}
            //  src={'/pi.svg'}
             alt={'img'}
             title={'img'}
             unoptimized
            />
        </div>
        <div className="w-full flex items-center justify-between gap-2">
          <Link target="_blank" href={link} >
              <h4 className="text-c25 text-start text-base lg:text-lg font-MorabbaMedium  " >
              {name}
              </h4>
          </Link>
          <span className="downNum opacity-50 text-[#ccc] text-start text-2xl lg:text-3xl font-MorabbaRegular ">{number}</span>
        
        </div>
              <h3 className="text-cRed text-start text-sm lg:text-base font-MorabbaMedium  " >
              {position}
              </h3>
        
        {/* <div className=" " ></div> */}
    </div>
  )
}

export default TeamCard