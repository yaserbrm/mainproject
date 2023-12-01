// "use client"
import React from 'react'
import ContactBox from '@/components/common/contact-box'
import { getSocialMedia } from '@/core/services/api/services/socialMedia'
// import { getCompany } from '@/core/services/api/services/company'
async function ContactSection() {
  
  // const companyFetchData=getCompany()
  const socialMediaFetchDatas=await getSocialMedia()
  return (   
    <section className=" z-0 w-full mb-[5%]">
      <div className="">
        <ContactBox mediaItems={socialMediaFetchDatas.data}  />
      </div>
     </section> 
  )
} 

export default ContactSection