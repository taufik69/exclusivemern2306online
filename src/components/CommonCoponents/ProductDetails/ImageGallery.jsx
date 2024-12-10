import React, { useEffect, useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { useParams } from "react-router-dom";
const ImageGallery = ({ image }) => {
  const params = useParams();

  const [initailImage, setinitailImage] = useState(
    image[0] ||
      "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

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
          <InnerImageZoom
            src={initailImage === undefined ? image[0] : initailImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
