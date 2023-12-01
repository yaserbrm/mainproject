import React from 'react'
import HeadSection from '@/components/common/head-section'
import ContentSection from '@/components/project-page-sections/content-section'
// import project from "../../public/static/project.json";
import { getDoingProjects,getAllProjects,getDoneProjects } from '@/core/services/api/services/project'

async function Project() {
  const allProFetchDatas=await getAllProjects()
  const doneProFetchDatas=await getDoneProjects()
  const doingProFetchDatas=await getDoingProjects()
  
  const tabData=[
    {label:'همه',type:'all'},
    {label:'در جال اجرا',type:'doing'},
    {label:'انجام شده',type:'done'}
  ]
  return ( 
    <main className='' >
    <HeadSection pageTitle="پروژه ها " lineClasses="bg-cf" textClasses="text-cf" title="  پروژه ها " classes=" bg-c25" />
    <ContentSection tabData={tabData} doingproject={doingProFetchDatas.data} doneproject={doneProFetchDatas.data} allproject={allProFetchDatas.data} />
    </main>
  )
}

export default Project