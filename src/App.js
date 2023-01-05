import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";

import { router } from "./Routes/Router";

function App() {
  const { isDark, setIsDark } = useContext(AuthProvider);
  return (
    <div
      className={
        isDark
          ? " bg-gray-700 max-w-[1440px] mx-auto"
          : "text-black bg-gray-200 max-w-[1440px] mx-auto"
      }
    >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
