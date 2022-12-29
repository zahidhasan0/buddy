import React from "react";
import { FaComment, FaEdit, FaHeart, FaShare } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import EditModal from "./EditModal/EditModal";

const SinglePost = () => {
  const singlePost = useLoaderData();

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
        <div className="my-3 mr-4">
          <span className="">
            <label htmlFor="edit-modal" className="btn">
              <FaEdit />
            </label>
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
      <EditModal singlePost={singlePost}></EditModal>
    </div>
  );
};

export default SinglePost;
