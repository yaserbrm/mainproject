import CustomerSlider from '@/components/all-sliders-component/landing-sliders/customer-slider'
import SectionTitle from '@/components/common/section-title'
import Image from 'next/image'
import React from 'react'
 
function CustomerSection() {
    const items=[ 
        {id:1,img:'/cust1.svg'},
        {id:2,img:'/cust2.svg'},
        {id:3,img:'/cust3.svg'},
        {id:4,img:'/cust4.svg'},
        {id:5,img:'/cust5.svg'},
        {id:6,img:'/cust1.svg'},
        {id:7,img:'/cust2.svg'},
        {id:8,img:'/cust3.svg'},
        {id:9,img:'/cust4.svg'},
        {id:10,img:'/cust5.svg'}
    ]
    // <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-5 lg:gap-0 gap-5">
    // <div className=" container col-span-12 lg:col-span-7">
    //         <div className="flex items-center justify-between flex-wrap  lg:flex-nowrap lg:gap-0 gap-5">
    //             {
  return (
    <section className="w-full">

      <div className="serviceCont grid grid-cols-12 lg:grid-cols-12 gap-5 py-[8%]">
        <div className="col-span-12 lg:col-span-5 lg:mb-0 mb-[5%]">
        <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title=" کارفرمایان ما "  />

        </div>
        <div className=" col-span-12 lg:col-span-7">
          {/* <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-5 lg:gap-0 gap-5">
            {
              items.slice(0,5).map((item,i)=>(
                <div key={i} className="flex items-center lg:justify-start justify-center"><Image unoptimized width={100} height={100} alt={''} src={item.img}  /></div>
              ))
            }
          </div> */}
          <CustomerSlider items={items}  />
        </div>
      </div>
    </section>
  )
}

export default CustomerSection