import Image from "next/image";
import React from "react";

function DescriptionSection() {
  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 lg:grid-cols-2 py-16 ">
        <div className="flex justify-start items-center mb-16 lg:mb-auto ">
          <p className="w-full text-sm lg:text-[1.1rem] lg:leading-[2vw] font-IranYekanRegular text-cGray text-justify  ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>
        <div className=" flex justify-end">
          <div
            className="h-[70vh] w-full lg:w-[518px] relative bg-slate-100
             before:z-0 before:absolute before:-top-3 before:-right-3 before:content-[''] before:h-[70vh] before:w-full before:lg:w-[518px] before:border-2 before:border-c25
            "
          >
            <Image
            unoptimized
              width={518}
              height={561}
              src={"/requ.svg"}
              className="absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full object-cover"
              alt={"ofogh gostar | افق گستر | بازسازی | راه و ساختمان | هاشمی"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescriptionSection;
