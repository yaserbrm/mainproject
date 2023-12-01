// // "use client"
// import AboutSection from '@/components/landing-page-section/about-section'
// import AttributesSection from '@/components/common/attributes-section'
// import ContactSection from '@/components/common/contact-section'
// import CustomerSection from '@/components/landing-page-section/customer-section'
// import DoneProjectSection from '@/components/landing-page-section/done-project-section'
// import HeaderSection from '@/components/landing-page-section/header-section'
// import OngoingSection from '@/components/landing-page-section/ongoing-project-section'
// import ServiceSection from '@/components/landing-page-section/service-section'
// import WeblogSection from '@/components/landing-page-section/weblog-section'
// import React from 'react'
// import project from "../../public/static/project.json";
// import newLearns from "../../public/static/last_news.json";
// import { getDoingProjects,getAllProjects,getDoneProjects,getDetailProject } from '@/core/services/api/services/project'
// import { getService,showSingleService } from '@/core/services/api/services/service';
// import { getWeblog,getDetailWeblog } from '@/core/services/api/services/weblog'
// import { getSocialMedia } from '@/core/services/api/services/socialMedia'
// import { getSlider } from '@/core/services/api/services/slider'
// import { getAttribute } from '@/core/services/api/services/attribute'
// import { getClient } from '@/core/services/api/services/client'
// import { getCompany } from '@/core/services/api/services/company'


 function Landing() { 

  // const doneProFetchDatas=await getDoneProjects()
  // const doingProFetchDatas=await getDoingProjects()
  // const serviceFetchDatas=await getService()
  // const attributeFetchDatas=await getAttribute()
  // const weblogFetchDatas=await getWeblog()
  // const companyFetchDatas=await getCompany()
  // console.log('attributeFetchDatas ::: ',attributeFetchDatas)

//   const items=[
//     {id:1,img:'/pi.svg',title:'1 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
//     {id:2,img:'/pi.svg',title:'2 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
//     {id:3,img:'/pi.svg',title:'3 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
//     {id:4,img:'/pi.svg',title:'4 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
//     {id:5,img:'/pi.svg',title:'5 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
//     {id:6,img:'/pi.svg',title:'6 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
//     {id:7,img:'/pi.svg',title:'7 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
//     {id:8,img:'/pi.svg',title:'8 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
//     {id:9,img:'/pi.svg',title:'9 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
//     {id:10,img:'/pi.svg',title:'10 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
//     {id:11,img:'/pi.svg',title:'11 قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
//     {id:12,img:'/pi.svg',title:'12 قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
// ]

  return (
    <main >
      {/* <div className="flex flex-col items-center justify-start">
        <HeaderSection />
        <AboutSection />
        <DoneProjectSection project={doneProFetchDatas.data} />   
        <ServiceSection project={serviceFetchDatas.data} />
        <AttributesSection att={attributeFetchDatas.data} />
        <OngoingSection project={doingProFetchDatas.data} />
        <WeblogSection newLearns={weblogFetchDatas.data} />
        <ContactSection compny={companyFetchDatas.data} /> 
        <CustomerSection />
      </div> */}
    </main>
  )
}

export default Landing