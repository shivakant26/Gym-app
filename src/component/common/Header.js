import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
import { menuOption , topMenuIcon} from "../../Constant";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>
            <Link data-testid="link" to="/">
              fitness
            </Link>
          </h1>
        </div>
        <div className="menu">
          <div className="top-menu">
            <div className="top_left_menu">
              <div className="div1">
                <h6>
                  <span>
                    <GrMail />
                  </span>
                  mail@domain.com
                </h6>
              </div>
              <div className="div2">
                <h6>
                  <span>
                    <BsTelephoneFill />
                  </span>
                  +012 345 6789
                </h6>
              </div>
            </div>
            <div className="top_right_menu">
              <ul>
                {topMenuIcon?.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link data-testid="link" to={item?.linkUrl}>
                        {item?.icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="bottom-menu">
            <div className="bottom-menu-left">
              <ul>
                {menuOption?.map((option, index) => {
                  return (
                    <li key={index}>
                      <Link data-testid="link" to={option.url}>
                        {option.urlLabel}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="bottom-menu-right">
              <Link data-testid="link" to="/join">
                join us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
