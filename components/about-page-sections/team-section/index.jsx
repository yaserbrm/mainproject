
import React from 'react'
import SectionTitle from '@/components/common/section-title'
import Link from "next/link";
import WeblogLg from '@/components/about-page-component/weblog';
import TeamSlider from '@/components/all-sliders-component/team-slider';
// import ContactBox from '@/components/common/contact-box'
// import Slider from '@/components/all-sliders-component/landing-sliders/slider';
// import { HiOutlineArrowLeft } from 'react-icons/hi';


function TeamSection({teamItems}) {
  return (
    <section className="w-full "> 
        <div className="serviceCont  relative">
          <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title=" تیم ما "  />
              <div className="container lg:block hidden " >
                <WeblogLg  teamItems={teamItems} />
              </div> 

            <div className=" block lg:hidden  " >
              <TeamSlider teamItems={teamItems} />
            </div> 
        </div>
     </section>
  )
}

export default TeamSection