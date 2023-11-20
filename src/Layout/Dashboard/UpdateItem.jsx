import { MdOutlineRestaurant } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UpdateItem = () => {
  const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const { name, category, recipe, price, _id } = useLoaderData();
  // const item = useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };
  return (
    <div>
      <SectionTitle heading={"ADD AN ITEM"} subHeading={"What's new?"} />
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#F3F3F3] px-10 py-14 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-6">
              <label
                htmlFor="recipe_name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Recipe name*
              </label>
              <input
                type="text"
                placeholder="Recipe Name"
                defaultValue={name}
                {...register("recipe_name", { required: true })}
                required
                className="shadow-sm bg-white   text-gray-900 sm:text-sm rounded  block w-full p-2.5"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Category"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Category*
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                type="text"
                name="category"
                id="category"
                className="shadow-sm bg-white   text-gray-900 sm:text-sm rounded  block w-full p-2.5"
                placeholder="Category"
                required=""
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Price*
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                name="price"
                defaultValue={price}
                id="price"
                className="shadow-sm bg-white   text-gray-900 sm:text-sm rounded  block w-full p-2.5"
                placeholder="price"
                required=""
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="Recipe_details"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Recipe Details*
              </label>
              <textarea
                {...register("recipe", { required: true })}
                id="recipe"
                defaultValue={recipe}
                rows="6"
                className="shadow-sm bg-white   text-gray-900 sm:text-sm rounded  block w-full p-2.5"
                placeholder="Recipe Details"
              ></textarea>
              <input
                {...register("image", { required: true })}
                type="file"
                name="image"
                className="my-4 block w-full text-base file:mr-4 file:rounded file:border-0 file:bg-[#E8E8E8] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-[#444444] hover:file:bg-[#E8E8E8] focus:outline-none disabled:pointer-events-none disabled:opacity-60"
              />
            </div>
          </div>
          <div className="flex gap-1 justify-center items-center mt-4">
            <button
              style={{
                background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
              }}
              className="py-2 px-3 flex gap-1 justify-center items-center rounded text-white"
            >
              Update Recipe Details
              <MdOutlineRestaurant />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
