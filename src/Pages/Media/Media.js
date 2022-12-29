import { useQuery } from "@tanstack/react-query";
import React from "react";
import PostCard from "../Share/PostCard/PostCard";

const Media = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/posts");
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      <h5>All the medias are here</h5>
      <h4>Medias length {posts?.length}</h4>
      {posts &&
        posts.map((post) => <PostCard key={post._id} post={post}></PostCard>)}
    </div>
  );
};

export default Media;
