import React from "react";

const NavCard = ({ item }) => {
  return (
    <div className="card p-3  my-3 bg-gray-100 ">
      <div className="flex items-center gap-2">
        <h4 className="text-2xl font-semibold">{item.icon}</h4>
        <h4 className="text-xl font-semibold">{item.name}</h4>
      </div>
    </div>
  );
};

export default NavCard;
