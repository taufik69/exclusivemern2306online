import React from "react";
import Heading from "../../CommonCoponents/Heading";
import newArrivalLeftImage from "../../../assets/arrival/playstaatio.png";
import womenCollection from "../../../assets/arrival/womenCollenction.png";
import spekar from "../../../assets/arrival/spekar.png";
import perfume from "../../../assets/arrival/perfume.png";
const NewArrival = () => {
  return (
    <div className="my-[140px]">
      <div className="container">
        <Heading title={"Featured"} description={"New Arrival"} />
        <div className="flex justify-between h-[600px] mt-[60px]">
          <div className="w-[58%]  h-full">
            <img
              src={newArrivalLeftImage}
              alt={newArrivalLeftImage}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="w-[40%]  bg-white_FFFFFF flex flex-col items-start gap-y-[16px] ">
            <div className="w-full h-1/2 rounded-sm">
              <img
                src={womenCollection}
                alt={womenCollection}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            <div className="flex gap-x-[16px] h-[50%] w-full ">
              <div className="w-1/2 bg-text_black000000 h-full">
                <img
                  src={spekar}
                  alt={spekar}
                  className="w-[270px] h-[284px] object-cover p-4 rounded-sm"
                />
              </div>
              <div className="w-1/2 bg-text_black000000  h-full">
                <img
                  src={spekar}
                  alt={spekar}
                  className="w-[270px] h-[284px] object-cover p-4 rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
