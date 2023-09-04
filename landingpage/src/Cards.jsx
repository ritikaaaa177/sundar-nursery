import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className=" flex flex-row">
        <div className="text-center">
          <img
            className=" gallery rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
            src={props.imgsrc}
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-green-500 sm:text-base lg:text-lg font-custom ">
              {props.name}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
