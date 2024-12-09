import React from "react";
// Icon
import { BsFillBagFill } from "react-icons/bs";
import { FaCaretUp } from "react-icons/fa";
import { BsBagXFill } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
// Component
import OrderCard from "./OrderCard";
import RecentOrdersTable from "./RecentOrdersTable";

// Variable
const order_card_data = [
  {
    bg: "bg-[#29355F]",
    icon: <BsFillBagFill className="text-[23px] text-[#3D5BED]" />,
    title: "Total Orders",
    count: 75,
    percentCount: "3%",
    childIcon: <FaCaretUp />,
    percentColor: "text-green-600",
  },
  {
    bg: "bg-[#165145]",
    icon: <BsFillBagCheckFill className="text-[23px] text-[#00CC8A]" />,
    title: "Total Delivered",
    count: 70,
    percentCount: "3%",
    childIcon: <FaCaretDown />,
    percentColor: "text-red-600",
  },
  {
    bg: "bg-[#5D3135]",
    icon: <BsBagXFill className="text-[23px] text-[#F15D5D]" />,
    title: "Total Cancelled",
    count: 5,
    percentCount: "3%",
    childIcon: <FaCaretUp />,
    percentColor: "text-green-600",
  },
  {
    bg: "bg-[#5B2A4B]",
    icon: <MdAutoGraph className="text-[25px] text-[#E93F9B]" />,
    title: "Total Revenue",
    count: "$12k",
    percentCount: "3%",
    childIcon: <FaCaretDown />,
    percentColor: "text-red-600",
  },
];

const Dashboard = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <p className="text-white font-medium text-3xl">Dashboard</p>

      <div className="flex gap-5">
        <div className="w-[60%] flex flex-col gap-5">
          <div className="flex gap-5">
            {order_card_data.map((order) => (
              <OrderCard
                iconBg={order.bg}
                mainIcon={order.icon}
                childIcon={order.childIcon}
                count={order.count}
                percentText={order.percentCount}
                title={order.title}
                percentColor={order.percentColor}
              />
            ))}
          </div>

          <RecentOrdersTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
