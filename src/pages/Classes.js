import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Days } from "../Constant";
import { classSechdules } from "../Constant";

const Classes = () => {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className="classes_section">
        <Container>
          <div className="classes_headings getinTouch center">
            <h5>class schedule</h5>
            <h1>working hours</h1>
          </div>
          <div className="pannel_section">
            <div className="group_pannel">
              <ul>
                {Days?.map((day, index) => {
                  return (
                    <li
                      key={index}
                      id={day?.key}
                      onClick={() => setActive(day)}
                      className={`${active == day && "active"}`}
                    >
                      <a>{day.dayName}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="classes_card_wr">
              {classSechdules?.map((item, index) => {
                return (
                  <div className="classes_card" key={index}>
                    <h6>{item?.time}</h6>
                    <h5 className="uppercase-text">{item?.courseName}</h5>
                    <p className="uppercase-text text-secondary">
                      {item?.trainerName}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Classes;
