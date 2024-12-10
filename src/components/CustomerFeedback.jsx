import React from "react";
// Icon
import { FaStar } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const CustomerFeedback = () => {
  return (
    <div className="bg-[#20202A] lg:w-[400px] h-[380px] overflow-auto p-5 rounded-lg">
      <p className="text-white text-xl font-medium">Customer's Feedback</p>
      {Array.from({ length: 2 }).map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-2.5 border-b pb-2.5 border-slate-600"
        >
          <div className="flex gap-2 text-white items-center mt-5">
            <RxAvatar className="text-[25px]" />
            <span>Jenny Wilson</span>
          </div>
          <div className="flex gap-1">
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-white" />
          </div>
          <p className="text-[14px] text-slate-400">
            The wind rustled through the trees, carrying the faint scent of rain
            that was yet to fall. Somewhere in the distance, a bird called out,
            its song lonely but beautiful. The sky, heavy with clouds, seemed to
            stretch on forever, casting a soft, grey light over the quiet
            landscape.
          </p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
