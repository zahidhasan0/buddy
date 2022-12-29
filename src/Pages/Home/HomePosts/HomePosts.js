import { useQuery } from "@tanstack/react-query";
import React from "react";
import PostCard from "../../Share/PostCard/PostCard";

const HomePosts = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/homePosts");
      const data = res.json();
      return data;
    },
  });
  console.log(posts);
  return (
    <div>
      {posts &&
        posts.map((post) => <PostCard key={post._id} post={post}></PostCard>)}
    </div>
  );
};

export default HomePosts;
