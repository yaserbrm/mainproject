
"use client"
import React,{useState} from 'react'
import { IoIosArrowBack } from "react-icons/io";
function ReplayBox() {
    const [open,setIsOpen]=useState(false)
    const [massage,setMassage]=useState(null)
    const handleOpenClick=()=>{
        setIsOpen(prev=>!prev)
    }
    function submitHandler(event) {
        event.preventDefault(); // prevent the form from submitting
    
      }
  return (
    <div className='border-t border-[#CDCFCD] flex flex-col gap-6 py-4 lg:py-6  mr-4'>
        <div className="flex items-start justify-between">
            <div className="lg:h-12 border-r-2 border-cRed pr-4 ">
                <h4 className="font-IranYekanRegular text-c4c text-lg" > نام و نام خانوادگی کاربر </h4>
                <span className="font-IranYekanRegular text-cDarkGray text-base"> 1402/06/30 </span>
            </div>
            <div onClick={handleOpenClick} className=" cursor-pointer flex items-center gap-2">
                <span className='text-cRed font-IranYekanRegular' > پاسخ به این نظر </span>
                <IoIosArrowBack className='text-cRed font-IranYekanRegular' />
            </div>
        </div>
        <div className=" pr-4">

            <p className="font-IranYekanRegular text-cDarkGray text-lg">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
            <div className={` ${open? "opacity-100 visible h-auto mt-6  " : "opacity-0 invisible h-0 mt-0 "} transition-all duration1300 ease-in-out`}>
                <form onSubmit={submitHandler} className=" grid grid-cols-1 lg:grid-cols-2 gap-5" action="">
                    <div className={`col-sfpan-1 lg:col-span-2  border-[1px] border-[#CDCFCD]`}>
                        <textarea
                        placeholder="پیام شما"
                        className={` p-3 focus:outline-none text-lg w-full text-c4c  placeholder:text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        value={massage}
                        onChange={(e) => setMassage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center justify-end gap-6 ">
                            <button className=" text-cRed  border-cRed hover:text-cf hover:bg-cRed
            transition-all duration-200 text-base lg:text-xl font-MorabbaMedium border-[1px] px-4 p-2 lg:px-6 " type="submit">
                            انصراف
                            </button>
                            
                            <button className="p-2 px-5 bg-cRed border-[1px] border-cRed font-MorabbaRegular text-cf text-lg " type="reset">
                            ارسال پیام
                            </button>

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ReplayBox