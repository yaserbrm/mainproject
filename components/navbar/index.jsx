"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { usePathname } from "next/navigation";
import { AiOutlineClose ,AiOutlineMenu} from 'react-icons/ai';
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const pathname = usePathname();
  const menuItem=[
    {id:1,title:'صفحه اصلی',href:'/'},
    {id:2,title:'پروژه ها',href:'/project'},
    {id:3,title:'درباره ما',href:'/about'},
    {id:4,title:'تماس با ما',href:'/contact'},
    {id:5,title:'  درخواست همکاری ',href:'/cooperation-request'},
  ]

  const scrollFunction = () => {
    if(typeof window !== 'undefined')
    {

      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  useEffect(() => {
    if(typeof window !== 'undefined')
    {

      window.addEventListener('scroll', scrollFunction);
      return () => {
        window.removeEventListener('scroll', scrollFunction);
      };
    }
  }, []);
  // if(typeof window !== 'undefined')
  // {
  
  // }
  const openMenu = () => {
    setIsShow(true);
  };
  const closeMenu = () => {
    setIsShow(false);
  };
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      // html.style.transition = "all 0.2s ease-in-out";
      html.style.overflow = isShow ? "hidden" : "auto";
    }
  }, [isShow]); 
  return (
    <nav className={`container transition-all duration-75 flex items-center justify-between fixed top-0 left-0 right-0 py-7 ${pathname=='/'?" ":"bg-cf  "} ${scrolled ? 'bg-cf py-5 bg-opacity-100 shadow-lg' : ' py-7'}  z-50 `}>
       {/* bg-opacity-50 */}
      <div className="order-2 lg:order-1 flex items-center justify-center gap-2 lg:gap-4">
        <div className="w-[4.188rem]">
          <Image unoptimized className="w-full" width={100} height={50} alt={'nav logo'} src={'navlogo.svg'} />
        </div>
        <h2 className={`${pathname=='/'  ? scrolled ?  'text-c25 ' : 'text-cf':' text-c25 '}  text-base lg:text-xl font-MorabbaMedium hidden lg:flex`}>افق گستران هاشمی</h2>
      </div>
      <div className="order-1 lg:order-2 flex lg:hidden  ">
        {/* <CiMenuFries onClick={openMenu} /> */}
        <button onClick={openMenu} className={` ${pathname=='/'  ? scrolled ?  'border-[#25252580] text-c25 ' : 'border-[#FFFFFF80] text-cf':'border-[#25252580] text-c25 '} w-10 h-10 border-2 flex items-center justify-center`} ><AiOutlineMenu /></button>

        <div className={`h-screen flex flex-col items-center justify-between pb-16 pt-32 absolute top-0 left-0 right-0 bottom-0 overflow-y-scroll bg-c25 z-50 transition-all duration-150 ease-linear ${isShow?"opacity-100 visible":"opacity-0 invisible"} `} >
          <div className="flex items-center justify-start gap-3  absolute top-12  right-0">
            <div className={`w-[56px] h-[1.2px] bg-cd6 `} ></div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-[4.188rem]">
                <Image unoptimized className="w-full" width={100} height={50} alt={'nav logo'} src={'navlogo.svg'} />
              </div>
              <h3 className={`font-MorabbaRegular text-2xl text-cf`}>افق گستران هاشمی</h3>
            </div>
          </div>
          
          <ul className='flex flex-col items-center justify-start gap-8'>
            {
              menuItem.map((item,i)=>(
                <li onClick={closeMenu} key={i} ><Link target="_blank" href={item.href}><span className={` ${pathname ==item.href ? "text-cGray" : "text-cf"}  text-lg font-MorabbaMedium`}>{item.title}</span></Link></li>
              ))
            }
            {/* <li ><Link href={`/cooperation-request`} ><span className={`  text-cf text-lg font-MorabbaMedium`}>  درخواست همکاری </span></Link></li> */}
          </ul>
          <button onClick={closeMenu} className='w-10 h-10 border-2 border-[#FFFFFF80] text-cf flex items-center justify-center' ><AiOutlineClose /></button>
        </div>
      </div>
      <ul className="lg:order-3 hidden lg:flex items-center justify-center gap-8 ">
        {
          menuItem.slice(0,4).map((item,i)=>(

            <li key={i} ><Link target="_blank" href={item.href}><span className={` ${pathname ==item.href ? "text-c25" : pathname=='/'  ? scrolled ?  'text-cGray ' : ' text-cf':'border-[#25252580] text-cGray '}  text-xl font-MorabbaMedium`}>{item.title}</span></Link></li>
          ))
        }
      </ul>
      <div className="lg:order-4 hidden lg:flex items-center justify-center ">
        <Link href={`/cooperation-request`} className={` ${pathname=='/'  ? scrolled ?  'text-cRed  border-cRed hover:text-cf hover:bg-cRed ' : 'text-cf  border-cf hover:text-c25 hover:bg-cf':'text-cRed  border-cRed hover:text-cf hover:bg-cRed'}
           transition-all duration-200   text-base lg:text-xl font-MorabbaMedium border-[1px] px-4 p-2 lg:px-6`}>درخواست همکاری</Link>
      </div>      
    </nav>
  )
}

export default Navbar