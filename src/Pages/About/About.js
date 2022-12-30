import { async } from "@firebase/util";

import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Context/AuthContext";

const About = () => {
  const { user } = useContext(AuthProvider);
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSingleUser(data))
      .catch((error) => console.log(error));
  }, [user]);

  return (
    <div className="bg-white mt-3 text-black p-2 md:w-4/5 mx-auto">
      {singleUser && (
        <div className="card">
          <div className="">
            <img
              className="w-40 rounded-full"
              src={singleUser?.profilePic}
              alt=""
            />
          </div>
          <div>
            <h2>{singleUser?.email}</h2>
            <p></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
