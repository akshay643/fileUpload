"use client";
import React, { useState } from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Sidenav from "./_components/Sidenav";
import TopHeader from "./_components/TopHeader";
import { Menu } from "lucide-react";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="h-screen w-screen bg-black flex">
      <Sidenav handleClick={() => setOpen(!open)} openState={open} />
      <div>
        <Menu className="absolute top-10 left-10" onClick={handleOpen} />
      </div>
      {/* <TopHeader /> */}
      <div className="w-full">{children}</div>
    </div>
    // <div className="bg-black">
    //   {/* Sidebar */}
    //   <div className={`flex-col absolute left-0 ${open ? "" : "-left-64"}`}>
    //     <Sidenav handleClick={() => setOpen(!open)} openState={open} />
    //   </div>

    //   {/* Main Content */}
    //   <div className="ml-0 md:ml-64">
    //     {" "}
    //     {/* Adjust margins based on sidebar visibility */}
    //     {/* Navbar */}
    //     <TopHeader handleClick={() => setOpen(!open)} openState={open} />
    //     {/* Content */}
    //     <div className="py-6 px-4">{children}</div>
    //   </div>
    // </div>
  );
};

export default Layout;
