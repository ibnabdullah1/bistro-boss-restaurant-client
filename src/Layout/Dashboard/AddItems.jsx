import { MdOutlineRestaurant } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddItems = () => {
  const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    // image upload to imgBb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item to the server with the image url
      const menuItem = {
        name: data.recipe_name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuResponse = await axiosSecure.post("/menu", menuItem);
      console.log(menuResponse.data);
      if (menuResponse.data.insertedId) {
        toast.success("Menu was added successfully");
      }
    }
    console.log(res.data);
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
                defaultValue="default"
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
          <button
            style={{
              background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
            }}
            className="py-2 px-3 flex gap-1 justify-center items-center rounded text-white"
          >
            Add Item <MdOutlineRestaurant />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
