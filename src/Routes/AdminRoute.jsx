import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();
  if (isAdminLoading || loading) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center ">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (isAdmin && user) {
    return children;
  }

  return <Navigate state={{ from: location }} to={"/login"}></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
