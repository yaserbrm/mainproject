import SectionSlider from '@/components/all-sliders-component/landing-sliders/section-slider'
import SectionTitle from '@/components/common/section-title'
// import { getData,getDetailsData } from "@/core/services/api/posts";
// import React from 'react'
// import project from "../../../public/static/project.json";
 function OngoingSection({project}) {
  // const data=await getData()
  return (
    <section className="w-full">
        <div className="serviceCont">
          <div className="mb-[5%]">
            <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title=" پــــروژه های درحال اجـــرا  "  />
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full lg:w-[90%]">

            <SectionSlider data={project} />
            </div>
          </div>
        </div>
    </section>
  ) 
}

export default OngoingSection