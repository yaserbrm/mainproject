import Image from "next/image";
import React from "react";
// import Link from "next/link";
// import { HiOutlineArrowLeft } from "react-icons/hi";

function AboutSection() {
  return (
    <section className="w-full h-[647px] mb-[42%] lg:mb-[5%] ">
      <div className="serviceCont grid grid-cols-12 lg:grid-cols-12 h-full relative">
          <div className={`my-[3%] absolute top-0 flex items-center justify-start gap-5`}>
              <div className={`w-[20vw] h-[3.2px] bg-cf `}></div>
              <h3
                className={`font-MorabbaRegular text-2xl lg:text-[3.9vw] text-cf`}
              >
                {" "}
                دربــاره ما{" "}
              </h3>
          </div>
        <div className="hidden lg:flex col-span-12 lg:col-span-1  h-full"></div>
        <div className="col-span-12 lg:col-span-11 grid grid-cols-12 lg:grid-cols-12 h-full text-cf bg-c25">
          <div className=" pt-14 lg:py-14 container relative col-span-12 lg:col-span-5  h-full">
            <div className=" z-0 relative lg:absolute top-0 lg:top-36 left-0  w-full h-[359px] lg:w-[518px] lg:h-[561px] bg-cRed 
             before:absolute before:content-[''] before:w-full before:h-[359px] before:lg:w-[518px] before:lg:h-[561px] before:border-[1px] before:border-c25 before:-top-2 before:-right-2 before:lg:-top-4 before:lg:-right-4
             after:absolute after:content-[''] after:w-full after:h-[359px] after:lg:w-[518px] after:lg:h-[561px] after:border-[1px] after:border-cf after:-bottom-2 after:-left-2 after:lg:-bottom-4 after:lg:-left-4
            ">
              <div className="z-50 absolute top-0 bottom-0 left-0 right-0">
                       <Image unoptimized src={'/about.svg'} width={100} height={100} className="w-full h-full object-cover" alt={'about picture'} />
              </div> 
            </div>
          </div>

          <div className=" py-14 container col-span-12 lg:col-span-7 flex flex-col justify-center gap-3 lg:gap-5  h-full">
           
            <p className="text-sm lg:text-lg leading-7 font-IranYekanRegular text-cf text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه.لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
              شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
// <section className='w-full '>

//   <div className='serviceCont  '>
//     <div className=' grid grid-cols-12 lg:grid-cols-12 '>

//       <div className='col-span-12 lg:col-span-2 '>2</div>
//       <div className='col-span-12 lg:col-span-10 '>1</div>
//      </div>
//   </div>
// </section>
// {/* <div className="container absolute top-28 lg:top-0 bottom-0 left-0 w-[85%] bg-c25">
//     <div className=""></div>
// </div>
// <div className="hidden lg:flex relative top-36 right-32 bg-cRed w-[90%] lg:w-[32.375rem] lg:h-[40.063rem]
// before:absolute before:content-[''] before:w-[90%] before:lg:w-[32.375rem] before:lg:h-[40.063rem] before:border-[1px] before:border-c25 before:-top-4 before:-right-4
// after:absolute after:content-[''] after:w-[90%] after:lg:w-[32.375rem] after:lg:h-[40.063rem] after:border-[1px] after:border-cf after:-bottom-4 after:-left-4
// ">
//     <div className="z-50 absolute top-0 bottom-0 left-0 right-0">
//       <Image unoptimized src={'/about.svg'} width={100} height={100} className="w-full h-full object-cover" alt={'about picture'} />
//     </div>
// </div> */}
