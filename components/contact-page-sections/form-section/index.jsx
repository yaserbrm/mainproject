"use client";
import Form from "@/components/common/form";
import React, { useState } from "react";
import { GrRefresh } from "react-icons/gr";
function Formbox() {
  // var num = Math.floor((Math.random() * 100) + 1)
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");
  const [code, setCode] = useState("");
  const [randText, setRandText] = useState();

  // const randArray=[]
  const handleClick = () => {
   
    // setRandText(num)
  };
  function submitHandler(event) {
    event.preventDefault(); // prevent the form from submitting
    
  }

  return (
    <section className="w-full lg:p-20  mt-[10%] lg:mt-auto  ">
      <div
        style={{
          backgroundImage: `url(/countForm.svg)`,
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "left",
          // backgroundSize: "70%",
        }}
        className="container bg-c25 bg-left-bottom grid grid-cols-1 lg:grid-cols-2 py-10"
      >
        <div className="bg-transparent">
          <Form
            inputCont="bg-[#FFFFFF1A]"
            inputClasses="text-cf bg-transparent"
            name={name}
            setName={setName}
            subject={subject}
            setSubject={setSubject}
            email={email}
            setEmail={setEmail}
            massage={massage}
            setMassage={setMassage}
            code={code}
            setCode={setCode}
            randText={randText}
            setRandText={setRandText}
            handleClick={handleClick}
            submitHandler={submitHandler}
          />
          {/* <form action="" className="bg-transparent grid grid-cols-1 lg:grid-cols-2 gap-5">

            <div className="col-span-1 lg:col-span-1 bg-[#FFFFFF1A] ">
              <input
                placeholder="نام و نام خانوادگی"
                className="bg-transparent p-3 focus:outline-none text-lg w-full text-cf font-MorabbaRegular"
                type="text"
                name=""
                value={name}
                onChange={(e)=>setName(e.target.value)}
                id=""
              />
            </div>

            <div className="col-span-1 lg:col-span-1 bg-[#FFFFFF1A]">
              <input
                placeholder="عنوان پیام"
                className="bg-transparent p-3 focus:outline-none text-lg w-full text-cf font-MorabbaRegular"
                type="text"
                name=""
                id=""
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}
              />
            </div>

            <div className="col-span-1 lg:col-span-2 bg-[#FFFFFF1A]">
              <input
                placeholder="آدرس ایمیل"
                className="bg-transparent p-3 focus:outline-none text-lg w-full text-cf font-MorabbaRegular"
                type="email"
                name=""
                id=""
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div className="col-span-1 lg:col-span-2 bg-[#FFFFFF1A]">
              <textarea
                placeholder="پیام شما"
                className="bg-transparent p-3 focus:outline-none text-lg w-full text-cf font-MorabbaRegular"
                name=""
                id=""
                cols="30"
                rows="5"
                value={massage}
                onChange={(e)=>setMassage(e.target.value)}
              ></textarea>
            </div>

            <div className="col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center justify-between gap-6 ">
              <div className="flex items-center justify-center gap-5">
                  <div className=" bg-[#FFFFFF1A]">
                    <input
                      className="bg-transparent p-3 focus:outline-none text-lg w-full text-cf font-MorabbaRegular"
                      type="text"
                      name=""
                      id=""
                      value={code}
                      onChange={(e)=>setCode(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-center gap-1" >
                    <span className="text-cf font-MorabbaRegular" >{randText}</span>
                    <div
                      onClick={handleClick}
                      className="inline-block cursor-pointer p-2  text-cf text-lg "
                      >
                      <GrRefresh className="text-cf" />
                    </div>
                  </div>
              </div>
              
              <button
                className="p-2 px-5 bg-cRed text-cf text-lg "
                type="submit"
              >
                ارسال پیام
              </button>
             
            </div>
          </form> */}
        </div>
      </div>
    </section>
  );
}

export default Formbox;
