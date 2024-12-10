import React from "react";
// MUI
import { Box, CircularProgress } from "@mui/material";
// Icon
import { FaCaretUp } from "react-icons/fa";

const NetProfitCard = () => {
  return (
    <div className="bg-[#20202A] lg:w-[400px] p-3 rounded-lg flex justify-between">
      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-5">
          <p className="text-[14px] text-slate-300">Net Profit</p>
          <div className="flex flex-col gap-3 mt-2.5 w-full">
            <p className="text-white text-[31px] font-semibold">$ 6759.25</p>
            <p className="text-green-600 flex items-center gap-0.5">
              <FaCaretUp />
              <span>3%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[170px] flex flex-col ml-3">
        <Box position="relative" display="inline-flex">
          {/* MUI Circular Progress with custom size */}
          <CircularProgress
            variant="determinate"
            value="75"
            size={120} // Adjust the size of the gauge
            thickness={5} // Adjust the thickness of the gauge
            sx={{
              color: "#3b82f6", // Main gauge color
            }}
          />
          {/* Overlay Text */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            sx={{
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
            className="-ml-5"
          >
            <p
              className="flex flex-col"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <span>75%</span>{" "}
              <span className="text-[10px]">Goal Completed</span>
            </p>
          </Box>
        </Box>
        <p className="text-[10px] text-slate-600 mt-0.5">
          These values have been rounded-off
        </p>
      </div>
    </div>
  );
};

export default NetProfitCard;
