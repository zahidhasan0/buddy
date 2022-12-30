import React from "react";
import { FaAd, FaPlus } from "react-icons/fa";

const RightNavCard = ({ item }) => {
  return (
    <div className="p-3 my-3 bg-gray-100 rounded-lg ">
      <div className="flex gap-5 justify-between items-center">
        <div className="flex gap-3 items-center">
          <img className="w-12 h-12" src={item.img} alt="" />
          <div>
            <h5 className="font-bold">{item.name}</h5>
            <h5>{item.profession}</h5>
          </div>
        </div>
        <button>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default RightNavCard;
