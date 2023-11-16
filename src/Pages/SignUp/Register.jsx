// import { useContext } from "react";
// import { Helmet } from "react-helmet-async";
// import { FcGoogle } from "react-icons/fc";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../../providers/AuthProvider";
// import loginImg from "../../../assets/others/authentication2 1.png";
// const SignUp = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const { createUser, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log(data);

//     createUser(data.email, data.password).then((result) => {
//       const loggedUser = result.user;
//       const password = data.password;
//       console.log(password);
//       console.log(loggedUser);
//       updateUserProfile(data.name, data.photoURL)
//         .then(() => {
//           console.log("user profile info updated");
//           reset();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "User created successfully.",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           navigate("/");
//         })
//         .catch((error) => console.log(error));
//     });
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url("https://i.ibb.co/rcwD2y4/authentication.png")`,
//       }}
//       className="flex justify-around items-center min-h-screen py-10"
//     >
//       <Helmet>
//         <title>Bistro Boss | Sign Up</title>
//       </Helmet>
//       <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-900">
//         <div className="mb-8 text-center">
//           <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)} className=" ">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Name</span>
//             </label>
//             <input
//               type="text"
//               {...register("name", { required: true })}
//               name="name"
//               placeholder="Name"
//               className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#D1A054] bg-gray-200 text-gray-900"
//             />
//             {errors.name && (
//               <span className="text-red-600">Name is required</span>
//             )}
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Photo URL</span>
//             </label>
//             <input
//               type="text"
//               {...register("photoURL", { required: true })}
//               placeholder="Photo URL"
//               className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#D1A054] bg-gray-200 text-gray-900"
//             />
//             {errors.photoURL && (
//               <span className="text-red-600">Photo URL is required</span>
//             )}
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input
//               type="email"
//               {...register("email", { required: true })}
//               name="email"
//               placeholder="email"
//               className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#D1A054] bg-gray-200 text-gray-900"
//             />
//             {errors.email && (
//               <span className="text-red-600">Email is required</span>
//             )}
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Password</span>
//             </label>
//             <input
//               //   type="password"
//               {...register("password", {
//                 required: true,
//                 minLength: 6,
//                 maxLength: 20,
//                 pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
//               })}
//               placeholder="password"
//               className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#D1A054] bg-gray-200 text-gray-900"
//             />
//             {errors.password?.type === "required" && (
//               <p className="text-red-600">Password is required</p>
//             )}
//             {errors.password?.type === "minLength" && (
//               <p className="text-red-600">Password must be 6 characters</p>
//             )}
//             {errors.password?.type === "maxLength" && (
//               <p className="text-red-600">
//                 Password must be less than 20 characters
//               </p>
//             )}
//             {errors.password?.type === "pattern" && (
//               <p className="text-red-600">
//                 Password must have one Uppercase one lower case, one number and
//                 one special character.
//               </p>
//             )}
//             <label className="label">
//               <a href="#" className="label-text-alt link link-hover">
//                 Forgot password?
//               </a>
//             </label>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="bg-[#D1A054] w-full rounded-md py-3 text-white"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>
//         <div className="flex items-center pt-4 space-x-1">
//           <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
//           <p className="px-3 text-sm dark:text-gray-400">
//             Signup with social accounts
//           </p>
//           <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
//         </div>
//         <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
//           <FcGoogle size={32} />

//           <p>Continue with Google</p>
//         </div>
//         <p className="px-6 text-sm text-center text-gray-400">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="hover:underline hover:text-[#D1A054] text-gray-600"
//           >
//             Login
//           </Link>
//           .
//         </p>
//       </div>
//       <div className="">
//         <img className="w-[648px] h-auto" src={loginImg} alt="" />
//       </div>
//     </div>
//   );
// };

// export default SignUp;
