"use client";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SearchBox = ({ url }) => {
  console.log("url ::", url);
  const router = useRouter();
  const [query, setquery] = useState("");
  const [searched, setsearched] = useState([]);
  // 'https://api.o-g-hashemi.com/api/projects'
    const serachHandler = (query) => {
      axios
        .get(url)
        .then((data) => {
          const a = data.data.data
            .filter((po) => po.subject.includes(query))
            .slice(0, 5);
          setsearched(a);
        })
        .catch((err) => console.log(err));
    };
//   const serachHandler = (query) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         const a = data.data.data
//           .filter((po) => po.subject.includes(query))
//           .slice(0, 5);
//         setsearched(a);
//       });
//   };
  console.log("searched ::", searched);

  const searchBtn = () => {
    router.push("/search");
  };

  return (
    <div
      className={
        query == ""
          ? "z-40 lg:mt-auto mt-3 border-[1px] border-ce5 w-full lg:w-[65%]  h-10 bg-white relative "
          : "z-40 lg:mt-auto mt-3 border-[1px] border-ce5 w-full lg:w-[65%]  h-10 bg-white relative "
      }
    >
      <input
        onChange={(e) => {
          setsearched(-1);
          setquery(e.target.value);
          serachHandler(e.target.value);
        }}
        placeholder="لطفا جستجو کنید..."
        type="text"
        className="px-4 w-full h-full focus:outline-none font-MorabbaRegular placeholder:text-ce5 placeholder:font-MorabbaRegular pl-12 rounded-lg  transition-all duration-300  outline-none"
      />
      <div className=" shadow-lg shadow-zinc-300 bg-white rounded-br-lg rounded-bl-lg absolute top-10 right-0 left-0">
        <ul className=" flex flex-col ">
          {query == "" ? (
            <li></li>
          ) : searched == -1 ? (
            <li className=" m-4">لطفا صبر کنید ...</li>
          ) : searched.length == 0 ? (
            <li className=" m-4">نتیجه‌ای یافت نشد.</li>
          ) : (
            searched.map((po, i) => (
              <li
                key={i}
                className=" px-2 py-3 rounded-md duration-200 transition-all
                                 hover:bg-zinc-200 m-2 w-[95%] "
              >
                <Link
                  target={"_blank"}
                  className=" w-full"
                  href={`https://mernfa.ir/blog/posts/${po.slug}`}
                >
                  {po.subject}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
      {/* <div className=" text-2xl text-green-700 absolute left-2 top-4 cursor-pointer">
               <BsSearch onClick={()=>searchBtn()} />
            </div> */}
    </div>
  );
};

export default SearchBox;
