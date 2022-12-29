import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer/Footer";
import Navbar from "../Pages/Share/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="hidden h-[100vh]  border-r-gray-400 md:block w-[500px]"></div>
        <div className="w-full">
          <Outlet />
        </div>
        <div className=" hidden h-[100vh] md:block w-[500px] "></div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
