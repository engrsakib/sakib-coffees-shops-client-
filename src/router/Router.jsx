import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCofee from "../pages/AddCofee";
import Home from "../pages/Home";
import UpdateCoffe from "../pages/UpdateCoffe";
import Coffeeall from "../pages/Coffeeall";
import PublicRoutes from "./PublicRouter";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Users from "../pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/coffe/add-coffe",
        element: <AddCofee></AddCofee>,
        // loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/coffe",
        element: <Coffeeall></Coffeeall>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/coffe/update-coffe/:id",
        element: <UpdateCoffe></UpdateCoffe>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/auth/user/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/auth/user/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/user",
        element: <Users></Users>,
        loader: () => fetch(`http://localhost:5000/users`),
      },
    ],
  },
]);

export default router;
