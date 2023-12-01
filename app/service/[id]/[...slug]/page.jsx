import React from 'react'
import HeadSection from '@/components/common/head-section'
import ContentSection from '@/components/project-page-sections/content-section'
// import project from "../../../../public/static/project.json";
import { getDoingProjects,getAllProjects,getDoneProjects,getDetailProject } from '@/core/services/api/services/project'


async function ServicesProject() {
  const allProFetchDatas=await getAllProjects()
  const doneProFetchDatas=await getDoneProjects()
  const doingProFetchDatas=await getDoingProjects()

  const tabData=[
    {label:'همه'},
    {label:'در جال اجرا'},
    {label:'انجام شده'}
  ] 
  return (
    <main className='' >
    <HeadSection pageTitle="" lineClasses="bg-cf" textClasses="text-cf" title="  پروژه ها " classes=" bg-c25" />
    <ContentSection tabData={tabData} doingproject={doingProFetchDatas.data} doneproject={doneProFetchDatas.data} allproject={allProFetchDatas.data} />
  
    </main>
  )
}

export default ServicesProject