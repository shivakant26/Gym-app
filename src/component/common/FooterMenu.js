import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { linkData } from "../../Constant";
const FooterMenuLinks = () => {
  return (
    <>
      <ul>
        {linkData?.map((option, index) => {
          return (
            <li key={index}>
              <span>
                <HiArrowNarrowRight />
              </span>
              <a href={option?.url}>{option?.optionName}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FooterMenuLinks;
