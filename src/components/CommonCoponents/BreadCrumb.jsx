import React from "react";
import { useLocation, Link } from "react-router-dom";
export const BreadCrumb = () => {
  const { pathname } = useLocation();

  let pathnameArr = pathname.split("/").filter((path) => path);
  let BreadCrumbPath = "";
 

  return (
    <div className="py-20">
      <div className="container">
        <div className="flex items-center gap-x-2">
          <span className="inline-block bg-green-500 px-2 py-1 rounded-sm text-white_FFFFFF font-popins">
            <Link to={"/"}>Home</Link>
          </span>
          {pathnameArr?.map((name, index) => {
            BreadCrumbPath += `/${name}`;
            const isLast = index === pathnameArr?.length - 1;
            return isLast ? (
              <div>
                <span
                  className="bg-purple-400 text-white_FFFFFF font-popins px-2 py-1 mx-2 rounded-sm"
                  key={index}
                >
                  {name}
                </span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-xl">/</span>
                <span key={index}>
                  <Link
                    className="bg-blue-500 px-2 py-1 mx-2 rounded-sm text-white_FFFFFF font-popins"
                    to={BreadCrumbPath}
                  >
                    {name}{" "}
                  </Link>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
