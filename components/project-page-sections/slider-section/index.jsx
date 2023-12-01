import ThreeDimensionalSlider from '@/components/all-sliders-component/3d-slider'
import React from 'react'

function SliderSection({gallery}) {
  return (
    <section className='w-full' >
        <div className=" flex justify-center items-center py-11 pb-36 ">
            <div className="hidden lg:block lg:w-[65%] h-[25rem]">
                <ThreeDimensionalSlider gallery={gallery}  />
            </div>
        </div>
    </section>
  )
}

export default SliderSection