import React, { useEffect, useState } from "react";
import exprerienceImag from "../../../assets/experience.png";

const Experience = ({ timeDuration = 1 }) => {
  const [time, settime] = useState(timeDuration * 24 * 60 * 60 * 1000 || 0);
  useEffect(() => {
    const worker = new Worker(
      new URL("../../../worker/coundown2Worker.js", import.meta.url)
    );
    worker.postMessage(time);
    worker.onmessage = (e) => {
      settime(e.data);
    };
  }, []);

  //   format the countDown date
  const formatDate = (miliSecond) => {
    let total_second = parseInt(Math.floor(miliSecond / 1000));
    let total_minutes = parseInt(Math.floor(total_second / 60));
    let total_Hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_Hours / 24));
    let second = parseInt(Math.floor(total_second % 60));
    let minutes = parseInt(Math.floor(total_minutes % 60));
    let hours = parseInt(Math.floor(total_Hours % 60));
    return { days, hours, minutes, second };
  };
  const { days, hours, minutes, second } = formatDate(time);

  return (
    <div className="my-[120px] overflow-hidden ">
      <div className="container">
        <div className="flex ">
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
                  {days ? days : 0}
                </p>
                <p className="text-text_black000000 text-[11px] font-normal font-popins">
                  Days
                </p>
              </div>
              <div className="w-[62px] h-[62px] rounded-full bg-white_FFFFFF flex flex-col items-center justify-center">
                <p className="text-text_black000000 text-[16px] font-semibold font-popins">
                  {hours ? hours : 0}
                </p>
                <p className="text-text_black000000 text-[11px] font-normal font-popins">
                  Hours
                </p>
              </div>

              <div className="w-[62px] h-[62px] rounded-full bg-white_FFFFFF flex flex-col items-center justify-center">
                <p className="text-text_black000000 text-[16px] font-semibold font-popins">
                  {minutes}
                </p>
                <p className="text-text_black000000 text-[11px] font-normal font-popins">
                  Minutes
                </p>
              </div>

              <div className="w-[62px] h-[62px] rounded-full bg-white_FFFFFF flex flex-col items-center justify-center">
                <p className="text-text_black000000 text-[16px] font-semibold font-popins">
                  {second}
                </p>
                <p className="text-text_black000000 text-[11px] font-normal font-popins">
                  Second
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
