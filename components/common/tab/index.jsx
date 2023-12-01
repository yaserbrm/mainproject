import React from "react";
 
const Tab = ({ label, onClick, isActive }) => (
    <div
        className={`tab cursor-pointer  ${isActive ? "active" : ""} font-MorabbaRegular text-[0.9rem] lg:text-[1rem]`}
        onClick={onClick}
    >
        {label}
    </div>
);
 
export default Tab;