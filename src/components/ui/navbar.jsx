import React from "react";
import Button from "./button";
import Searchbar from "./searchbar";
import Avatar from "./avatar";
import Notification from "./notification";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5">
      <Searchbar placeholder="Search" />
      <div className="flex justify-between gap-8 items-center">
        <Button label="Add New Property" className="px-5" />
        <Notification />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
