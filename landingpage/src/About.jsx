import React from "react";
import Sdata2 from "./Sdata2";
import Context2 from "./Cards2";
import { useState } from "react";

import("preline");

const About = () => {
  const [filter, setFilterData] = useState("");

  const checkVal = (oldarray, filteredText) => {
    return oldarray.filter((arrayVal) => {
      return arrayVal.name.toLowerCase().includes(filteredText.toLowerCase());
    });
  };

  const filteredArray = checkVal(Sdata2, filter);

  return (
    <>
      <input
        className="input-val"
        type="text"
        placeholder="Search the Product"
        value={filter}
        onChange={(e) => setFilterData(e.target.value)}
      />

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
