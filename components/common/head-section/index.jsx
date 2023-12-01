// import SectionTitle from '@/components/common/section-title'
import Link from 'next/link'
import React from 'react'
import { BsChevronDoubleLeft, BsUpload } from "react-icons/bs";
function HeadSection({lineClasses,textClasses,title,classes,pageTitle}) {
  return (
    <section className='w-full' >
      <div
      style={{
        backgroundImage: `url(/contactHead.svg)`,
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "left",
        // backgroundSize: "60%",
      }}   
      className={`serviceCont py-[5%] lg:py-[3%] gap-32 lg:gap-14 ${classes} bg-left-bottom min-h-[350px] lg:h-[402px] flex flex-col items-start justify-end`} >
        {/* <SectionTitle lineClasses={lineClasses} textClasses={textClasses} title={title}  /> */}
        
        <div className={`my-[3%] flex items-center justify-start gap-5`}>
        <div className={`w-[20vw] h-[3.2px] ${lineClasses} `} ></div>
        <h1 className={`font-MorabbaRegular text-2xl lg:text-[2.3vw] ${textClasses}`}>{title}</h1>
        </div>

        <div className="container flex items-center gap-4">
          <Link className="text-cf text-base font-MorabbaRegular" href='/'> خانه </Link>
          <BsChevronDoubleLeft className="text-cf text-base font-MorabbaRegular" />
          <Link className="text-cf text-base font-MorabbaRegular" href='/'> {pageTitle} </Link>
        </div>
      </div>

    </section>
  )
}

export default HeadSection