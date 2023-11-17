import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useMenu from "../../Hooks/useMenu";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          toast.success("Menu deleted successfully");
        }
      }
    });
  };
  return (
    <div>
      <div>
        <SectionTitle subHeading={"Hurry Up!"} heading={"MANAGE ALL ITEMS"} />
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-right">${item.price}</td>
                <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn text-white hover:text-black btn-ghost bg-[#D1A054]">
                      <FaEdit></FaEdit>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-ghost hover:text-black bg-[#B91C1C]  text-white"
                  >
                    <FaTrashAlt c></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
