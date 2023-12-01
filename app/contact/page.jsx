// "use client"
import HeadSection from '@/components/common/head-section'
import Formbox from '@/components/contact-page-sections/form-section'
import DetailsSection from '@/components/contact-page-sections/details-sections'
import React from 'react'
// import { postMessage } from '@/core/services/api/services/message'
// import { getCompany } from '@/core/services/api/services/company'


async function ContactUs() {
  // const companyFetchDatas=await getCompany()
  // compny={companyFetchDatas.data}
  return (
    <main>
      <HeadSection pageTitle="تماس با ما" lineClasses="bg-cf" textClasses="text-cf" title="تماس با ما" classes=" bg-cRed" /> 
      <Formbox />
      <DetailsSection   />
      {/* ContactUs */}
    </main>
  )
}

export default ContactUs