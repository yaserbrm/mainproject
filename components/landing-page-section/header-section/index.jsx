import HeaderSlider from '@/components/all-sliders-component/landing-sliders/header-slider'
import React from 'react'

function HeaderSection({sliderDatas}) {
  return (
    <section className='z-0 w-full'>

        <div className='serviceCont h-screen'>
            <HeaderSlider sliderDatas={sliderDatas} /> 
            {/* <div className=""></div> */}
        </div>
    </section>
  )
}

export default HeaderSection