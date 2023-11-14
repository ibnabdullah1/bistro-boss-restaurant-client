import { NavLink, Outlet } from "react-router-dom";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiFillHome, AiFillShop, AiOutlineMenu } from "react-icons/ai";
import { BiSolidCalendar } from "react-icons/bi";
import { RxBorderWidth } from "react-icons/rx";
import { GoCodeReview } from "react-icons/go";
import useCart from "../../Hooks/useCart";
const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-[256px] min-h-screen bg-[#D1A054]">
        <ul className="menu">
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
