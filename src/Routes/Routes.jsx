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
import AddItems from "../Layout/Dashboard/AddItems";
import AdminRoute from "./adminRoute";
import ManageItems from "../Layout/Dashboard/ManageItems";
import UpdateItem from "../Layout/Dashboard/UpdateItem";
import Payment from "../Layout/Dashboard/Payment";
import PaymentHistory from "../Layout/Dashboard/PaymentHistory";
import AdminHome from "../Layout/Dashboard/AdminHome";
import UserHome from "../Layout/Dashboard/userHome";
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
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "additems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bistro-boss-server-ashy-omega.vercel.app/menu/${params.id}`
          ),
      },
      {
        path: "adminhome",
        element: <AdminHome />,
      },
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "reservation",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
