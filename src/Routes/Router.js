import Main from "../LayOut/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import Register from "../Pages/Register/Register";
import SinglePost from "../Pages/SinglePost/SinglePost";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/posts/:id",
        element: <SinglePost />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/posts/${params.id}`),
      },
    ],
  },
]);
