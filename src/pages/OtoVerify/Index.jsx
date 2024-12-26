import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const OTPverify = () => {
  const parms = useParams();
  const [otp, setotp] = useState("");

  const handleinput = (num) => {
    setotp((prev) => {
      if (otp.length > 3) {
        console.log("sdkljf");
        return prev; // Return the current state to avoid updates
      } else {
        return prev + num.toString();
      }
    });
  };
  // Log the updated state whenever `otp` changes
  useEffect(() => {
    console.log("Updated OTP:", otp.length);
  }, [otp]);
  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center bg-green-900">
        <div className="container h-screen  max-w-full overflow-hidden shadow-lg">
          <div className="flex flex-col">
            <div className="flex flex-col w-full  h-48 justify-center">
              <div className="text-3xl block w-full text-gray-200 text-center">
                {" "}
                Verification Code
              </div>
              <div className="text-sm block w-full text-gray-400 font-base text-center pt-2">
                Please type the verification code sent to
                <br />
                {parms.email}
              </div>
            </div>
            <div className="flex w-full flex-1  h-screen  justify-center items-center text-white">
              <div className="h-full py-1 px-8 text-center">
                <div className="w-full max-w-sm">
                  <div className="flex items-center border-b-2 border-yellow-500 py-2 mt-1">
                    <input
                      className="text-center appearance-none bg-transparent border-none w-full text-white text-3xl mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="number"
                      placeholder="Enter Code here"
                      value={otp}
                    />
                  </div>
                  <div className="text-center text-xs font-base my-10">
                    <div className="px-2">
                      <div className="flex  text-3xl">
                        <div
                          className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2"
                          onClick={() => handleinput(1)}
                        >
                          1
                        </div>
                        <div
                          className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2"
                          onClick={() => handleinput(2)}
                        >
                          2
                        </div>
                        <div
                          className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2"
                          onClick={() => handleinput(3)}
                        >
                          3
                        </div>
                      </div>
                    </div>
                    <div className="px-2 pt-6">
                      <div className="flex -mx-2  text-3xl">
                        <div
                          className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2"
                          onClick={() => handleinput(4)}
                        >
                          4
                        </div>
                        <div
                          className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2"
                          onClick={() => handleinput(5)}
                        >
                          5
                        </div>
                        <div
                          className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2"
                          onClick={() => handleinput(6)}
                        >
                          6
                        </div>
                      </div>
                    </div>
                    <div className="px-2 pt-6">
                      <div className="flex -mx-2  text-3xl">
                        <div
                          className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2"
                          onClick={() => handleinput(7)}
                        >
                          7
                        </div>
                        <div
                          className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2"
                          onClick={() => handleinput(8)}
                        >
                          8
                        </div>
                        <div
                          className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2"
                          onClick={() => handleinput(9)}
                        >
                          9
                        </div>
                      </div>
                    </div>
                    <div className="px-2 pt-6">
                      <div className="flex -mx-2  text-3xl">
                        <div className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2">
                          <div className=" px-10 py-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 640 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256l62.06 62.06z"></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2"
                          onClick={() => handleinput(0)}
                        >
                          0
                        </div>
                        <div className="w-1/3 px-2 hover:bg-green-800 rounded cursor-pointer my-auto py-2">
                          <div className=" px-10 py-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="text-center pt-8 text-yellow-500 cursor-pointer">
                    Resend Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPverify;
