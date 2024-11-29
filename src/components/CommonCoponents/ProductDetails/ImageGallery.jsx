import React, { useState } from "react";

const ImageGallery = ({ image }) => {
  const [initailImage, setinitailImage] = useState(
    (image && image[0]) ||
      "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  const [isEnter, setisEnter] = useState({
    clientX: 0,
    clientY: 0,
  });
  const handleMouseEnter = (img, event) => {
    setisEnter({
      ...isEnter,
      clientX: event.clientX,
      clientY: event.clientY,
    });
  };

  return (
    <div>
      <div className="flex gap-x-6 relative">
        <div className="grid grid-rows-4 gap-y-4">
          {image?.map((singleImage) => (
            <div className="bg-blue-50 rounded-sm flex items-center justify-center">
              <img
                src={singleImage}
                alt={singleImage}
                className="w-[190px] h-[138px] rounded object-cover cursor-pointer"
                onClick={() => setinitailImage(singleImage)}
              />
            </div>
          ))}
          <div className="bg-blue-50 rounded-sm flex items-center justify-center">
            <img
              src={
                "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={
                "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              className="w-[190px] h-[138px] rounded object-cover cursor-pointer"
              onClick={() =>
                setinitailImage(
                  "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                )
              }
            />
          </div>
        </div>

        {/* big image  */}
        <div className="bg-white_F5F5F5 rounded flex justify-center items-center w-full  ">
          <img
            src={initailImage}
            alt={initailImage}
            className={`w-[90%] h-[90%] object-cover rounded `}
            onMouseMove={(event) => handleMouseEnter(initailImage, event)}
          />
        </div>
      </div>

      <div
        className={` absolute top-[${isEnter.clientY}px]  left-[${isEnter.clientX}px]`}
      >
        <img
          src={
            "https://images.pexels.com/photos/26903733/pexels-photo-26903733/free-photo-of-black-and-white-shot-of-a-roller-coaster-in-an-amusement-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt={initailImage}
          className={`w-[40%] h-[60%] object-cover rounded `}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
