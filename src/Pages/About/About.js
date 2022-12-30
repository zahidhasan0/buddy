import { async } from "@firebase/util";

import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AuthProvider } from "../../Context/AuthContext";
import EditModal from "../SinglePost/EditModal/EditModal";

const About = () => {
  const { user } = useContext(AuthProvider);
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSingleUser(data))
      .catch((error) => console.log(error));
  }, [user]);

  console.log(singleUser);
  return (
    <div className="bg-white mt-3 text-black p-2 md:w-4/5 mx-auto">
      <div>
        {singleUser && (
          <div className="card pb-5">
            <div className="flex justify-end">
              <label
                htmlFor="edit-modal"
                className="btn bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaEdit />
              </label>
            </div>
            <div className="flex items-center justify-center my-5">
              <img
                className="w-40 rounded-full"
                src={singleUser?.profilePic}
                alt=""
              />
            </div>

            <div className="md:w-2/3 text-center mx-auto">
              <h4>
                <span className="font-semibold">Name :- </span>
                <span className="font-bold">{singleUser?.name}</span>
              </h4>
              <h4>
                <span className="font-semibold">Email :- </span>
                <span className="font-bold">{singleUser?.email}</span>
              </h4>
              <h4>
                <span className="font-semibold">Address :- </span>
                <span className="font-bold">{singleUser?.address}</span>
              </h4>
              <h4>
                <span className="font-semibold">Institute :- </span>
                <span className="font-bold">{singleUser?.university}</span>
              </h4>
            </div>
          </div>
        )}
      </div>

      <EditModal singleUser={singleUser}></EditModal>
    </div>
  );
};

export default About;
