// import ProductCard from '@/components/common/cards/product-card'
import TeamCard from '@/components/common/cards/team-card'
import React from 'react'

function WeblogLg({teamItems}) {
    // const items=[
    //     {id:1,img:'/pi.svg',title:' قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
    //     {id:2,img:'/pi.svg',title:' قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
    //     {id:3,img:'/pi.svg',title:' قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
    //     {id:4,img:'/pi.svg',title:' قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
    // ] 
  return (
    <div className="grid grid-cols-5 gap-9 " >
            {
                teamItems.slice(0,5).map((item,i)=>(
                   <TeamCard key={i} img={item.image}
                   name={item.name}
                   link={'#'}
                   position={item.positions.name}
                   classes="cardBox"
                   number={`${i+1}` < 10 ? `0${i+1}` : `${i+1}`}
                   /> 

                ))
            }
    </div>
  )
}

export default WeblogLg