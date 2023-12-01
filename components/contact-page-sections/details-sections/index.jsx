import React from 'react'
import { GrLocation,GrPhone } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';
import { LuClock } from 'react-icons/lu';
import { PiLinkedinLogoLight,PiTelegramLogoLight,PiWhatsappLogoLight,PiInstagramLogoLight } from 'react-icons/pi';
import Link from 'next/link'
import Image from 'next/image'
// import dynamic from 'next/dynamic'
// import MapContact from '@/components/common/contact-map';

 
function DetailsSection() {
    const items=[
        {id:1,icon:(<GrLocation />),title:'آدرس:',descOne:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ',descTwo:''},
        {id:2,icon:(<GrPhone /> ),title:'تلفن دفتر مرکزی:',descOne:'011-3321-4567',descTwo:''},
        {id:3,icon:(<MdOutlineEmail />),title:'ایمیل پشتیبانی:',descOne:' support@gmail.com',descTwo:''},
        {id:4,icon:(<LuClock/>),title:'ساعت کاری: ',descOne:'شنبه تا چهارشنبه، از ساعت 8:00 تا 19:00 ',descTwo:'پنجشنبه از ساعت 8:00 تا 14:00 '},
    ]
    const itemsSocial=[
        {id:1,icon:(<PiLinkedinLogoLight/>)},
        {id:2,icon:(<PiTelegramLogoLight/>)},
        {id:3,icon:(<PiWhatsappLogoLight/>)},
        {id:4,icon:(<PiInstagramLogoLight/>)},
      ]
  return (
    <section className="w-full mb-[20vh] " >
      <div className="container grid grid-cols-11 lg:grid-cols-12 py-10 " >
        <div className="col-span-12 lg:col-span-8 border-2 border-red-500 p-5 lg:p-10 lg:px-p-12">
          <ul  className="flex flex-col items-start justify-start gap-6" >
            {
              items.map((item,i)=>(
                <li key={i} className=''>
                    <div className="flex items-center justify-start gap-3 mb-3">
                        <span className='text-c25  text-xl font-MorabbaRegular'> {item.icon} </span>                        
                        <span className='text-c25  text-xl font-MorabbaRegular'> {item.title} </span>
                    </div>
                    <span className='text-c97 text-base lg:text-lg font-IranYekanMedium block' > {item.descOne}</span>
                    <span className='text-c97 text-base lg:text-lg font-IranYekanMedium block' > {item.descTwo}</span>
                </li>
              )) 
            }
          </ul>
          <ul className="flex justify-start items-center mt-[5%] gap-5" >
                {
                  itemsSocial.map((item,i)=>(

                    <li key={i}  ><Link className="transition-all duration-200 w-[3rem] h-[3rem] lg:w-[3.75rem] lg:h-[3.75rem] border-[1px] border-c25 text-c25 hover:bg-c25 hover:text-cf text-xl lg:text-3xl inline-flex justify-center items-center" href="" >{item.icon}</Link></li>
                  ))
                }
          </ul>
          <div className="w-full h-40 lg:hidden "></div>
        </div>
        <div className="col-span-12 lg:col-span-4 relative ">
        <div className="z-0 absolute left-5 right-5 -top-36 bottom-auto lg:top-14 lg:bottom-14 lg:left-0 lg:right-auto h-[270px] w-auto lg:h-auto lg:w-[695px] ">
           {/* <MapContact location={compny.location} /> */}
         
          <Image unoptimized className="w-full h-full object-cover" width={100} height={100} alt={'nav logo'} src={'/loc1.svg'} />
        </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsSection



{/* <div className="col-span-12 lg:col-span-8 lg:ps-12 ">
<div className=" border-2 border-red-600 w-full p-5 lg:p-12">
  <ul  className="flex flex-col items-start justify-start gap-8" >
      {
         items.map((item,i)=>(
              <li key={i} className=''>
                  <div className="flex items-center justify-start gap-3 mb-3">
                      <span className='text-c25  text-xl font-MorabbaRegular'> {item.icon} </span>                        
                      <span className='text-c25  text-xl font-MorabbaRegular'> {item.title} </span>
                  </div>
                  <span className='text-c97 text-base lg:text-lg font-IranYekanMedium block' > {item.descOne}</span>
                  <span className='text-c97 text-base lg:text-lg font-IranYekanMedium block' > {item.descTwo}</span>
              </li>
         )) 
      }
     
  </ul>
  <ul className="flex justify-start items-center mt-[5%] gap-5" >
        {
          itemsSocial.map((item,i)=>(

            <li key={i}  ><Link className="transition-all duration-200 w-[3rem] h-[3rem] lg:w-[3.75rem] lg:h-[3.75rem] border-[1px] border-c25 text-c25 hover:bg-c25 hover:text-cf text-xl lg:text-3xl inline-flex justify-center items-center" href="" >{item.icon}</Link></li>
          ))
        }
  </ul>
  <div className="w-full h-40 lg:hidden "></div>
</div>
</div>
<div className="col-span-12 lg:col-span-4 relative ">
  <div className="absolute left-0 right-5 -top-[252px] lg:top-14 lg:-right-60 lg:left-auto w-[90%] lg:w-[560px] h-[460px] ">
    <Image unoptimized className="w-full h-full " width={100} height={100} alt={'nav logo'} src={'/loc1.svg'} />
  </div>
</div> */}

