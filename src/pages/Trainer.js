import React from "react";
import { Container } from "react-bootstrap";
import { TrainerData } from "../Constant";
const Trainer = () => {
  return (
    <>
      <div className="trainer_section">
        <Container>
          <div className="our_expert getinTouch center">
            <h5>the team</h5>
            <h1>expert trainer</h1>
          </div>
          <div className="trainer_card_wr">
            {TrainerData?.map((element, index) => {
              return (
                <div className="builder_card" key={index}>
                  <div className="trainer_image">
                    <img src={element?.image} alt={element?.alt} />
                  </div>
                  <div className="trainer_bio center">
                    <h5 className="uppercase-text">{element?.trainerName}</h5>
                    <p className="uppercase-text">{element?.jobTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};
export default Trainer;
