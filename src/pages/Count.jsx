import React, { useEffect, useState } from "react";

const Count = () => {
  const [time, settime] = useState(6 * 1000);
  useEffect(() => {
    let stop = setTimeout(() => {
      settime(time - 1000);
    }, 1000);
    if (time == 0) {
      clearInterval(stop);
    }
  }, [time]);

  const getFormattedTime = (miliSecond) => {
    let totalSecond = parseInt(Math.floor(miliSecond / 1000));
    let totalMinutes = parseInt(Math.floor(totalSecond / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHours / 24));
    let second = parseInt(totalSecond % 60);
    let minutes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 60);

    return `${days} Days: ${minutes} Minutes : ${hours} Hours: ${second} `;
  };
  return (
    <div className="flex justify-center items-center h-dvh">
      {getFormattedTime(time)}
    </div>
  );
};

export default Count;
