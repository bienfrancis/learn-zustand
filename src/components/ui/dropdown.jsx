import React from "react";

const Dropdown = ({ dropDownData, className }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-md absolute -right-6 py-4 mt-4 ${className}`}
    >
      <div>
        <ul>
          {dropDownData.map((item, i) => (
            <li
              key={i}
              className="py-1 px-6 hover:bg-indigo-600 hover:text-white"
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
