import React from "react";
import Heading from "../../CommonCoponents/Heading";
import playstation from "../../../assets/arrival/playstaatio.png";
import spekar from "../../../assets/arrival/spekar.png";
import womenCollenction from "../../../assets/arrival/womenCollenction.png";
import perfume from "../../../assets/arrival/perfume.png";
const NewArrival = () => {
  return (
    <div className="mt-[178px] mb-[140px]">
      <div className="container">
        <Heading title={"Featured"} description={"New Arrival"} />

        <div className="flex">
          <div className="w-1/2">
            <img
              src={playstation}
              alt={playstation}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-1/2 ">
            <div className="w-full bg-red-400">
              <img
                src={womenCollenction}
                alt={womenCollenction}
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <div className="">
                <img
                  src={womenCollenction}
                  alt={womenCollenction}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="">
                <img
                  src={womenCollenction}
                  alt={womenCollenction}
                  className="w-full h-auto object-cover"
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
