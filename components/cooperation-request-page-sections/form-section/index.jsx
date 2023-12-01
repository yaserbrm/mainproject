"use client";

import React, { useState } from "react";
import { BsChevronDoubleLeft, BsUpload } from "react-icons/bs";
function FormSection() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [sex, setSex] = useState(true);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [organ_name, setOrgan_name] = useState("");
  const [activities_sub, setSctivities_sub] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [lastJobPosition, setLastJobPosition] = useState("");
  const [check, setCheck] = useState(false);
  const [description, setDescription] = useState("");
  const [pdfFile, setPdfFile] = useState("");
  const [image, setImages] = useState([]);
  // creating new plugin instance
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // pdf file error state
  const [pdfError, setPdfError]=useState('');


  const handleFileChange = (event) => {
    const files = event.target.files[0];
    setPdfFile(files)
    // console.log("files :: " ,files);
    // files.length > 0 && setPdfFile(URL.createObjectURL(files[0]))


    //-----------------------------------------------------------------

    // setImages([...image, ...event.target.files]);
    // console.log("image : ", ...event.target.files);


    //-----------------------------------------------------------------

    // let selectedFile = event.target.files[0];
    // // console.log(selectedFile.type);
    // if(selectedFile){
    //   if(selectedFile&&allowedFiles.includes(selectedFile.type)){
    //     let reader = new FileReader();
    //     reader.readAsDataURL(selectedFile);
    //     reader.onloadend=(e)=>{
    //       setPdfError('');
    //       setPdfFile(e.target.result);
    //     }
    //   }
    //   else{
    //     setPdfError('Not a valid pdf: Please select only PDF');
    //     setPdfFile('');
    //   }
    // }
    // else{
    //   console.log('please select a PDF');
    // }
  };
  const handleRadioChange = (e) => {
    setSex(e.target.value === "true"); // Convert the radio button value to a boolean
    console.log("sex : ", sex);
  };
  function submitHandler(event) {
    event.preventDefault(); // prevent the form from submitting
  }
  return (
    <section className="w-full mb-10">
      <div className="container ">
        <div className="container bg-cf4 py-10">
          <form
            onSubmit={submitHandler}
            action=""
            className="grid grid-cols-2 lg:grid-cols-4 gap-7 "
          >
            <div className="col-span-2 lg:col-span-4 flex items-center gap-3">
              <BsChevronDoubleLeft />
              <h4 className="text-c25 text-start text-sm lg:text-lg font-MorabbaMedium  ">
                مشخصات فردی
              </h4>
            </div>

            <div className="col-span-2 lg:col-span-2 border-[1px] border-[#CDCFCD]">
              <input
                type="text"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                placeholder="نام"
                className={` p-3 focus:outline-none text-lg w-full text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                name=""
                id=""
              />
            </div>

            <div className="col-span-2 lg:col-span-2 border-[1px] border-[#CDCFCD]">
              <input
                type="text"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                placeholder="نام خانوادگی"
                className={` p-3 focus:outline-none text-lg w-full text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                name=""
                id=""
              />
            </div>

            <div className="col-span-2 lg:col-span-2 border-[1px] border-[#CDCFCD]">
              <input
                type="text"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                placeholder="تاریخ تولد"
                className={` p-3 focus:outline-none text-lg w-full text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                name=""
                id=""
              />
            </div>

            <div className="col-span-2 lg:col-span-2 flex items-center gap-5">
              <label for="women" className=" flex items-center gap-2">
                <input
                  id="women"
                  type="radio"
                  name="sex"
                  value="true"
                  checked={sex === true}
                  onChange={handleRadioChange}
                  className="px-1 accent-c97"
                />
                <span className="text-lg text-[#CDCFCD] font-MorabbaRegular">
                  زن
                </span>
              </label>
              <label for="men" className=" flex items-center gap-2">
                <input
                  id="men"
                  type="radio"
                  name="sex"
                  value="false"
                  checked={sex === false}
                  onChange={handleRadioChange}
                  className="px-1 accent-c97"
                />
                <span className="text-lg text-[#CDCFCD] font-MorabbaRegular">
                  مرد
                </span>
              </label>
            </div>

            <div className="col-span-2 lg:col-span-2 border-[1px] border-[#CDCFCD]">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={` p-3 focus:outline-none text-lg w-full text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                placeholder=" تلفن همراه "
                name=""
                id=""
              />
            </div>

            <div className="col-span-2 lg:col-span-2 border-[1px] border-[#CDCFCD]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={` p-3 focus:outline-none text-lg w-full text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                placeholder=" ایمیل "
                name=""
                id=""
              />
            </div>

            <div className="col-span-2 lg:col-span-4 flex items-center gap-3 ">
              <BsChevronDoubleLeft />
              <h4 className="text-c25 text-start text-sm lg:text-lg font-MorabbaMedium  ">
                سابقه کاری
              </h4>
            </div>

            <div className="col-span-2 lg:col-span-2 border-[1px] border-[#CDCFCD]">
              <input
                type="text"
                value={organ_name}
                onChange={(e) => setOrgan_name(e.target.value)}
                className={` p-3 focus:outline-none text-lg w-full text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                placeholder="نام سازمان"
                name=""
                id=""
              />
            </div>

            <div className="col-span-2 lg:col-span-2 border-[1px] pl-5 border-[#CDCFCD]">
              <select
                value={activities_sub}
                className={` p-3 focus:outline-none text-lg w-full text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                name=""
                id=""
              >
                <option
                  className={` p-3 focus:outline-none text-lg w-full text-c25 font-MorabbaRegular`}
                  value="1"
                  selected
                >
                  زمینه فعالیت شما در این سازمان
                </option>
                <option
                  className={` p-3 focus:outline-none text-lg w-full text-c25 font-MorabbaRegular`}
                  value="2"
                ></option>
                <option
                  className={` p-3 focus:outline-none text-lg w-full text-c25 font-MorabbaRegular`}
                  value="3"
                ></option>
                <option
                  className={` p-3 focus:outline-none text-lg w-full text-c25 font-MorabbaRegular`}
                  value="4"
                ></option>
              </select>
            </div>

            <div className="col-span-1 lg:col-span-1  border-[1px] border-[#CDCFCD]">
              <input
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={` p-3 focus:outline-none text-lg w-full text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                placeholder=" تاریخ شروع "
                name=""
                id=""
              />
            </div>

            <div className="col-span-1 lg:col-span-1  border-[1px] border-[#CDCFCD]">
              <input
                type="text"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={` p-3 focus:outline-none text-lg w-full text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                placeholder=" تاریخ پایان "
                name=""
                id=""
              />
            </div>

            <div className="col-span-2 lg:col-span-2 border-[1px] border-[#CDCFCD]">
              <input
                type="text"
                value={lastJobPosition}
                onChange={(e) => setLastJobPosition(e.target.value)}
                className={` p-3 focus:outline-none text-lg w-full text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                placeholder=" آخرین عنوان شغلی شما "
                name=""
                id=""
              />
            </div>

            <div className="col-span-2 lg:col-span-4 flex items-center gap-3 ">
              <input
                type="checkbox"
                className="accent-c97 !rounded-0"
                value={check}
                onChange={() => setCheck((prev) => !prev)}
                name=""
                id="chck"
              />
              <label
                className="text-lg text-[#CDCFCD] font-MorabbaRegular"
                htmlFor="chck"
              >
                هنوز در این شرکت مشغول به کار هستم
              </label>
            </div>

            <div className="col-span-2 lg:col-span-4 border-[1px] border-[#CDCFCD]">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={` p-3 focus:outline-none text-lg w-full text-[#CDCFCD] bg-transparent font-MorabbaRegular`}
                placeholder=" توضیحات تکمیلی(اختیاری)"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <div className="col-span-2 lg:col-span-2 border-[1px] border-c25 flex items-center justify-center">
              <input
                type="file"
                className="hidden"
                
                accept=".pdf"
                onChange={handleFileChange}
                name=""
                id="file"
              />
              <label
                className=" p-3  inline-flex items-center justify-center gap-3 text-lg text-c25 font-MorabbaRegular"
                htmlFor="file"
              >
                <BsUpload />
                <span className="text-c25 text-start text-sm lg:text-lg font-MorabbaMedium  ">
                  آپلود فایل رزومه
                </span>
              </label>
            </div>

            <div className="col-span-2 lg:col-span-2 flex justify-end">
              <button
                className="p-2 px-5 bg-cRed  font-MorabbaRegular text-cf text-lg "
                type="submit"
              >
                ارسال رزومه
              </button>
            </div>


            {/* {pdfError&&<span className='text-danger'>{pdfError}</span>} */}
            <div className="col-span-2 lg:col-span-4 flex items-center gap-3 ">
                {/* <img
                  className="w-10 h-10 rounded-md object-cover"
                  src={URL.createObjectURL(pdfFile)}
                  alt={`Preview ${pdfFile.name}`}
                />   */}
                {pdfFile.name}

                {/* {pdfFile&&(
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl={URL.createObjectURL(files[0])}
                    plugins={[defaultLayoutPluginInstance]}></Viewer>
                </Worker>
                )}
                {!pdfFile&&<>No file is selected yet</>} */}



                    {/* <ul  className="flex items-center flex-wrap gap-3 " >
                        {
                           image.map((item,i)=>(
                                <li  className="flex items-center gap-3 " key={i} >
                                    <img
                                        className="w-10 h-10 rounded-md object-cover"
                                        src={URL.createObjectURL(item)}
                                        alt={`Preview ${item.name}`}
                                    />
                                    <span>{item.name}</span>
                                </li>
                           )) 
                        }
                    </ul> */}
                </div>

                {/* 
                  files.length > 0 && setPdfFile(URL.createObjectURL(files[0]))
                  <Viewer
                    plugins={[defaultLayoutPluginInstance]}
                    fileUrl={files.length > 0 && URL.createObjectURL(files[0])}
                  />
                  <Viewer fileUrl={pdfFile} />
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                    <Viewer
                      fileUrl={pdfFile}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </Worker>
                */}

            {/* <div
              className="col-span-2 lg:col-span-4 flex items-center gap-3 "
              style={{ height: "750px" }}
            >
              {pdfFile ? (
                <div
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    height: "100%",
                  }}
                >
                  files.length > 0 && setPdfFile(URL.createObjectURL(files[0]))
                  
                  <Viewer fileUrl={pdfFile} />
                  
                </div>
              ) : (
                <div
                  style={{
                    alignItems: "center",
                    border: "2px dashed rgba(0, 0, 0, .3)",
                    display: "flex",
                    fontSize: "2rem",
                    height: "100%",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  Preview area
                </div>
              )}
            </div> */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
