import React, { useEffect, useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const Timer = ({ timeofOffer }) => {
  const [time, settime] = useState(timeofOffer * 24 * 60 * 60 * 1000 || 0);
  useEffect(() => {
    const worker = new Worker(
      new URL("../../CountDownWorker.js", import.meta.url)
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
    <div className="flex items-center gap-x-4">
      <div className="flex flex-col items-start ">
        <span className="font-medium text-[12px] font-popins text-text_black000000">
          Days
        </span>
        <div className="flex items-center gap-x-3">
          <h1 className="text-text_black000000 font-bold font-inter text-[32px]">
            {days < 10 && `0${days}`}
          </h1>
          <span className="text-redDB4444 text-xl">
            <IoEllipsisVerticalSharp />
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start ">
        <span className="font-medium text-[12px] font-popins text-text_black000000">
          hours
        </span>
        <div className="flex items-center gap-x-3">
          <h1 className="text-text_black000000 font-bold font-inter text-[32px]">
            {hours && hours}
          </h1>
          <span className="text-redDB4444 text-xl">
            <IoEllipsisVerticalSharp />
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start ">
        <span className="font-medium text-[12px] font-popins text-text_black000000">
          Minutes
        </span>
        <div className="flex items-center gap-x-3">
          <h1 className="text-text_black000000 font-bold font-inter text-[32px]">
            {minutes && minutes}
          </h1>
          <span className="text-redDB4444 text-xl">
            <IoEllipsisVerticalSharp />
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start ">
        <span className="font-medium text-[12px] font-popins text-text_black000000">
          Seconds
        </span>
        <div className="flex items-center gap-x-3">
          <h1 className="text-text_black000000 font-bold font-inter text-[32px]">
            {second && second}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
