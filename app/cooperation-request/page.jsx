import HeadSection from '@/components/common/head-section'
import DescriptionSection from '@/components/cooperation-request-page-sections/description-section'
import FormSection from '@/components/cooperation-request-page-sections/form-section'
import React from 'react'
// import { postResume } from '@/core/services/api/services/resume'


function CooperationRequest() {
  return (
    <main>
      <HeadSection pageTitle="درخواست همکاری" lineClasses="bg-cf" textClasses="text-cf" title=" درخواست همکاری  " classes=" bg-cRed" />
      <DescriptionSection />
      <FormSection />
    </main>
  )
}

export default CooperationRequest