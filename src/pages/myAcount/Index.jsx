import React from "react";
import { BreadCrumb } from "../../components/CommonCoponents/BreadCrumb";
import Input from "../../components/CommonCoponents/Input";
const MYAcount = () => {
  return (
    <div className="pb-[120px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <BreadCrumb />
          <h2 className="acountStyle">
            Welcome! <span className="text-redDB4444">Md Rimel</span>{" "}
          </h2>
        </div>

        <div className="flex">
          <div className="w-[30%]">
            <div>
              <h1 className="accountStyle text-[16px] font-medium">
                Manage My Account
              </h1>
              <ul className="accountStyle text-[16px] opacity-50 flex flex-col items-start gap-y-2 mt-4 ml-6">
                <li className="hover:text-redDB4444 cursor-pointer hover:opacity-100">
                  My Profile
                </li>
                <li className="hover:text-redDB4444 cursor-pointer hover:opacity-100">
                  Address Book
                </li>
                <li className="hover:text-redDB4444 cursor-pointer hover:opacity-100">
                  My Payment Options
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h1 className="accountStyle text-[16px] font-medium">
                My Orders
              </h1>
              <ul className="accountStyle text-[16px] opacity-50 flex flex-col items-start gap-y-2 mt-4 ml-6">
                <li className="hover:text-redDB4444 cursor-pointer hover:opacity-100">
                  My Returns
                </li>
                <li className="hover:text-redDB4444 cursor-pointer hover:opacity-100">
                  My Cancellations
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <h1 className="accountStyle text-[16px] font-medium">
                My WishList
              </h1>
            </div>
          </div>

          <div className="w-full pb-10 pl-32 shadow-lg">
            <h1 className="accountStyle text-redDB4444 text-[20px] font-medium mb-4">
              Edit Your Profile
            </h1>
            {/* right site box */}
            <div className="flex flex-wrap gap-x-[50px]">
              <Input
                widtfull={false}
                label={"First Name"}
                placeholder={"Taufik"}
                id={"firstName"}
              />
              <Input
                widtfull={false}
                label={"Last Name"}
                placeholder={"islam"}
                id={"lastName"}
              />

              <Input
                widtfull={false}
                label={"Email"}
                placeholder={"example@gmail.com"}
                id={"email"}
              />

              <Input
                widtfull={false}
                label={"password"}
                placeholder={"123@Taq"}
                id={"password"}
                ispassword={true}
              />
            </div>

            {/* password changes */}
            <div>
              <h2 className="accountStyle my-5 text-[16px]">
                Password Changes
              </h2>
              <div className="flex flex-col gap-y-5">
                <Input
                  widtfull={true}
                  label={"Current Passwod"}
                  placeholder={"123@Taq"}
                  id={"currentPassword"}
                  ispassword={true}
                  ismarginRequired={false}
                />

                <Input
                  widtfull={true}
                  label={"New Passwod"}
                  placeholder={"123@Taq"}
                  id={"currentPassword"}
                  ispassword={true}
                  ismarginRequired={false}
                />

                <Input
                  widtfull={true}
                  label={"Confrim New  Passwod"}
                  placeholder={"123@Taq"}
                  id={"currentPassword"}
                  ispassword={true}
                  ismarginRequired={false}
                />
              </div>

              <div className="flex justify-end mt-6 max-w-[905px]">
                <div className="flex items-center gap-x-6">
                  <h2 className="accountStyle">Cancel</h2>
                  <button className="px-[48px] py-[12px] bg-redDB4444  text-white_FFFFFF text-[18px] font-medium font-popins rounded">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
            {/* password changes */}
            {/* right site box */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MYAcount;
