
"use client"
import React from 'react'
import SectionTitle from '../section-title'
import Link from 'next/link'
import Image from "next/image";
import { PiLinkedinLogoLight,PiTelegramLogoLight,PiWhatsappLogoLight,PiInstagramLogoLight } from 'react-icons/pi';
// import MapContact from '../contact-map';
// import { getCompany } from '@/core/services/api/services/company'
// import { getSocialMedia } from '@/core/services/api/services/socialMedia'
// import dynamic from 'next/dynamic'
// FiLinkedin/PiLinkedinLogoLight  PiTelegramLogoLight  PiWhatsappLogoThin/PiWhatsappLogoLight  PiInstagramLogoLight
function ContactBox({mediaItems}) {

  // const items=[  
  //   {id:1,icon:(<PiLinkedinLogoLight/>)},
  //   {id:2,icon:(<PiTelegramLogoLight/>)},
  //   {id:3,icon:(<PiWhatsappLogoLight/>)},
  //   {id:4,icon:(<PiInstagramLogoLight/>)},
  // ]
  // const position = [51.505, -0.09]

  // const DynamicMap = dynamic(() => import('../../common/contact-map'), {
  //   ssr: false
  // });
   
  return ( 
    <div className="serviceCont relative min-h-[380px] lg:h-[402px] ">
        <div
          style={{
            backgroundImage: `url(/patt1.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            // backgroundSize: "70%",
          }}
          className=" lg:bg-[70%] absolute top-0 right-0 bottom-0 left-0 lg:left-[5%] bg-cRed py-6">
           <SectionTitle lineClasses="bg-cf" textClasses="text-cf" title="تماس با ما"  />
            <div className=" flex items-center justify-center lg:justify-end lg:items-end " >

              <div className="bg-[rgba(0,0,0,0.5)] w-[90%] lg:w-[31.563rem] p-[3%] lg:p-[2%] lg:me-14 lg:-mt-[30px] mt-5 flex flex-col gap-9 " >
                 <ul className="flex justify-center items-center mt-[2%] gap-5" >
                  {
                    mediaItems.map((item,i)=>(
                      <li key={i}>
                        <Link className="transition-all duration-200 w-[3rem] h-[3rem] lg:w-[3.75rem] lg:h-[3.75rem] border-[1px] border-cf text-cf hover:bg-cf hover:text-c25 text-xl lg:text-3xl inline-flex justify-center items-center" href={item.link} >
                        
                          <Image
                            width={35}
                            height={35}
                            className=""
                            src={item.icon}

                            alt={'img'}
                            title={'img'}
                            unoptimized
                            />
                        </Link>
                      </li>
                    ))
                  }
                 </ul> 
                 <div className="border-2 h-[8.813rem] lg:h-[12rem] bg-cf ">
                    {/* <DynamicMap />  */}
                    <div className="border-2 h-[8.813rem] lg:h-[12rem] bg-cf ">
                      {/* { typeof window !== "undefined"  &&
                      
                      <MapContact location={compny.location} />
                      } */}

                    </div>
                 </div>
              </div>
            </div>
           
          </div>
    </div>
  )
}

export default ContactBox