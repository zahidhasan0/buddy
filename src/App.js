import { RouterProvider } from "react-router-dom";

import { router } from "./Routes/Router";

function App() {
  return (
    <div className="text-black bg-gray-200 max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
