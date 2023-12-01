import React from 'react'

import HeadSection from '@/components/common/head-section'
import ContentSection from '@/components/service-page-sections/content-section'
// import project from "../../public/static/project.json";
import { getService } from '@/core/services/api/services/service';

async function Services() {


  const serviceFetchDatas=await getService()
  return (
    <main className='' >
    <HeadSection pageTitle="خدمات ما" lineClasses="bg-cf" textClasses="text-cf" title=" خدمات ما " classes=" bg-cRed" />
    <ContentSection  project={serviceFetchDatas.data} />
    </main>
  )
}

export default Services