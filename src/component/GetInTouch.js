import React from "react";
import { getInTouch } from "../Constant";
const GetInTouch = () => {
  return (
    <>
      {getInTouch?.map((item, index) => {
        return (
          <div className="get_touch" key={index}>
            <span>{item?.icon}</span>
            <span>{item?.value}</span>
          </div>
        );
      })}
    </>
  );
};
export default GetInTouch;
