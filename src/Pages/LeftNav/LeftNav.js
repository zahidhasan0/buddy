import React from "react";
import { FaBell, FaBook, FaUserFriends } from "react-icons/fa";
import NavCard from "./NavCard/NavCard";

const LeftNav = () => {
  const items = [
    {
      id: "01",
      name: "Feed",
      icon: <FaBook />,
    },
    {
      id: "02",
      name: "Friends",
      icon: <FaUserFriends />,
    },
    {
      id: "03",
      name: "Notification",
      icon: <FaBell />,
    },
    {
      id: "04",
      name: "Feed",
      icon: <FaBook />,
    },
    {
      id: "05",
      name: "Feed",
      icon: <FaBook />,
    },
    {
      name: "Feed",
      icon: <FaBook />,
    },
    {
      id: "06",
      name: "Feed",
      icon: <FaBook />,
    },
  ];

  return (
    <div className="sticky top-[100px] left-0 ">
      {items.map((item) => (
        <NavCard key={item.id} item={item}></NavCard>
      ))}
    </div>
  );
};

export default LeftNav;
