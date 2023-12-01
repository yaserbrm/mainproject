"use client";
import Form from "@/components/common/form";
import React, { useState } from "react";
import { GrRefresh } from "react-icons/gr";
import CommentBox from "../comment-box";
function FormBox() {
  
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
    <>
     <Form
            inputCont="border-[1px] border-[#CDCFCD]"
            inputClasses="text-[#CDCFCD] bg-transparent"
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
    </>
  )
}

export default FormBox