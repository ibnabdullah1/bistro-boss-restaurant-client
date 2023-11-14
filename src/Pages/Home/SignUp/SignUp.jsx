import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImg from "../../../assets/others/authentication2 1.png";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
const SignUp = () => {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { createUser, handleUpdateProfile } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const img = e.target.img.value;
    setError("");
    if (
      password.length < 6 ||
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    ) {
      setError(
        "Invalid password. Password must have at least 6 characters, one capital letter, and one special character."
      );
      return;
    } else {
      setError("");
    }

    // creating a new user
    createUser(email, password)
      .then(() => {
        handleUpdateProfile(name, img).then(() => {
          toast.success("User created successfully");
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/rcwD2y4/authentication.png")`,
      }}
      className="flex justify-center items-center min-h-screen py-10"
    >
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        </div>
        <form
          onSubmit={handleRegister}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#D1A054] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#D1A054] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#D1A054] bg-gray-200 text-gray-900"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id=""
                  placeholder="Enter your password"
                />
                <span
                  className="absolute top-[15px] right-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#D1A054] w-full rounded-md py-3 text-white"
            >
              Continue
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[#D1A054] text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
      <div className="">
        <img className="w-[648px] h-auto" src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
