
import ContactBox from '@/components/common/contact-box'
import React from 'react'
import SectionTitle from '@/components/common/section-title'
import Link from "next/link";

import { HiOutlineArrowLeft } from 'react-icons/hi';
import WeblogLg from '@/components/landing-components/weblog';
import Slider from '@/components/all-sliders-component/landing-sliders/slider';
 
function WeblogSection({newLearns}) {
  return (
    <section className="w-full  relative lg:mb-[20%] mb-[50%]">
        <div className="serviceCont h-[329px] lg:h-[402px] relative">
          <div className="  absolute top-0 right-0 bottom-0 left-0 lg:left-[14%] bg-c25 py-6">
            <div className="flex items-center justify-between">

                <SectionTitle lineClasses="bg-cf" textClasses="text-cf" title=" وبلاگ "  />
                <Link href={`/weblog`}
                className="text-cf inline-flex items-center justify-center gap-2 text-base lg:text-lg font-MorabbaRegular  p-2 px-4 lg:p-2 lg:px-16"
                type="button"
                 >
                    <span> مطالعه بیشتر </span>
                    <HiOutlineArrowLeft />
                </Link>
            </div>

            {/* <div className="relative -left-24 lg:block hidden" >
                <WeblogLg  newLearns={newLearns} />
            </div> 

            <div className="relative top-8 block lg:hidden" >
              <Slider newLearns={newLearns} />
            </div>  */}

          </div>
        </div>
 
           <div className="absolute top-36 container lg:block hidden" >
                <WeblogLg  newLearns={newLearns} />
            </div> 

            <div className="serviceCont absolute top-28 block lg:hidden pr-5" >
              <Slider newLearns={newLearns} />
            </div>

     </section>
  )
}

export default WeblogSection