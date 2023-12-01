import React from "react";
// import newLearns from "../../../../public/static/last_news.json";
import Image from "next/image";
import { BsShare, BsEye, BsClock } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import SectionTitle from "@/components/common/section-title";
import ProductCard from "@/components/common/cards/product-card";
import FormBox from "@/components/common/form-section";
import CommentBox from "@/components/common/comment-box";
import { getWeblog,getDetailWeblog } from '@/core/services/api/services/weblog'


async function WeblogSinglePage({ params }) {
  // const items = newLearns.find((c) => c.id == params.id);
  const items= await getDetailWeblog(params.id)
  const weblogFetchDatas=await getWeblog()
  return (
    <>
      <section className="">
        <div className="w-full h-[60vh]">
          <Image
           unoptimized
            className="w-full h-full object-cover "
            width={100}
            height={50}
            alt={"ofogh gostar | افق گستر | بازسازی | راه و ساختمان | هاشمی"}
            src={items.image}
          />
        </div>
        <h1 className="mt-8 text-c25 text-base lg:text-2xl font-MorabbaSemiBold  ">
          {items.subject}
        </h1>
        <hr className="bg-cd8 text-cd8 my-3 " />
        <div className="flex justify-between items-center">

          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-center items-center gap-1">
              <span className="text-c97 text-sm lg:text-base"><BsClock /></span>
              <span className="text-c97 text-sm lg:text-base font-MorabbaRegular">{items.createdAt}  </span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span className="text-c97 text-sm lg:text-base"><AiOutlineUser /></span>
              <span className="text-c97 text-sm lg:text-base font-MorabbaRegular">نام نویسنده</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-1">
              <span className="text-c97 text-sm lg:text-base"><BsEye /></span>
              <span className="text-c97 text-sm lg:text-base font-MorabbaRegular">  {items.views} k  </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-c97 text-sm lg:text-base"><BsShare /></span>
            </div>
          </div>

        </div>

        <p className=" my-8 w-full text-sm lg:text-[1.1rem] lg:leading-[2vw] font-IranYekanRegular text-c25 text-justify  ">
        {items.description}
        </p>

        <h2 className="my-8 text-c25 text-base lg:text-2xl font-MorabbaRegular  ">
          {items.title}
        </h2>
        <div className="w-full h-[60vh]">
          <Image
          unoptimized
            className="w-full h-full  object-cover "
            width={100}
            height={50}
            alt={"ofogh gostar | افق گستر | بازسازی | راه و ساختمان | هاشمی"}
            src={"/oldHome2.svg"}
          />
        </div>
        <p className="my-8 w-full text-sm lg:text-[1.1rem] lg:leading-[2vw] font-IranYekanRegular text-c25 text-justify  ">
        {items.description}
        </p>
        <hr className="bg-cd8 text-cd8 my-3 " />
        <div className="flex justify-start items-center gap-3">
          <div className="flex justify-center items-center gap-2">
            <div className="w-[24px] h-[24px]">
              <Image
              unoptimized
                className="w-full h-full"
                width={10}
                height={10}
                alt={
                  "ofogh gostar | افق گستر | بازسازی | راه و ساختمان | هاشمی | ticket | برچسب"
                }
                src={"/ticket-2.svg"}
              />
            </div>
           
            <span className="text-c97 text-xs lg:text-sm font-IranYekanRegular">
              بازسازی،تعمیرات
            </span>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title=" مطالب مرتبط "  />
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 py-10 ">
         
            {weblogFetchDatas.data.slice(0,3).map((item, i) => (
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
      </section>
      <section className="my-16">
        <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title="  نظرات شما کاربران "  />
        <div className="bg-cf4 p-4 lg:py-7 lg:px-10  my-10">

          <FormBox />
        </div>
        <CommentBox />
      </section>
      <section className=""></section>
      {/* {items.title} */}
    </>
  );
}

export default WeblogSinglePage;
