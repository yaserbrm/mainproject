import React from 'react'
import  Link  from 'next/link';
import Image from 'next/image'

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineMail,AiOutlinePhone } from 'react-icons/ai';


function Footer() {
  const footerItem=[
    {id:1,classes:'',icon:(<AiOutlineMail/>),title:'ofoghGostar@gmail.com',href:'/'},
    {id:2,classes:'',icon:(<AiOutlinePhone />),title:'011-3321-4567',href:'/'},
    {id:3,classes:' lg:w-[400px]',icon:(<HiOutlineLocationMarker />),title:'لورم ایپسوم،متن ساختگی با تولید سادگی ',href:'/'},
  ]
  return (
    <footer className='w-full bg-c25'>
      <div className="serviceCont pt-[4%] lg:gap-0 gap-8 flex lg:flex-row flex-col items-start lg:items-center justify-start">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-[7vw] h-[1.2px] bg-cd6 `} ></div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-[4.188rem]">
               <Image  unoptimized className="w-full" width={100} height={50} alt={'nav logo'} src={'navlogo.svg'} />
            </div>
            <h3 className={`font-MorabbaRegular text-2xl text-cf`}>افق گستران هاشمی</h3>
          </div>
        </div>
        <div className="lg:flex hidden w-[1.2px] mx-9 h-20 bg-cf"></div>
        <ul className=' p-6 lg:p-0 flex lg:flex-row flex-col lg:items-center items-start lg:justify-between justify-start lg:gap-16 gap-3'>
          {
           footerItem.map((item,i)=>(
            <li key={i} >
              <Link className='font-MorabbaRegular text-base lg:text-lg text-cf flex items-center justify-center gap-3 lg:gap-2' href={item.href}>
                <span className='text-xl lg:text-2xl'>{item.icon}</span>
                <span className={`inline-block ${item.classes}`}>{item.title}</span>
              </Link>
            </li>
           )) 
          }
        </ul>
      </div>
      <div className="pt-[3%] pb-[2%] px-6 lg:px-0 text-center flex justify-center items-center">
          <span className={` font-MorabbaRegular text-base lg:text-lg text-cf`}>

             طراحی و توسعه این سایت توسط تیم توسعه <Link className='text-cRed ' href="https://mazandnetwork.ir/">  شرکت مازندشبکه   </Link> انجام شده است
          </span>
      </div>
    </footer>
  )
}

export default Footer