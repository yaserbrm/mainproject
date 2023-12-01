import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLeft } from 'react-icons/hi';

function ProductCard({category,src,title,link,classes}) {
  return ( 
    <div className={` relative flex flex-col items-start justify-start gap-2 ${classes} `} >
        <Link href={``} target="_blank"
            className="absolute top-5 right-5  text-c25 bg-cd6 inline-flex items-center justify-center text-sm font-MorabbaRegular py-1 px-2"
            type="button"
        >
            <span> {category} </span>
        </Link>
        <div className="productImg w-full " >
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
        <h4 className="text-c25 text-sm lg:text-lg font-MorabbaMedium  " >
           {title}
        </h4>
        <Link  target="_blank" href={link}
            className="text-cRed inline-flex items-center justify-center gap-2 text-xs lg:text-sm font-MorabbaRegular "
            type="button"
        >
            <span> مطالعه بیشتر </span>
            <HiOutlineArrowLeft />
        </Link>
        {/* <div className=" " ></div> */}
    </div> 
  )
}

export default ProductCard