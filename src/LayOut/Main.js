import React from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "../Pages/LeftNav/LeftNav";
import RightNav from "../Pages/RightNav/RightNav";
import Footer from "../Pages/Share/Footer/Footer";
import Navbar from "../Pages/Share/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="sticky top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      <div className="flex  ">
        <div className="hidden rounded-xl sticky top-[400px] left-0    bg-white mt-5 mx-5 pl-4 py-4   border-r-gray-400 md:block w-[600px]">
          <LeftNav />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
        <div className=" hidden rounded-xl bg-white mt-5 mx-5 pl-4 py-4  md:block w-[600px]  ">
          <RightNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
