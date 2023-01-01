import React, { useContext, useEffect, useState } from "react";

import { FaBars, FaComment, FaHeart, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../Context/AuthContext";

const PostCard = ({ post }) => {
  const { text, image, postTime, _id, userProfilePic, userName, reactUsers } =
    post;

  const { user } = useContext(AuthProvider);
  const [userThatReacted, setUserThatReacted] = useState(reactUsers);
  const [postReact, setPostReact] = useState(false);
  const [reactCount, setReactCount] = useState(userThatReacted?.length);
  const [isComment, setIsComment] = useState(false);

  const handleComment = () => {
    setIsComment(!isComment);
  };

  useEffect(() => {
    if (userThatReacted?.includes(user?.email) && postReact === false) {
      setPostReact(true);
    }
  }, [postReact, userThatReacted, user]);

  const handleReact = async () => {
    if (user) {
      console.log(reactCount);
      fetch(`https://buddy-server.vercel.app/react/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userId: user?.email }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.result === "added") {
            setUserThatReacted([...userThatReacted, user?.email]);
            setReactCount((prev) => prev + 1);
            setPostReact(true);
          } else {
            const newReactUsers = userThatReacted.filter(
              (e) => e !== user?.email
            );
            setUserThatReacted(newReactUsers);
            setReactCount((prev) => prev - 1);
            setPostReact(false);
          }
        });
    }
  };

  return (
    <div className="card mt-5 border bg-white shadow-md p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center my-3">
          <img className="h-14 w-14 rounded-full" src={userProfilePic} alt="" />
          <div className="ml-2">
            <h6 className=" font-bold">{userName}</h6>
            <p>{postTime}</p>
          </div>
        </div>
        <div className="my-3 mr-4">
          <span>
            <Link to={`/posts/${_id}`}>
              <FaBars />
            </Link>
          </span>
        </div>
      </div>
      <div>
        <p>{text}</p>
        <img className="mt-3" src={image} alt="" />
      </div>

      <div className=" grid mt-3 grid-cols-3 ">
        <p
          className="text-3xl p-2 text-center  flex justify-center items-center gap-3 hover:bg-red-100 hover:text-red-600 "
          onClick={handleReact}
        >
          <span className={postReact ? "text-red-600" : "text-black"}>
            <FaHeart />
          </span>
          <span>{reactCount}</span>
        </p>
        <p className="text-3xl p-2 text-center  flex justify-center items-center gap-3 hover:bg-green-100 hover:text-green-600">
          <span onClick={handleComment}>
            <FaComment />
          </span>
          <span></span>
        </p>
        <p className="text-3xl p-2 text-center  flex justify-center items-center gap-3 hover:bg-blue-100 hover:text-blue-600">
          <span>
            <FaShare />
          </span>
          <span></span>
        </p>
      </div>

      {isComment && (
        <textarea
          className="p-2 mt-2 border-2"
          name=""
          id=""
          cols=""
          rows=""
        ></textarea>
      )}
    </div>
  );
};

export default PostCard;
