import React from "react";

const Heading = ({ title, description }) => {
  return (
    <div className="flex flex-col items-start gap-y-6">
      <div className="flex items-center gap-x-4">
        <span className="w-[20px] h-[40px] rounded bg-redDB4444 block"></span>
        <span className="font-popins font-semibold text-md text-redDB4444 capitalize">
          {title ? title : "Today’s"}
        </span>
      </div>
      <div>
        <h1 className="font-inter font-semibold text-[36px] text-text_black000000 capitalize">
          {description ? description : "Flash Sales"}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
