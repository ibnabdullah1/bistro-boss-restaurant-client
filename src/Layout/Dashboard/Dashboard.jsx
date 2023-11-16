import { NavLink, Outlet } from "react-router-dom";
import { BsFillCartDashFill } from "react-icons/bs";
import {
  AiFillBook,
  AiFillContacts,
  AiFillHome,
  AiFillShop,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdOutlineRestaurant } from "react-icons/md";
import { BiSolidCalendar } from "react-icons/bi";
import { RxBorderWidth } from "react-icons/rx";
import { GoCodeReview } from "react-icons/go";
import useCart from "../../Hooks/useCart";
import { FaChartBar, FaUsers } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    if (user.email == "bistroadmin@gmail.com") {
      setIsAdmin(true);
    } else {
      setIsAdmin(true);
    }
  }, [user.email]);
  // TODO:
  return (
    <div className="flex">
      <div className="w-[256px] min-h-screen bg-[#D1A054]">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <AiFillHome /> Admin Home
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to="/dashboard/additems">
                  <MdOutlineRestaurant /> Add items
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to="/dashboard/manageitems">
                  <FaChartBar /> Manage items
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to="/dashboard/managebookings">
                  <AiFillBook /> Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers /> All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <AiFillHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <BiSolidCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <BsFillCartDashFill /> My cart (
                  {cart.length > 0 ? cart.length : "0"})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <GoCodeReview /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <RxBorderWidth /> My Booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <AiFillHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <AiOutlineMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <AiFillContacts />
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <AiFillShop />
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
