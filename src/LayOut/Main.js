import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer/Footer";
import Navbar from "../Pages/Share/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>

      <div className="flex  ">
        <div className="hidden rounded-xl  bg-white mt-5 mx-5 pl-4 py-4   border-r-gray-400 md:block w-[600px]">
          <p>Hey Buddy</p>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
        <div className=" hidden rounded-xl bg-white mt-5 mx-5 pl-4 py-4  md:block w-[600px]  ">
          <p>Hey Buddy</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
