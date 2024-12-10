import React from "react";
// MUI
import { LineChart } from "@mui/x-charts";
// Icon
import { FaCaretDown } from "react-icons/fa";

const Graph = () => {
  return (
    <div className="bg-[#20202A] flex flex-col p-3 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-white text-xl font-medium">Activity</p>
        <div className="bg-[#4C4D52] py-2 px-4 text-white text-xs rounded-full h-fit flex items-center gap-1">
          <p>Weekly</p>
          <FaCaretDown />
        </div>
      </div>

      <LineChart
        xAxis={[
          {
            data: [1, 2, 3, 5, 8, 10, 12, 15, 16],
            tickFontSize: 12,
            tickColor: "white",
            labelFontSize: 14,
            labelColor: "white",
          },
        ]}
        yAxis={[
          {
            tickFontSize: 12,
            tickColor: "white",
            labelFontSize: 14,
            labelColor: "white",
          },
        ]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            valueFormatter: (value) =>
              value == null ? "NaN" : value.toString(),
          },
          {
            data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
          },
          {
            data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
            valueFormatter: (value) => (value == null ? "?" : value.toString()),
          },
        ]}
        height={200}
        margin={{ top: 10, bottom: 20 }}
        className="mt-5 border bg-purple-200 rounded-md"
      />
    </div>
  );
};

export default Graph;
