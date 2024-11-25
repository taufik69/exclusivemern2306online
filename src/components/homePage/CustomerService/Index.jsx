import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
const CustomerService = () => {
  const service = [
    {
      id: 1,
      icons: (
        <TbTruckDelivery className="text-4xl text-white_FFFFFF bg-text_black000000 w-[70px] h-[70px] rounded-full p-3" />
      ),
      tittle: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icons: (
        <TfiHeadphoneAlt className="text-4xl text-white_FFFFFF bg-text_black000000 w-[70px] h-[70px] rounded-full p-3" />
      ),
      tittle: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },

    {
      id: 3,
      icons: (
        <TbTruckDelivery className="text-4xl text-white_FFFFFF bg-text_black000000 w-[70px] h-[70px] rounded-full p-3" />
      ),
      tittle: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
  ];
  return (
    <div className="my-20">
      <div className="container">
        <div className="flex items-center justify-around">
          {service?.map((item) => (
            <div className="flex flex-col items-center justify-center">
              <span className="inline-block  p-3 rounded-full bg-[rgba(47,46,48,0.3)] ">
                {item.icons}
              </span>
              <h1 className="text-lg font-semibold font-popins text-text_black000000 mt-6">
                {item.tittle}
              </h1>
              <h3 className="text-sm font-normal font-popins text-text_black000000 mt-2">
                {item.description}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
