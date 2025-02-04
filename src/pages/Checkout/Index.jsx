import React, { useState } from "react";
import { Link } from "react-router-dom";
import { number } from "yup";
import { useGetuserCartItemQuery } from "../../Features/Api/exlusiveApi";
import { axiosInstace } from "../../helpers/axios";
import { successToast } from "../../helpers/Toast";

const Checkout = () => {
  const { data } = useGetuserCartItemQuery();
  const [loading, setloading] = useState(false);
  const [dataField, setDataField] = useState([
    "address1",
    "address2",
    "town",
    "district",
    "postalcode",
  ]);

  const [userField, setuserField] = useState(["firstName", "email", "mobile"]);

  // get the user info from localstroage
  const userinfofromlocal = JSON.parse(localStorage.getItem("user"));

  const [userinfo, setUserinfo] = useState({
    firstName: userinfofromlocal?.firstName,
    email: userinfofromlocal?.email,
    mobile: userinfofromlocal?.mobile,
    address1: "123 Main St",
    address2: "Apt 4B",
    town: "Springfield",
    district: "Central",
    postalcode: "12345",
    country: "USA",
    payementmethod: "",
  });

  //   onChange={handleChange}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserinfo({
      ...userinfo,
      [name]: value,
    });
  };

  const handleOnfocus = (e) => {
    const { name, value } = e.target;

    if (name !== "firstName" || "email" || "mobile") {
      return;
    } else {
      value = "";
    }
  };

  //   handleOnlinePayment
  const handleOnlinePayment = () => {
    setUserinfo({
      ...userinfo,
      payementmethod: "online",
    });
  };

  //   handleOnlinePayment
  const handleOnlineCashOnDelivery = () => {
    setUserinfo({
      ...userinfo,
      payementmethod: "cash",
    });
  };

  // now fetch the api
  const placeOrder = async () => {
    try {
      setloading(true);
      const response = await axiosInstace.post(
        "/placeorder",
        {
          customerinfo: {
            address1: userinfo?.address1,
            address2: userinfo.address2,
            town: userinfo.town,
            district: userinfo.district,
            postalcode: userinfo.postalcode || 12345,
          },
          paymentinfo: {
            payementmethod: userinfo?.payementmethod || "online",
          },
        },
        {
          withCredentials: "include",
        }
      );
      if (response.data?.url) {
        window.location.href = response.data.url;
      } else {
        successToast("Your order Placed Successfull");
      }
    } catch (error) {
      console.log("error from place order", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="container my-10">
      <div class="font-popins bg-white">
        <div class="max-lg:max-w-xl mx-auto w-full">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
              <div class="text-center max-lg:hidden">
                <h2 class="text-3xl font-bold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                  Checkout
                </h2>
              </div>

              <form class="lg:mt-16" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <h2 class="text-xl font-bold text-gray-800">Shipping info</h2>

                  <div class="grid sm:grid-cols-2 gap-y-10 gap-x-8 mt-8">
                    {userField.map((item) => (
                      <div>
                        <input
                          type={
                            item == "mobile"
                              ? "number"
                              : item == "email"
                              ? "email"
                              : "text"
                          }
                          name={item}
                          value={userinfo[item]}
                          onChange={handleChange}
                          onFocus={handleOnfocus}
                          placeholder={item}
                          className="px-2 pb-2 focus:bg-gray-200 py-3 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                        />
                      </div>
                    ))}
                    {dataField.map((item) => (
                      <div>
                        <input
                          type={item == "postalcode" ? "number" : "text"}
                          name={item}
                          placeholder={item}
                          value={userinfo[item]}
                          onChange={handleChange}
                          onFocus={(e) => (e.target.value = "")}
                          className="px-2 pb-2 focus:bg-gray-200 py-3 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div class="mt-16">
                  <h2 class="text-xl font-bold text-gray-800">
                    Payment method
                  </h2>

                  <div class="grid gap-4 sm:grid-cols-2 mt-4">
                    <div
                      class="flex items-center"
                      onClick={handleOnlinePayment}
                    >
                      {userinfo.payementmethod == "online" ? (
                        <button
                          type="button"
                          className={
                            "px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-green-800 active:bg-green-700"
                          }
                        >
                          Press Confrim Payment
                        </button>
                      ) : (
                        <label for="card" class="flex gap-2 cursor-pointer">
                          <img
                            src="https://readymadeui.com/images/visa.webp"
                            class="w-12"
                            alt="card1"
                          />
                          <img
                            src="https://readymadeui.com/images/american-express.webp"
                            class="w-12"
                            alt="card2"
                          />
                          <img
                            src="https://readymadeui.com/images/master.webp"
                            class="w-12"
                            alt="card3"
                          />
                        </label>
                      )}
                    </div>

                    <div class="flex items-center">
                      <button
                        type="button"
                        onClick={handleOnlineCashOnDelivery}
                        className={
                          userinfo.payementmethod == "cash"
                            ? "px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-green-800 active:bg-green-700"
                            : "px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-red-700 hover:bg-orange-800 active:bg-orange-700"
                        }
                      >
                        Cash On Delivery
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap gap-4 mt-8">
                  <Link
                    to={"/cart"}
                    class="min-w-[150px] flex justify-center items-center px-6 py-3.5 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                  >
                    Back
                  </Link>
                  <button
                    onClick={placeOrder}
                    type="button"
                    class="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {loading
                      ? "loading ..."
                      : ` Confirm payment $ ${data?.data?.totalamount}`}
                  </button>
                </div>
              </form>
            </div>

            <div class="bg-gray-100 lg:h-screen lg:sticky lg:top-0 lg:max-w-[430px] w-full lg:ml-auto">
              <div class="relative h-full">
                <div class="p-6 overflow-auto max-lg:max-h-[450px] lg:h-[calc(100vh-50px)]">
                  <h2 class="text-xl font-bold text-gray-800">Order Summary</h2>

                  <div class="space-y-6 mt-8">
                    {data?.data?.cartITem?.map((item) => (
                      <div class="flex gap-4">
                        <div class="w-[124px] h-[100px] flex items-center justify-center p-4 shrink-0 bg-gray-200 rounded-lg">
                          <img
                            src={item.product.image[0]}
                            class="w-full object-contain"
                          />
                        </div>

                        <div class="w-full">
                          <h3 class="text-sm truncate w-[80%]  text-gray-800 font-bold">
                            {item.product.name}
                          </h3>
                          <ul class="text-xs text-gray-800 space-y-1 mt-2">
                            <li class="flex flex-wrap gap-4">
                              Size <span class="ml-auto">{item.size}</span>
                            </li>
                            <li class="flex flex-wrap gap-4">
                              Quantity{" "}
                              <span class="ml-auto">{item.quantity}</span>
                            </li>
                            <li class="flex flex-wrap gap-4">
                              Total Price{" "}
                              <span class="ml-auto">
                                ${item.product.price * item.quantity}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div class="lg:absolute lg:left-0 lg:bottom-0 bg-gray-200 w-full p-4">
                  <h4 class="flex flex-wrap gap-4 text-sm text-gray-800 font-bold">
                    Total{" "}
                    <span class="ml-auto">${data?.data?.totalamount}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
