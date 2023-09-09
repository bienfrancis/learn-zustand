import React from "react";
import { BiHomeAlt, BiCategory, BiUserCircle, BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const menus = [
    {
      title: "Home",
      link: "/",
      icons: BiCategory,
    },
    {
      title: "Properties",
      link: "/property",
      icons: BiHomeAlt,
    },
    {
      title: "Account",
      link: "/account",
      icons: BiUserCircle,
    },
  ];

  return (
    <div className="py-5 flex gap-2 justify-between h-screen flex-col">
      <div className="px-5">
        <h2>Rent</h2>
      </div>
      <div className="px-5">
        <ul className="flex gap-4 flex-col">
          {menus.map((menu, i) => (
            <li key={i} className="flex py-2 gap-2 items-center cursor-pointer">
              <menu.icons />
              {menu.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-5">
        <button className="flex items-center gap-3">
          <span>
            <BiLogOut />
          </span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
