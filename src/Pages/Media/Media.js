import { useQuery } from "@tanstack/react-query";
import React from "react";
import PostCard from "../Share/PostCard/PostCard";

const Media = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://buddy-server.vercel.app/posts");
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="px-2">
      {isLoading && <p>Please wait ...</p>}
      {posts &&
        posts.map((post) => <PostCard key={post._id} post={post}></PostCard>)}
    </div>
  );
};

export default Media;
