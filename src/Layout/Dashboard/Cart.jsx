import { AiFillDelete } from "react-icons/ai";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const items = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle subHeading="My Cart" heading="WANNA ADD MORE?" />
      <div className="flex justify-evenly items-center ">
        <h2>Total Items: {cart.length}</h2>
        <h2>Total Price: {items}</h2>

        {cart.length > 0 ? (
          <Link to={"/dashboard/reservation"}>
            <button className="bg-[#D1A054] rounded-md p-3 text-white font-semibold">
              Pay
            </button>
          </Link>
        ) : (
          <button className="bg-gray-200 rounded-md p-3 text-gray-400 font-semibold">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead className="bg-[#D1A054]  text-white ">
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div>
                      <img
                        className=" w-[40px] h-[40px]"
                        src={item?.image}
                        alt=""
                      />
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>${item?.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="bg-[#B91C1C] p-3 text-white rounded-md text-2xl"
                    >
                      <AiFillDelete />
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

export default Cart;
