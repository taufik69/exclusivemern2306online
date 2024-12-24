import React from "react";
import { BreadCrumb } from "../../components/CommonCoponents/BreadCrumb";
import { useFormik } from "formik";
import { IoCallOutline } from "react-icons/io5";
import { contactSchema } from "../../Validation/Schema/LoginSchema";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="mb-20">
      <div className="container">
        <BreadCrumb />
        <div className="flex gap-x-10 mt-10 ">
          <div className="px-14 py-10 shadow-2xl w-[24% ] rounded-lg">
            <div className=" border-b border-[#646161] pb-10 ">
              <div className="flex  items-center gap-x-4">
                <IoCallOutline className="text-xl w-10 h-10 rounded-full bg-redDB4444 text-white p-2" />
                <h2 className="text-[16px] font-medium font-popins text-text_black000000">
                  Call To Us
                </h2>
              </div>
              <h2 className="text-[14px] font-normal font-popins text-text_black000000 mt-6">
                We are available 24/7, 7 days a week.
              </h2>
              <a
                href="callto:+8801611112222"
                className="text-[14px] font-normal font-popins text-text_black000000 mt-4"
              >
                Phone: +8801611112222
              </a>
            </div>

            <div className="mt-10">
              <div className="flex  items-center gap-x-4">
                <IoCallOutline className="text-xl w-10 h-10 rounded-full bg-redDB4444 text-white p-2" />
                <h2 className="text-[16px] font-medium font-popins text-text_black000000">
                  Write To US
                </h2>
              </div>
              <h3 className="text-[15px] font-normal font-popins text-text_black000000 mt-6">
                Fill out our form and we will contact you within 24 hours.
              </h3>
              <a
                href="callto:+8801611112222"
                className="text-[15px] font-normal font-popins text-text_black000000 mt-4 "
              >
                Phone: +8801611112222
              </a>
              <a
                href="mailto:support@exclusive.com"
                className="text-[15px] font-normal font-popins text-text_black000000 mt-4 "
              >
                Emails: support@exclusive.com
              </a>
            </div>
          </div>

          {/* contact form */}

          <div className="w-full">
            <div class="bg-white p-8 rounded-lg  shadow-2xl w-full ">
              <form class="space-y-6" onSubmit={formik.handleSubmit}>
                {/* <!-- Flex container for name, email, and phone --> */}
                <div class="flex flex-col sm:flex-row sm:gap-4">
                  <div class="flex-1 mb-4 sm:mb-0">
                    <input
                      type={"text"}
                      className={"bg-white_F5F5F5 rounded px-3 py-3 w-[330px]"}
                      placeholder={"Your Name *"}
                      required
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <div className="text-red-500 mt-2">
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div class="flex-1 mb-4 sm:mb-0">
                    <input
                      type={"text"}
                      className={"bg-white_F5F5F5 rounded px-3 py-3 w-[330px]"}
                      placeholder={"Your email *"}
                      required
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="text-red-500 mt-2">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div class="flex-1">
                    <input
                      type={"text"}
                      className={
                        "bg-white_F5F5F5 rounded px-3 py-3 w-[330px] mt-2"
                      }
                      placeholder={"Your phone *"}
                      required
                      id="phone"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.phone && formik.touched.phone ? (
                      <div className="text-red-500 mt-2">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>
                </div>
                {/* <!-- Message box --> */}
                <div>
                  <textarea
                    rows="20"
                    class="mt-1 block pl-4 pt-4 w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm bg-white_F5F5F5"
                    placeholder="Your Message"
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                  ></textarea>
                  {formik.errors.message && formik.touched.message ? (
                    <div className="text-red-500 mt-2">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
                {/* <!-- Submit button --> */}
                <div class="text-right">
                  <button
                    type="submit"
                    class="inline-flex items-center px-10 py-4 bg-red-500 text-white text-sm font-medium rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
