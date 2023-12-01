// "use client"

import React from 'react'
// import Image from 'next/image'
// import Landing from './landing/page'
import AboutSection from '@/components/landing-page-section/about-section'
import AttributesSection from '@/components/common/attributes-section'
import ContactSection from '@/components/common/contact-section'
import CustomerSection from '@/components/landing-page-section/customer-section'
import DoneProjectSection from '@/components/landing-page-section/done-project-section'
import HeaderSection from '@/components/landing-page-section/header-section'
import OngoingSection from '@/components/landing-page-section/ongoing-project-section'
import ServiceSection from '@/components/landing-page-section/service-section'
import WeblogSection from '@/components/landing-page-section/weblog-section'
import { getDoingProjects,getDoneProjects } from '@/core/services/api/services/project'
import { getService } from '@/core/services/api/services/service';
import { getWeblog } from '@/core/services/api/services/weblog'
import { getAttribute } from '@/core/services/api/services/attribute'
// import { getCompany } from '@/core/services/api/services/company'
import { getSlider } from '@/core/services/api/services/slider'
// import dynamic from 'next/dynamic'
// import MapContact from '@/components/common/contact-map';

// const DynamicMap = dynamic(() => import('../components/common/contact-map'), {
//   ssr: false
// });

async function Home() {
  const sliderFetchDatas=await getSlider()
  const doneProFetchDatas=await getDoneProjects()
  const serviceFetchDatas=await getService()
  const doingProFetchDatas=await getDoingProjects()
  const attributeFetchDatas=await getAttribute()
  const weblogFetchDatas=await getWeblog()
  // const companyFetchDatas=await getCompany()
  return (
    <main >
      <div className="flex flex-col items-center justify-start">
        <HeaderSection sliderDatas={sliderFetchDatas.data} />
        <AboutSection />
        <DoneProjectSection project={doneProFetchDatas.data} />   
        <ServiceSection project={serviceFetchDatas.data} />
        <AttributesSection att={attributeFetchDatas.data} />
        <OngoingSection project={doingProFetchDatas.data} />
        <WeblogSection newLearns={weblogFetchDatas.data} />
        <ContactSection  /> 
        <CustomerSection />
      </div>
    </main>
  ) 
}
export default Home
    // <div className="w-full h-screen flex items-center justify-center">
    //  <DynamicMap />
     
    //   <div className="w-[90%] lg:w-[31.563rem] h-[8.813rem] lg:h-[12rem] border-2">
    //     <DynamicMap />
    //   </div>
    // </div>
