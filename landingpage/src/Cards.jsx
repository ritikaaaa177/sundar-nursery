import React from "react";

const Cards = (props) => {
  return (
    <>
      <div class=" flex flex-row">
        <div class="text-center">
          <img
            class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
            src={props.imgSrc}
            alt="Image Description"
          />
          <div class="mt-2 sm:mt-4">
            <h3 class="text-sm font-medium text-green-500 sm:text-base lg:text-lg font-custom ">
              {props.name}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
