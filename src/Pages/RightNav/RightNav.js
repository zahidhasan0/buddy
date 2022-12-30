import React from "react";
import RightNavCard from "./RightNavCard/RightNavCard";

const RightNav = () => {
  const items = [
    {
      id: "01",
      profession: "Crickter",
      name: "Sakib Al Hasan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSMuAwVKstqXanDVAaZdavHIOCA_itF1zng&usqp=CAU",
    },
    {
      id: "02",
      name: "Neymar JR",
      profession: "Footballer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIjd_voQ5Er5ulFGkAfRIcfMmA6AebK_xrw&usqp=CAU",
    },
    {
      id: "03",
      name: "Shahrukh Khan",
      profession: "Actor",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqN4axRCyzSfBIojt9a5ZvZtZWoIJEYMAXjw&usqp=CAUU",
    },
    {
      id: "04",
      name: "Balika Purnima",
      profession: "Actress",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqkcxyN56_yxIQFSHCkGVpyKKQbK0KclBSA&usqp=CAU",
    },
  ];

  return (
    <div>
      <h4 className="text-2xl font-semibold mb-3">Recommanded for you</h4>
      <div>
        {items.map((item) => (
          <RightNavCard key={item.id} item={item}></RightNavCard>
        ))}
      </div>
    </div>
  );
};

export default RightNav;
