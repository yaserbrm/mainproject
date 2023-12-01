import React from "react"; 
import { GrRefresh } from "react-icons/gr";

function Form({
  handleClick,
  submitHandler,
  name,
  setName,
  subject,
  setSubject,
  email,
  setEmail,
  massage,
  setMassage,
  code,
  setCode,
  randText,
  setRandText,
  inputClasses,
  inputCont 
}) {
  return (
    <form
      onSubmit={submitHandler}
      action=""
      className="bg-transparent grid grid-cols-1 lg:grid-cols-2 gap-5"
    >
      <div className={`col-span-1 lg:col-span-1  ${inputCont} `} >
        <input
          placeholder="نام و نام خانوادگی"
          className={` p-3 focus:outline-none text-lg w-full font-MorabbaRegular ${inputClasses}`}
          type="text"
          name=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          id=""
        />
      </div>

      <div className={`col-span-1 lg:col-span-1  ${inputCont}`}>
        <input
          placeholder="عنوان پیام"
          className={` p-3 focus:outline-none text-lg w-full font-MorabbaRegular ${inputClasses}`}
          type="text"
          name=""
          id=""
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className={`col-span-1 lg:col-span-2  ${inputCont}`}>
        <input
          placeholder="آدرس ایمیل"
          className={` p-3 focus:outline-none text-lg w-full  ${inputClasses} font-MorabbaRegular`}
          type="email"
          name=""
          id=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={`col-span-1 lg:col-span-2  ${inputCont}`}>
        <textarea
          placeholder="پیام شما"
          className={` p-3 focus:outline-none text-lg w-full  ${inputClasses} font-MorabbaRegular`}
          name=""
          id=""
          cols="30"
          rows="5"
          value={massage}
          onChange={(e) => setMassage(e.target.value)}
        ></textarea>
      </div>

      <div className="col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center justify-between gap-6 ">
        <div className="flex items-center justify-center gap-5">
          <div className={` ${inputCont}`}>
            <input
              className={` p-3 focus:outline-none text-lg w-full  ${inputClasses} font-MorabbaRegular`}
              type="text"
              name=""
              id=""
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className={` ${inputClasses} font-MorabbaRegular`}>{randText}</span>
            <div
              onClick={handleClick}
              className={`inline-block cursor-pointer p-2 ${inputClasses} text-lg `}
            >
              <GrRefresh className={`${inputClasses}`} />
            </div>
          </div>
        </div>

        <button className="p-2 px-5 bg-cRed  font-MorabbaRegular text-cf text-lg " type="submit">
          ارسال پیام
        </button>
        {/* <div className=" flex items-center justify-between">
        <span className=""></span>
      </div> */}
      </div>
    </form>
  );
}

export default Form;
