import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
// useEffect(() => {
//     fetch("https://bistro-boss-server-ashy-omega.vercel.app/carts")
//       .then((res) => res.json())
//       .then((data) => setCart(data));
//   }, []);
