import React from "react";

const Context2 = (props) => {
  return (
    <>
      <div className=" flex flex-row relative left-40 top-32 gap-16">
        <div class=" dimensions flex flex-col  border border-gray-200 rounded-xl bg-white shadow-xl">
          <div class=" flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
            {/* <img src={props.imgsrc} alt="" /> */}
          </div>

          <div class="p-4 md:p-6">
            <h3 class=" text-orange-500 font-bold">{props.name}</h3>
            <p class="mt-3 text-sm text-black">{props.para}</p>
          </div>

          <div>
            <img className="buy-image" src={props.imgsrc} alt="plants" />
          </div>

          <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 bg-green-300">
            <p className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-green-500 text-white">
              {props.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Context2;
