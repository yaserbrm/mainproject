import SectionSlider from '@/components/all-sliders-component/landing-sliders/section-slider'
import SectionTitle from '@/components/common/section-title'
import React from 'react'
// import { getData,getDetailsData } from "@/core/services/api/posts";
// import project from "../../../public/static/project.json";

function DoneProjectSection({project}) {
  // const data=await getData()
  return (
    <section className="w-full">
        <div className="serviceCont">
          <div className="mb-[5%]">

            <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title="پــــروژه های انجام شـــده"  />
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

export default DoneProjectSection