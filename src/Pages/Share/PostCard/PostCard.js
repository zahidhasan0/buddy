import React from "react";

const PostCard = ({ post }) => {
  const { text, image, postTime } = post;
  return (
    <div className="card">
      <div>
        <h6>{text}</h6>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default PostCard;
