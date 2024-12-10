import React from "react";

const CategoryItem = ({ itemData }) => {
  return (
    <div className="mt-20">
      <div className="w-full cursor-pointer text-text_black000000 transition hover:bg-redDB4444 hover:text-white_FFFFFF h-[145px] bg-transparent rounded border-[1px] border-text_black7D8184 flex items-center justify-center ">
        <div className="flex flex-col items-center gap-y-3">
          <span className="text-[30px]">{itemData.img}</span>
          <h1 className="text-lg font-popins font-normal">{itemData.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
