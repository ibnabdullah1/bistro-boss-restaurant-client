import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle subHeading={"At a Glance!"} heading={"PAYMENT HISTORY"} />
      <h2 className="text-2xl font-semibold my-3">
        Total Payments: {payments.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className="bg-[#D1A054] uppercase text-white ">
            <tr>
              <th>EMAIL</th>
              <th>TOTAL PRICE</th>
              <th>Transaction Id</th>
              <th>PAYMENT DATE</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td>{payment.email}</td>
                <td>${payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.date}</td>
                <td>
                  <button className="uppercase font-semibold bg-indigo-600 text-white px-3 py-2 rounded">
                    {payment.status}
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

export default PaymentHistory;
