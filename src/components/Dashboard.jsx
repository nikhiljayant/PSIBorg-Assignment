import React from "react";
// Icon
import { BsFillBagFill } from "react-icons/bs";
import { FaCaretUp } from "react-icons/fa";
import { BsBagXFill } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { GiHamburger } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
// Component
import OrderCard from "./OrderCard";
import RecentOrdersTable from "./RecentOrdersTable";
import Card from "./Card";
import CustomerFeedback from "./CustomerFeedback";
import NetProfitCard from "./NetProfitCard";
import Graph from "./Graph";

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
const goal_card = [
  {
    bgColor: "bg-[#603234]",
    icon: <BiTargetLock className="text-[25px] text-orange-500" />,
    text: "Goals",
  },
  {
    bgColor: "bg-[#293269]",
    icon: <GiHamburger className="text-[23px] text-[#7991D7]" />,
    text: "Popular Dishes",
  },
  {
    bgColor: "bg-[#234960]",
    icon: <MdRestaurantMenu className="text-[25px] text-[#1980A7]" />,
    text: "Goals",
  },
];

const Dashboard = () => {
  return (
    <div className="p-5 flex flex-col gap-5 max-h-[calc(100vh-60px)] overflow-auto">
      <p className="text-white font-medium text-3xl">Dashboard</p>

      <div className="flex lg:flex-row flex-col gap-5 justify-between">
        <div className="lg:w-[70%] w-[100%] flex flex-col gap-5">
          <div className="md:flex grid sm:grid-cols-2 grid-cols-1 gap-5">
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

          <Graph />

          <RecentOrdersTable />
        </div>

        <div className="lg:w-[30%] w-[100%] flex flex-col gap-5">
          <NetProfitCard />

          <div className="bg-[#20202A] lg:w-[400px] flex flex-col gap-3 p-5 rounded-lg">
            {goal_card.map((item) => (
              <Card
                key={item.text}
                bgColor={item.bgColor}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </div>

          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
