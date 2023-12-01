"use client";
import React, { useState, useEffect } from "react";
import CardSectionBox from "@/components/common/cards/card-section-box";
// import { usePathname } from "next/navigation";
import Tab from "@/components/common/tab";
import SearchBox from "@/components/common/search-box";
function ContentSection({ doingproject,doneproject,allproject, tabData }) {
  // const pathname = usePathname();
  // ${pathname ==item.href ? "text-c25" : "text-cGray"}
  // const [active, setActive] = useState(null); 
            
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };   
  // Tab
  return (
    <section className="w-full">
      <div className="container py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-5 border-b-[1px] border-ce5 ">
          <div className="flex justify-start items-center gap-5 ">
           
            {tabData.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                onClick={() => handleTabClick(index)}
                isActive={index === activeTab}
              />
            ))}
          </div>

          <div className="flex justify-end items-center ">
            <SearchBox url='https://api.o-g-hashemi.com/api/projects' />
          </div>
        </div>

        <div className="tab-content cardSectionBoxContainer flex flex-col justify-start items-center gap-8">
          {/* Tab {activeTab} is Active */}
          {activeTab == 0 && (
            <>
              {allproject?.map((item, i) => (
                <CardSectionBox
                  key={i}
                  number={`${i+1}` < 10 ? `0${i+1}` : `${i+1}`}
                  img={item.image}
                  title={item.subject}
                  desc={item.summery}
                  link={`/project/${item.id}/${item.subject}`}
                />
              ))}
            </>
          )}
          {activeTab == 1 && (
            <>
              {doingproject?.map((item, i) => (
                  <CardSectionBox
                    key={i}
                    number={`${i+1}` < 10 ? `0${i+1}` : `${i+1}`}
                    img={item.image}
                    title={item.subject}
                    desc={item.summery}
                    link={`/project/${item.id}/${item.subject}`}
                  />
                ))}
            </>
          )}
          {activeTab == 2 && (
            <>
              {doneproject?.map((item, i) => (
                  <CardSectionBox
                    key={i}
                    number={`${i+1}` < 10 ? `0${i+1}` : `${i+1}`}
                    img={item.image}
                    title={item.subject}
                    desc={item.summery}
                    link={`/project/${item.id}/${item.subject}`}
                  />
                ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
