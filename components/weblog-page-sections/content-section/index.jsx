"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/common/cards/product-card";
import Tab from "@/components/common/tab";
import SearchBox from "@/components/common/search-box";

function ContentSection({ newLearns }) {

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <section className="w-full">
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-5 border-b-[1px] border-ce5 ">
          <div className="flex justify-start items-center gap-5 ">
            {/* {[...new Set(newLearns.map((Val) => Val.category.name))].map((tab, index) => (
              <Tab
                key={index}
                label={tab}
                onClick={() => handleTabClick(index)}
                isActive={index === activeTab}
              />
            ))} */}
          </div>


          <div className="flex justify-end items-center ">
            <SearchBox />
          </div>
        </div>

        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 py-10 ">

             {newLearns.map((item, i) => (
                <div key={i} className="productCard">
                  <ProductCard
                    category={item.category.name}
                    src={item.image}
                    title={item.subject}
                    link={`/weblog/${item.id}/${item.subject}`}
                  />
                </div>
              ))}

          
        </div>
      </div>
    </section>
  );
}

export default ContentSection;






///-----------------------------------------------------------------

// "use client";
// import React, { useState, useEffect } from "react";
// import ProductCard from "@/components/common/cards/product-card";
// import Tab from "@/components/common/tab";
// import SearchBox from "@/components/common/search-box";

// function ContentSection({ newLearns, tabData }) {
//   // const items = newLearns.find((c) => c.id == params.id);
//   // {[...new Set(newLearns.map((Val) => Val.category))].map((tab, index) => (
//   //   <Tab
//   //     key={index} 
//   //     label={tab}
//   //     onClick={() => handleTabClick(index)}
//   //     isActive={index === activeTab}
//   //   />
//   // ))}
//   const [activeTab, setActiveTab] = useState(0);
//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };
//   return (
//     <section className="w-full">
//       <div className="container ">
//         <div className="grid grid-cols-1 lg:grid-cols-2 py-5 border-b-[1px] border-ce5 ">
//           <div className="flex justify-start items-center gap-5 ">
//             {/* {[...new Set(newLearns.map((Val) => Val.category.name))].map((tab, index) => (
//               <Tab
//                 key={index}
//                 label={tab}
//                 onClick={() => handleTabClick(index)}
//                 isActive={index === activeTab}
//               />
//             ))} */}
//           </div>


//           <div className="flex justify-end items-center ">
//             <SearchBox />
//           </div>
//         </div>

//         <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 py-10 ">

//              {newLearns.map((item, i) => (
//                 <div key={i} className="productCard">
//                   <ProductCard
//                     category={item.category.name}
//                     src={item.image}
//                     title={item.subject}
//                     link={`/weblog/${item.id}/${item.subject}`}
//                   />
//                 </div>
//               ))}
//          {/* {activeTab == 0 && (
//             <>
//             <div className="col-">

//               index { activeTab}
//             </div>
//               {newLearns.map((item, i) => (
//                 <div key={i} className="productCard">
//                   <ProductCard
//                     category={item.category.name}
//                     src={item.image}
//                     title={item.subject}
//                     link={`/weblog/${item.id}/${item.subject}`}
//                   />
//                 </div>
//               ))}
//             </>
//           )}

//           {activeTab == 1 && (
//             <>
//             index {index === activeTab}
//               {newLearns
//               .filter((proType) => proType.category ===  "اخبار" )
//               .map((item, i) => (
//                 <div key={i} className="productCard">
//                   <ProductCard
//                      category={item.category}
//                      src={item.image}
//                      title={item.subject}
//                      link={`/weblog/${item.id}/${item.subject}`}
//                   />
//                 </div>
//               ))}
//             </>
//           )} 

//           {activeTab == 2 && (
//             <>
//             index {index === activeTab}
//               {newLearns
//               .filter((proType) => proType.category === "علمی" )
//               .map((item, i) => (
//                 <div key={i} className="productCard">
//                   <ProductCard
//                     category={item.category}
//                     src={item.image}
//                     title={item.subject}
//                     link={`/weblog/${item.id}/${item.subject}`}
//                   />
//                 </div>
//               ))}
//             </>
//           )} */}
          
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContentSection;
