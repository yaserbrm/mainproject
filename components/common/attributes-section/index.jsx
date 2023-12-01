import Image from 'next/image'
import React from 'react'
import SectionTitle from '@/components/common/section-title'
function  AttributesSection({att}) {
  // const items=[
  //   {id:1,title:"یک دهه تجربه",icon:"/pen-tool.svg"},
  //   {id:1,title:"سرمایه گذاری مطمئن",icon:"/pen-tool.svg"},
  //   {id:1,title:"تضمین کیفیت",icon:"/pen-tool.svg"},
  // ]
  return (
    <section className="w-full h-screen lg:h-auto lg:mb-[7%] mb-[15%] ">
      <div className="serviceCont border relative min-h-[400px] lg:h-[402px]">
        <div className="absolute right-0 -top-16 lg:-top-24">
          <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title=" چرا شرکت ما ؟ "  />
        </div>
        <div  className=" lg:bg-[70%] absolute top-0 right-0 bottom-0 left-0 lg:left-[7%] bg-cRed">
          <div className=" h-full lg:flex lg:flex-col lg:justify-around container py-8">
            <p className="w-full lg:w-[60%] text-sm lg:text-[1.1rem] leading-7 lg:leading-[2vw] font-IranYekanRegular text-cf text-justify  ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه 
            </p>
            <ul className="mt-4 w-full lg:w-[60%] flex items-center justify-between gap-1 lg:gap-0 ">
              {
                att.slice(0,3).map((item,i)=>(
                  <li key={i} className="text-center flex flex-col items-center justify-center gap-3">
                    <div className="w-[2.5rem] lg:w-[3rem]">
                      <Image unoptimized className="w-full" width={100} height={50} alt={'nav logo'} src='/pen-tool.svg' />
                    </div>
                    <span className="text-sm lg:text-[1.1rem] leading-7 font-IranYekanRegular text-cf">{item.name}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="absolute left-5 right-5 -bottom-[16.5rem] lg:right-auto lg:left-20 lg:-bottom-5 w-[90%] h-[317px] lg:w-[480px] lg:h-[528px] bg-c97  "></div>
      </div>
   </section>
  )
}

export default AttributesSection


// <section className="w-full">
// <div className="serviceCont">
//     <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title="  چرا شرکت ما ؟ "  />
//     {/* &#8226; */}
// </div>
// <div className="container    my-10">
//   <div className="bg-cRed relative w-full p-4 lg:py-7 lg:px-10 ">
//     <div className=" border-2 container py-8">
//       <p className="w-full lg:w-[50%] text-sm lg:text-[1.1rem] lg:leading-[2vw] font-IranYekanRegular text-cf text-justify  ">
//         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه 
//       </p>
//       <ul className="mt-4 w-full lg:w-[50%] flex items-center justify-between ">
//         {
//           items.map((item,i)=>(
//             <li key={i} className="text-center flex flex-col items-center justify-center gap-3">
//               <div className="w-[3rem]">
//                 <Image unoptimized className="w-full" width={100} height={50} alt={'nav logo'} src={item.icon} />
//               </div>
//               <span className="text-sm lg:text-[1.1rem] font-IranYekanRegular text-cf">{item.title}</span>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//       {/* <ul className=' !list-disc text-cDarkGray ' >
//           {
//               details.map((item,i)=>(
//                   <li className='relative flex items-center justify-start gap-1' key={i} >
//                       <span> &#8226;</span>
//                       <span className='text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cDarkGray' >{item.title}</span>
//                       <span className='text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cDarkGray' >{item.desc}</span>
//                   </li>
//               )) 
//           }
//       </ul> */}
//     <div className="lg:absolute lg:left-0 lg:-bottom-10 w-full lg:w-[29.125rem] h-[28rem] bg-slate-200 "></div>
//   </div>
// </div>
// </section>
{/* <section className="w-full h-screen lg:h-auto ">
  <div className="serviceCont border relative min-h-[380px] lg:h-[402px]">
    <div className="absolute right-0 -top-16 lg:-top-24">
      <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title=" چرا شرکت ما ؟ "  />
    </div>
    <div  className=" lg:bg-[70%] absolute top-0 right-0 bottom-0 left-0 lg:left-[7%] bg-cRed">
      <div className=" border-2 container py-8">
        <p className="w-full lg:w-[50%] text-sm lg:text-[1.1rem] lg:leading-[2vw] font-IranYekanRegular text-cf text-justify  ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه 
        </p>
        <ul className="mt-4 w-full lg:w-[50%] flex items-center justify-between ">
          {
            items.map((item,i)=>(
              <li key={i} className="text-center flex flex-col items-center justify-center gap-3">
                <div className="w-[3rem]">
                  <Image unoptimized className="w-full" width={100} height={50} alt={'nav logo'} src={item.icon} />
                </div>
                <span className="text-sm lg:text-[1.1rem] font-IranYekanRegular text-cf">{item.title}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    <div className="absolute left-5 right-5 -bottom-72 lg:right-auto lg:left-24 lg:-bottom-8 w-[90%] h-[387px] lg:w-[480px] lg:h-[528px] bg-c97  "></div>
  </div>
</section> */}
    // <section className="w-full">
    //    <div className="container">

    //    </div>
    // </section>