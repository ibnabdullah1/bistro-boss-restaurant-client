import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuPage/Menu/Menu";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Order from "../Pages/OrderFood/Order/Order";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Layout/Dashboard/Cart";
import SignUp from "../Pages/SignUp/SignUp";
import AllUsers from "../Layout/Dashboard/AllUsers";
// import SignUp from "../Pages/Home/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: (
          <PrivateRoute>
            <Menu />
          </PrivateRoute>
        ),
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard/users",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;
