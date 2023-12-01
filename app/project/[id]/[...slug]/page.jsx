// "use client"
import React from 'react'
// import { getData,getDetailsData } from "@/core/services/api/posts";
// import project from "../../../../public/static/project.json";
import HeadSection from '@/components/common/head-section';
import ContactSection from '@/components/common/contact-section';
import FormSection from '@/components/project-page-sections/form-section';
import ProjectDetails from '@/components/project-page-sections/project-details';
import SliderSection from '@/components/project-page-sections/slider-section';
// import CommentBox from '@/components/common/comment-box';
import { getDetailProject } from '@/core/services/api/services/project'
import { getCompany } from '@/core/services/api/services/company'

async function ProjectSinglePage({params}) {
  const data= await getDetailProject(params.id)
  // console.log("data ::::",data)
  const companyFetchDatas=await getCompany()
 
  return (
    <main>
       <HeadSection pageTitle={data.data.subject} lineClasses="bg-cf" textClasses="text-cf" title={data.data.subject} classes=" bg-c25" />

       <div className="flex flex-col items-center justify-start lg:gap-14 lg:mb-28" >
        <SliderSection gallery={data.data} />
        <ProjectDetails proDet={data.data} />
        <FormSection />
        {/* <CommentBox /> */}
        <ContactSection compny={companyFetchDatas.data} /> 
       </div>

      {/* <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data.title}
              </h1> */}
    </main>
  )
}

export default ProjectSinglePage