import React from 'react'
import HeadSection from '@/components/common/head-section'
import ContentSection from '@/components/weblog-page-sections/content-section'
// import newLearns from "../../public/static/last_news.json";
import { getWeblog } from '@/core/services/api/services/weblog'
async function Weblog() {
  const weblogFetchDatas=await getWeblog()
  const tabData=[
    {label:'همه'},
    {label:' اخبار '},
    {label:' علمی '}
  ] 
  return (
    <main className='' >
      <HeadSection pageTitle="  وبلاگ " lineClasses="bg-cf" textClasses="text-cf" title="  وبلاگ " classes=" bg-cRed" />
      <ContentSection newLearns={weblogFetchDatas.data} />
    </main>
  )
}

export default Weblog