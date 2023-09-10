import React from "react";
import {
  BiHomeAlt,
  BiCategory,
  BiUserCircle,
  BiLogOut,
  BiMoney,
  BiGroup,
  BiMessageAltError,
} from "react-icons/bi";

const Sidebar = () => {
  const menus = [
    {
      title: "Dashboard",
      link: "/",
      icons: BiCategory,
    },
    {
      title: "Properties",
      link: "/property",
      icons: BiHomeAlt,
    },
    {
      title: "Tenants",
      link: "/account",
      icons: BiGroup,
    },
    {
      title: "Collection",
      link: "/account",
      icons: BiMoney,
    },
    {
      title: "Concern",
      link: "/account",
      icons: BiMessageAltError,
    },
  ];

  return (
    <div className="py-5 flex gap-2 justify-between h-screen flex-col">
      <div className="px-5">
        <h2>Rent</h2>
      </div>
      <div>
        <ul className="flex flex-col">
          {menus.map((menu, i) => (
            <li
              key={i}
              className="flex px-5 py-5 gap-2 items-center cursor-pointer hover:bg-indigo-600 hover:text-white"
            >
              <span className="text-2xl">
                <menu.icons />
              </span>
              {menu.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-5">
        <button className="flex items-center gap-3 hover:text-indigo-700">
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
