import React from 'react'

function SectionTitle({lineClasses,textClasses,title}) {
  return (
    <div className={`my-[3%] flex items-center justify-start gap-5`}>
        <div className={`w-[20vw] h-[3.2px] ${lineClasses} `} ></div>
        <h3 className={`font-MorabbaRegular text-2xl lg:text-[3.9vw] ${textClasses}`}>{title}</h3>
    </div>
  )
}

export default SectionTitle