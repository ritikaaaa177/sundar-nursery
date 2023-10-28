import React from "react";
import Sdata2 from "./Sdata2";
import Context2 from "./Cards2";
import { useState } from "react";

import("preline");

const About = () => {
  const [filter, setFilterData] = useState("");
  const [sort, setCategory] = useState("all");

  const checkVal = (Sdata2, sort) => {
    // if (sort === "all") {
    //   return Sdata2;
    // }
    return Sdata2.filter((item) => item.category === sort);
  };

  const filteredArray = checkVal(Sdata2, sort);

  return (
    <>
      <input
        className="input-val"
        type="text"
        placeholder="Search the Product"
        value={filter}
        onChange={(e) => setFilterData(e.target.value)}
      />

      <div className="buy-div shadow-lg border-2 rounded-3xl ">
        <button
          className=" absolute border-2 border-green-500 ml-64"
          onClick={() => {
            setCategory("all");
          }}
        >
          All plants
        </button>
        <button
          className=" btn1 absolute border-2 border-green-500 ml-64"
          onClick={() => {
            setCategory("ornamental");
          }}
        >
          Ornamental
        </button>
        <button
          className=" btn2  absolute border-2 border-green-500 ml-64"
          onClick={() => {
            setCategory("exotic");
          }}
        >
          Exotic
        </button>
        <button
          className="btn3  absolute border-2 border-green-500 ml-64"
          onClick={() => {
            setCategory("indoor");
          }}
        >
          Indoor
        </button>
      </div>

      <div className="parent-container">
        {filteredArray.map((val, ind) => {
          return (
            <Context2
              key={ind}
              imgsrc={val.imgsrc}
              name={val.name}
              para={val.para}
              price={val.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default About;
