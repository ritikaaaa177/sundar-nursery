import React from "react";
import contact from "./images/contact.avif";

const Contact = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Contact us
            </h1>
            <p className="mt-1 text-black font-info text-4xl font-bold tracking-wider ">
              ☎ We'd love to talk about how we can help you.
            </p>
          </div>

          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8  dark:border-black hover:border-gray-500">
              <h2 className="mb-8 text-2xl font-extralight font-custom text-black tracking-wider">
                Fill in the form
              </h2>

              <form>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label for="hs-firstname-contacts-1" className="sr-only">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="hs-firstname-contacts-1"
                        id="hs-firstname-contacts-1"
                        className="py-3 px-4 block w-full  border-gray-200 rounded-md bg-gray-100"
                        placeholder="First Name"
                      />
                    </div>

                    <div>
                      <label for="hs-lastname-contacts-1" className="sr-only">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="hs-lastname-contacts-1"
                        id="hs-lastname-contacts-1"
                        className="py-3 px-4 block w-full  border-gray-200 rounded-md bg-gray-100"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="hs-email-contacts-1" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      autocomplete="email"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md bg-gray-100"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label for="hs-phone-number-1" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="hs-phone-number-1"
                      id="hs-phone-number-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md bg-gray-100"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div>
                    <label for="hs-about-contacts-1" className="sr-only">
                      Details
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="hs-about-contacts-1"
                      rows="4"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md bg-gray-100"
                      placeholder="Details"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="inline-flex font-custom justify-center items-center gap-x-3 text-center bg-yellow-300 hover:bg-green-300 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  >
                    Send inquiry
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-black font-custom">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>
            <div className="images">
              <img src={contact} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
