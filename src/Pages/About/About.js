import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContext";

const About = () => {
  const { user } = useContext(AuthProvider);

  const { data: singleUser } = useQuery({
    queryKey: ["singleUser"],
    queryFn: async () => {
      if (user?.email) {
        const res = await fetch(
          `http://localhost:5000/users?email=${user?.email}`
        );
        const data = res.json();
        return data;
      }
    },
  });

  return (
    <div className="bg-white mt-3 text-black p-2 md:w-4/5 mx-auto">
      {singleUser && (
        <div>
          <div className="">
            <img
              className="w-40 rounded-full"
              src={singleUser?.profilePic}
              alt=""
            />
          </div>
          <div>
            <h2>{singleUser?.email}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
