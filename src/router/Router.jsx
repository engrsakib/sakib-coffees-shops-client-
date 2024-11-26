import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCofee from "../pages/AddCofee";
import Home from "../pages/Home";
import UpdateCoffe from "../pages/UpdateCoffe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/coffe/add-coffe",
        element: <AddCofee></AddCofee>,
      },
      {
        path: "/coffe/update-coffe",
        element: <UpdateCoffe></UpdateCoffe>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
