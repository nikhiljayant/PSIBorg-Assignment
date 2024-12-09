import React from "react";
// Icon
import { RxAvatar } from "react-icons/rx";

// Variable
const table_data = [
  {
    id: 1,
    name: "Alice",
    order_no: 1213457,
    amount: "$124.00",
    status: "Delivered",
  },
  {
    id: 2,
    name: "Bob",
    order_no: 1213457,
    amount: "$124.00",
    status: "Delivered",
  },
  {
    id: 3,
    name: "Charlie",
    order_no: 1213457,
    amount: "$124.00",
    status: "Cancelled",
  },
  {
    id: 4,
    name: "David",
    order_no: 1213457,
    amount: "$124.00",
    status: "Delivered",
  },
  {
    id: 5,
    name: "Nikhil",
    order_no: 1213457,
    amount: "$124.00",
    status: "Cancelled",
  },
];

const RecentOrdersTable = () => {
  return (
    <div className="bg-[#202028] p-3 rounded-md">
      <p className="text-white font-medium text-2xl">Recent Orders</p>
      <table className="text-white text-sm w-full mt-5">
        <thead className="border-b border-slate-700 text-left">
          <th className="pb-2.5">Customer</th>
          <th className="pb-2.5">Order No.</th>
          <th className="pb-2.5">Amount</th>
          <th className="pb-2.5">Status</th>
        </thead>

        <tbody>
          {table_data.map((row) => (
            <tr key={row.id} className="border-b border-slate-700">
              <td className="py-3">
                <div className="flex gap-2 items-center">
                  <RxAvatar className="text-[30px]" />
                  {row.name}
                </div>
              </td>
              <td className="py-3">{row.order_no}</td>
              <td className="py-3">{row.amount}</td>
              <td className="py-3">
                <div
                  className={`py-0.5 rounded-full w-fit px-3 ${
                    row.status === "Delivered"
                      ? "bg-green-900 text-green-400"
                      : "bg-red-900 text-red-400"
                  }`}
                >
                  {row.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrdersTable;
