import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");

  return (
    <div>
      {noHeaderFooter || <Navbar />}
      {noHeaderFooter || <Outlet />}
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
