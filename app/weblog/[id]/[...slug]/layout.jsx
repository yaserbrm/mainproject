import WeblogContent from "@/components/weblog-page-sections/weblog-content";
import Link from 'next/link'
import { IoIosArrowBack } from "react-icons/io";
export default function RootLayout({ children }) {
    return (
        <div className="container gap-8 relative pt-[8%]  grid grid-cols-12 lg:grid-cols-12 ">
            <WeblogContent classes="col-span-12 lg:col-span-9 " >

            <article>{children}</article>

            </WeblogContent>
            <aside className=" hidden lg:inline-block lg:sticky lg:top-0 lg:left-0 col-span-12 lg:col-span-3 ">

                <h2 className=" text-c25 text-base lg:text-3xl font-MorabbaRegular  ">
                 آخرین مطالب
                </h2>
                <hr className="bg-cd8 text-cd8 my-3 " />

                <div className="flex flex-col gap-7" >

                    <ul className="bg-cf4 p-4 divide-y divide-cd8 " >
                        <li className="py-3">
                                <Link href='' className="w-full inline-flex justify-between items-center" >
                                <span className=" text-c25 text-xs lg:text-sm font-MorabbaSemiBold ">بازسازی خانه های شما به روش مدرن  </span>
                                <span className="text-c25 text-base lg:text-xl "><IoIosArrowBack /></span>
                                </Link>
                        </li>
                        <li className="py-3">
                                <Link href='' className="w-full inline-flex justify-between items-center" >
                                <span className=" text-c25 text-xs lg:text-sm font-MorabbaSemiBold  ">بازسازی خانه های شما به روش مدرن  </span>
                                <span className="text-c25 text-base lg:text-xl "><IoIosArrowBack /></span>
                                </Link>
                        </li>
                        <li className="py-3">
                                <Link href='' className="w-full inline-flex justify-between items-center" >
                                <span className=" text-c25 text-xs lg:text-sm font-MorabbaSemiBold ">بازسازی خانه های شما به روش مدرن  </span>
                                <span className="text-c25 text-base lg:text-xl "><IoIosArrowBack /></span>
                                </Link>
                        </li>
                    </ul>

                    <div className="w-full bg-cf4  h-[50vh]"> 
                    </div>
                </div>
            </aside>
        </div>
    )
  }
  