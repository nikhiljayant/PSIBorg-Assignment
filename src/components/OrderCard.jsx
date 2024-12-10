import React from "react";

const OrderCard = ({
  iconBg,
  mainIcon,
  title,
  count,
  childIcon,
  percentText,
  percentColor
}) => {

  return (
    <div className="bg-[#20202A] sm:w-[250px] rounded-md p-5 md:w-1/4">
      <div className={`${iconBg} rounded-md p-2 w-fit`}>{mainIcon}</div>
      <p className="text-sm text-white mt-1.5">{title}</p>
      <div className="text-white mt-3 flex items-center justify-between">
        <p className="text-3xl font-semibold">{count}</p>
        <p className={`${percentColor} flex items-center`}>
          {childIcon}
          <span>{percentText}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
