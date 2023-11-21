/* eslint-disable react/jsx-no-undef */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AiFillIdcard } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { SiCodechef } from "react-icons/si";
import { PiUsersThreeFill } from "react-icons/pi";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#2dc6ce"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: "admin_stats",
    queryFn: async () => {
      const res = await axiosSecure.get("/admin_stats");
      return res.data;
    },
  });
  const { data: chartData = [] } = useQuery({
    queryKey: "order_stats",
    queryFn: async () => {
      const res = await axiosSecure.get("/order_stats");
      return res.data;
    },
  });

  // custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom shape for the pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.totalRevenue };
  });
  return (
    <div>
      <h2 className="text-3xl font-medium">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "Back!"}
      </h2>
      <div className="grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          style={{
            borderRadius: "8px",
            background: "linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)",
          }}
          className="py-5 px-10 text-white flex gap-4 justify-center items-center"
        >
          <div>
            <AiFillIdcard className="text-5xl font-extrabold" />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">
              {stats?.totalRevenue?.toFixed(1)}
            </h2>{" "}
            <p className="text-2xl font-normal">Revenue</p>
          </div>
        </div>
        <div
          style={{
            borderRadius: "8px",
            background: "linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)",
          }}
          className="py-5 px-10 text-white flex gap-4 justify-center items-center"
        >
          <div>
            <PiUsersThreeFill className="text-5xl font-extrabold" />
          </div>
          <div>
            <h2 className="text-5xl font-extrabold">{stats?.users}</h2>{" "}
            <p className="text-2xl font-normal">Customers</p>
          </div>
        </div>
        <div
          style={{
            borderRadius: "8px",
            background: "linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)",
          }}
          className="py-5 px-10 text-white flex gap-4 justify-center items-center"
        >
          <div>
            <SiCodechef className="text-5xl font-extrabold" />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">{stats?.menuItems}</h2>{" "}
            <p className="text-2xl font-normal">Products</p>
          </div>
        </div>
        <div
          style={{
            borderRadius: "8px",
            background: "linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)",
          }}
          className="py-5 px-10 text-white flex gap-4 justify-center items-center"
        >
          <div>
            <TbTruckDelivery className="text-5xl font-extrabold" />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">{stats?.orders}</h2>
            <p className="text-2xl font-normal">Orders</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
