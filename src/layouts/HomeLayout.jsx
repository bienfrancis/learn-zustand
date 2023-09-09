import React from "react";
import Sidebar from "../components/ui/sidebar";
import Navbar from "../components/ui/navbar";

const HomeLayout = () => {
  return (
    <div className="flex">
      <div className="bg-slate-100 w-60">
        <Sidebar />
      </div>
      <div className="bg-gray-200 w-full">
        <div className="container">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
