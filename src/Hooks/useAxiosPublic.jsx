import axios from "axios";

const axiosSecurePublic = axios.create({
  baseURL: "https://bistro-boss-server-ashy-omega.vercel.app",
});
const useAxiosPublic = () => {
  return axiosSecurePublic;
};

export default useAxiosPublic;
