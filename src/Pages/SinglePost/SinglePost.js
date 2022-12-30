import React from "react";
import { FaComment, FaHeart, FaShare, FaTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const SinglePost = () => {
  const singlePost = useLoaderData();

  console.log(singlePost);

  const handleDelete = () => {
    const agree = window.confirm("Are you sure to delete this post?");
    if (agree) {
      fetch(`http://localhost:5000/posts/${singlePost?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className="card mt-5 border bg-white shadow-md p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center my-3">
          <img
            className="h-14 w-14 rounded-full"
            src={singlePost.profilePic}
            alt=""
          />
          <div className="ml-2">
            <h6 className=" font-bold">{singlePost.userName}</h6>
            <p>{singlePost.postTime}</p>
          </div>
        </div>
        <div className="flex gap-4 my-3 mr-4">
          <span className=""></span>
          <span>
            <button
              onClick={handleDelete}
              className="btn bg-white text-red-600 hover:bg-red-600 hover:text-white"
            >
              <FaTrashAlt />
            </button>
          </span>
        </div>
      </div>
      <div>
        <p>{singlePost.text}</p>
        <img className="mt-3" src={singlePost.image} alt="" />
      </div>

      <div className=" grid mt-3 grid-cols-3 ">
        <p className="text-3xl p-2 text-center  flex justify-center items-center gap-3 hover:bg-red-100 hover:text-red-600 ">
          <span>
            <FaHeart />
          </span>
          <span>{}</span>
        </p>
        <p className="text-3xl p-2 text-center  flex justify-center items-center gap-3 hover:bg-green-100 hover:text-green-600">
          <span>
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
    </div>
  );
};

export default SinglePost;
