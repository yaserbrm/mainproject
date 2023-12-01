import ProductCard from '@/components/common/cards/product-card'
import React from 'react'

function WeblogLg({newLearns}) {
    // const items=[ 
    //     {id:1,img:'/pi.svg',title:' قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
    //     {id:2,img:'/pi.svg',title:' قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
    //     {id:3,img:'/pi.svg',title:' قیمت خرید و فروش قطعات ',link:'/',category:' علمی '},
    //     {id:4,img:'/pi.svg',title:' قیمت خرید و فروش قطعات ',link:'/',category:' اخبار '},
    // ] 
  return (  
    <div className="grid grid-cols-4 gap-5" >
            {
                newLearns.slice(0,4).map((item,i)=>(
                  <div key={i} className="productCard">

                    <ProductCard category={item.category.name} src={item.image} title={item.subject} link={`/weblog/${item.id}/${item.subject}`}  /> 
                  </div>
                ))
            }
    </div>
  )
}

export default WeblogLg