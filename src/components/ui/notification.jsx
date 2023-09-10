import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import Dropdown from "./dropdown";

const Notification = ({ dropDownData, className }) => {
  const [isHidden, setIsHidden] = useState(false);
  const handleToggle = () => {
    setIsHidden(!isHidden);
  };
  console.log(isHidden);
  return (
    <div className="relative">
      <button
        className={`text-2xl ${
          isHidden ? "text-slate-800" : "text-indigo-700"
        }`}
        onClick={handleToggle}
      >
        <IoNotificationsOutline />
      </button>
      <Dropdown
        dropDownData={dropDownData}
        className={isHidden ? "block" : "hidden"}
      />
    </div>
  );
};

export default Notification;
