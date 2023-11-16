import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EEFF25]  font-semibold "
              : ""
          }
        >
          HOME
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EEFF25]  font-semibold "
              : ""
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EEFF25]  font-semibold "
              : ""
          }
        >
          DASHBOARD
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EEFF25]  font-semibold "
              : ""
          }
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EEFF25]  font-semibold "
              : ""
          }
        >
          OUR SHOP
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar justify-between items-center fixed left-0 px-5 right-0 top-0 z-10 bg-opacity-30 max-w-screen-2xl mx-auto bg-black text-white">
      <div className="navbar lg:hidden">
        <div className="dropdown w-full">
          <div className="flex justify-between  w-full">
            <div className="flex items-center">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <div>
                <h2>BISTRO BOSS</h2>
                <p>Restaurant</p>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center ">
              <Link to="/dashboard/cart">
                <div className="indicator relative top-2">
                  <span className="indicator-item text-black  flex justify-center items-center rounded-[50%] text-xs px-2 py-1 bg-[#fff705]">
                    {cart?.length}
                  </span>
                  <img
                    className="w-[30px]"
                    src="https://www.svgrepo.com/show/227489/shopping-cart.svg"
                    alt=""
                  />
                </div>
              </Link>

              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar online"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://www.svgrepo.com/show/525577/user-circle.svg"
                    }
                    alt={user?.displayName}
                  />
                </div>
              </label>
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu  dropdown-content mt-3 z-[1] w-80 p-2 shadow bg-zinc-800 rounded"
          >
            {navLinks}

            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#EEFF25] font-semibold "
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className=" hidden justify-center items-center  lg:flex">
        <div>
          <h2 className="text-[27px] font-bold">BISTRO BOSS</h2>
          <p className="tracking-[5px] text-xl uppercase">Restaurant</p>
        </div>
      </div>
      <div className=" hidden lg:flex">
        <ul className="px-1 text-xl flex  font-semibold gap-8">{navLinks}</ul>
        <Link to="/dashboard/cart">
          <div className="indicator ml-5">
            <span className="indicator-item text-black w-[20px] h-[20px] flex justify-center items-center rounded-[50%] text-xs p-2 bg-[#fff705]">
              {cart?.length}
            </span>
            <img
              className="w-[30px]"
              src="https://www.svgrepo.com/show/227489/shopping-cart.svg"
              alt=""
            />
          </div>
        </Link>
        {user?.email ? (
          <div
            className="dropdown flex items-center dropdown-end ml-4
          "
          >
            {" "}
            <button
              onClick={handleLogOut}
              className=" uppercase  text-white text-xl font-semibold py-2 px-4 rounded"
            >
              SIGN OUT
            </button>
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar online"
            >
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://www.svgrepo.com/show/525577/user-circle.svg"
                  }
                  alt={user?.displayName}
                />
              </div>
            </label>
          </div>
        ) : (
          <Link to="/login">
            <button className="  uppercase text-xl ml-4 text-white font-semibold py-2 px-4 rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
