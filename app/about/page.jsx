
import React from 'react'
import AboutSection from '@/components/about-page-sections/about-section'
import AttributesSection from '@/components/common/attributes-section'
import TeamSection from '@/components/about-page-sections/team-section'
import ContactSection from '@/components/common/contact-section'
import { getTeam } from '@/core/services/api/services/team'
// import { postMessage } from '@/core/services/api/services/message'
import { getAttribute } from '@/core/services/api/services/attribute'

async function AboutUs() {

  const attributeFetchDatas=await getAttribute()
  const teamFetchDatas=await getTeam()

//   const teamItems=[
//     {id:1,img:'/t1.svg',name:' سید احسان هاشمی تروجنی ',link:'/',position:' رییس هیات مدیره '},
//     {id:2,img:'/t2.svg',name:' قاسم آل شیخ ',link:'/',position:' مدیر عامل و عضو هیات مدیره '},
//     {id:3,img:'/t3.svg',name:' محسن محسن زاده گنجی ',link:'/',position:' عضو هیات مدیره '},
//     {id:4,img:'/t4.svg',name:' حسین حسین پور ',link:'/',position:' حسین حسین پور '},
//     {id:5,img:'/t5.svg',name:' علیرضا شیر دژم ',link:'/',position:' بازرس علی البدل '},
// ]
  return (
    <main> 
      <div className="my-32 flex items-center justify-start ">
        <AboutSection  />
      </div>
      <div className=" mt-auto lg:mb-auto lg:mt-[10%] flex items-center justify-start ">
        <AttributesSection att={attributeFetchDatas.data} />
      </div>
      <div className="  flex items-center justify-start ">
        <TeamSection teamItems={teamFetchDatas.data}  />
      </div>
      <div className=" my-[7%]  flex items-center justify-start ">
        <ContactSection />
      </div>
      
    </main>
  )
}

export default AboutUs