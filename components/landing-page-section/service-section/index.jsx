import React from 'react'
import SectionTitle from '@/components/common/section-title'
import Link from "next/link";
import { HiOutlineArrowLeft } from 'react-icons/hi';
import ServiceSlider from '@/components/all-sliders-component/landing-sliders/service-slider';

function ServiceSection({project}) {
  return ( 
    <section className="w-full h-screen">
    
       <div className="serviceCont">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=" ">
               <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title=" برخــی از خــدمات ما "  />
            </div>

            <div className="container hidden lg:flex items-center justify-end gap-8">
              <div className="flex items-center justify-center gap-3">
                <button
                className="prev_service_button transform rotate-180 text-c97 text-base lg:text-lg font-MorabbaRegular "
                type="button"
                >
                    <HiOutlineArrowLeft />
                </button>
                <button
                className="next_service_button text-c97 text-base lg:text-lg font-MorabbaRegular "
                type="button"
                >
                    <HiOutlineArrowLeft />
                </button>
              </div>
              <Link href={`/service`}
              className="text-c97 inline-flex items-center justify-center gap-2 text-base lg:text-lg font-MorabbaRegular  "
              type="button"
              >
                  <span> مطالعه بیشتر </span>
                  <HiOutlineArrowLeft />
              </Link>
            </div>
          </div>
          <div className=" py-5 lg:ps-16">
 
            <ServiceSlider project={project}  />
          </div>
          <div className=" transition-all duration-150 ease-linear lg:hidden flex items-center justify-center" > 
        
            <Link  href={`/service`}
                className="text-c25 bg-ce inline-flex items-center justify-center gap-2 text-base lg:text-lg font-MorabbaRegular  p-2 px-4 lg:p-2 lg:px-6"
                type="button"
              >
                <span> مطالعه بیشتر </span>
                <HiOutlineArrowLeft />
            </Link>
          </div>
       </div>
    </section>
  
  )
}

export default ServiceSection