import React from "react";
import SectionTitle from "@/components/common/section-title";
// import MapContact from "@/components/common/contact-map";
function ProjectDetails({proDet}) {

  return (
    <section className="w-full h-screen lg:h-auto mb-[10%] lg:mb-[7%]">
      <div className="serviceCont relative flex items-center justify-center lg:justify-start ">
        <div className="absolute right-0 -top-16 lg:-top-24">
          <SectionTitle
            lineClasses="bg-cRed"
            textClasses="text-c25"
            title=" مشخصات پروژه "
          />
        </div> 
        <div className="w-[95%] relative px-4 py-4 lg:py-10 lg:px-auto bg-cRed grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 ">
          <ul className="col-span-1 lg:col-span-1 !list-disc text-cf container flex flex-col gap-4">
            {/* {details.map((item, i) => (
              <li
                className="relative flex items-center justify-start gap-1"
                key={i}
              >
                <span> &#8226;</span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                  {item.title}
                </span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                  {item.desc}
                </span>
              </li>
            ))} */}
              <li
                className="relative flex items-center justify-start gap-1"
              >
                <span> &#8226;</span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                    کارفرما:    
                </span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                  {proDet.client}
                </span>
              </li>
              <li
                className="relative flex items-center justify-start gap-1"
              >
                <span> &#8226;</span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                نوع خدمت:    
                </span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                  {proDet.service}
                </span>
              </li>
              <li
                className="relative flex items-center justify-start gap-1"
              >
                <span> &#8226;</span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                وضعیت:     
                </span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                  {proDet.type== 'doing'?' درحال انجام ':'  انجام شده '}
                </span>
              </li>
              <li
                className="relative flex items-center justify-start gap-1"
              >
                <span> &#8226;</span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                تاریخ شروع:     
                </span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                  {proDet.createdAt}
                </span>
              </li>
              <li
                className="relative flex items-center justify-start gap-1"
              >
                <span> &#8226;</span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                نوع خدمت:    
                </span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                  {proDet.service}
                </span>
              </li>



              <li
                className="relative flex items-center justify-start gap-1"
              >
                <span> &#8226;</span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                استان:    
                </span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                  {proDet.province}
                </span>
              </li>

              <li
                className="relative flex items-center justify-start gap-1"
              >
                <span> &#8226;</span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
               شهر:    
                </span>
                <span className="text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cf">
                  {proDet.city}
                </span>
              </li>
              



          </ul>
          <div className="z-0 col-span-1 lg:col-span-1 lg:absolute lg:left-8 lg:bottom-7  w-full h-[20rem] lg:w-[37.375rem] lg:h-[25.25rem] border-8 border-cf shadow bg-slate-200 ">
            {/* <MapContact location={proDet.location} /> */}
           {/* { console.log('location :: ',proDet.location.lat)} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
//     <section className="w-full">
//         <div className="serviceCont">
//             <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title="  مشخصات پروژه "  />
//             {/* &#8226; */}
//         </div>
//         <div className="container    my-10">
//             <div className="bg-cf4 relative w-full p-4 lg:py-7 lg:px-10 ">
//                 <ul className=' !list-disc text-cDarkGray ' >
//                     {
//                         details.map((item,i)=>(
//                             <li className='relative flex items-center justify-start gap-1' key={i} >
//                                 <span> &#8226;</span>
//                                 <span className='text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cDarkGray' >{item.title}</span>
//                                 <span className='text-[1rem] lg:text-[1.1rem] font-IranYekanRegular text-cDarkGray' >{item.desc}</span>
//                             </li>
//                         ))
//                     }
//                 </ul>
//                <div className="lg:absolute lg:left-0 lg:-bottom-10 w-full lg:w-[29.125rem] h-[28rem] bg-slate-200 "></div>
//             </div>
//         </div>
//    </section>
