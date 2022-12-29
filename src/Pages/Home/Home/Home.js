import React, { useContext } from "react";
import { AuthProvider } from "../../../Context/AuthContext";
import CreatePost from "../CreatePost/CreatePost";
import HomePosts from "../HomePosts/HomePosts";

const Home = () => {
  const { user } = useContext(AuthProvider);
  return (
    <div>
      {user?.email && <CreatePost />}
      <HomePosts />
    </div>
  );
};

export default Home;
