import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Button from "./button";

const Searchbar = ({ placeholder }) => {
  return (
    <div className="flex gap-2 items-center bg-transparent ">
      <input
        type="text"
        placeholder={placeholder}
        className="w-80 rounded-lg py-1 placeholder-slate-600 px-2 bg-transparent border-slate-400 border-2 focus:border-white-700 focus:outline-none"
      />
      <Button label={<BiSearchAlt />} className="px-2" />
    </div>
  );
};

export default Searchbar;
