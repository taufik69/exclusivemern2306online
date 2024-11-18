import React from "react";
import exprerienceImag from "../../../assets/experience.png";

const Experience = () => {
  return (
    <div className="my-[120px] overflow-hidden ">
      <div className="container">
        <div className="flex  ">
          <div className="w-1/2 py-[69px] px-10 bg-text_black000000">
            <h3 className="text-button00FF66 text-[16px] font-semibold font-popins">
              Categories
            </h3>
            <h2 className="text-[48px] font-inter font-semibold text-white_FFFFFF leading-[60px] mt-[32px]">
              Enhance Your Music Experience
            </h2>
            <div className="flex items-center mt-[32px] gap-x-6">
              <div className="w-[62px] h-[62px] rounded-full bg-white_FFFFFF flex flex-col items-center justify-center">
                <p className="text-text_black000000 text-[16px] font-semibold font-popins">
                  23
                </p>
                <p className="text-text_black000000 text-[11px] font-normal font-popins">
                  Hours
                </p>
              </div>
              <div className="w-[62px] h-[62px] rounded-full bg-white_FFFFFF flex flex-col items-center justify-center">
                <p className="text-text_black000000 text-[16px] font-semibold font-popins">
                  23
                </p>
                <p className="text-text_black000000 text-[11px] font-normal font-popins">
                  Hours
                </p>
              </div>

              <div className="w-[62px] h-[62px] rounded-full bg-white_FFFFFF flex flex-col items-center justify-center">
                <p className="text-text_black000000 text-[16px] font-semibold font-popins">
                  23
                </p>
                <p className="text-text_black000000 text-[11px] font-normal font-popins">
                  Hours
                </p>
              </div>

              <div className="w-[62px] h-[62px] rounded-full bg-white_FFFFFF flex flex-col items-center justify-center">
                <p className="text-text_black000000 text-[16px] font-semibold font-popins">
                  23
                </p>
                <p className="text-text_black000000 text-[11px] font-normal font-popins">
                  Hours
                </p>
              </div>
            </div>

            <div className="bg-button00FF66 inline-block mt-[40px]  text-md font-popins font-medium text-white_FFFFFF px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
              Buy Now
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center imagShadow bg-text_black000000 ">
            <img src={exprerienceImag} alt={exprerienceImag} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
