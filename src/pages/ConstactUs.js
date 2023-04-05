import React from "react";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import Maps from "../component/GoogleMap";

const ConstactUs = () => {
  return (
    <>
      <div className="contactus_section">
        <div className="getinTouch">
          <h5>contact us</h5>
          <h1>Get In Touch</h1>
          <div className="contact_get_in">
            <div className="card">
              <div className="card_icon">
                <MdLocationPin />
              </div>
              <h5>VISIT US</h5>
              <p>123 Street, New York, USA</p>
            </div>
            <div className="card">
              <div className="card_icon">
                <MdEmail />
              </div>
              <h5>EMAIL US</h5>
              <p>mail@domain.com</p>
            </div>
            <div className="card">
              <div className="card_icon">
                <AiOutlinePhone />
              </div>
              <h5>CALL US</h5>
              <p>+012 345 6789</p>
            </div>
          </div>
          <div className="contact_form_section">
            <div className="contact_form">
              <div className="form-field">
                  <input type="text" placeholder="Your name" />
              </div>
              <div className="form-field">
                  <input type="text" placeholder="Your email" />
              </div>
              <div className="form-field">
                  <input type="text" placeholder="Your Subject" />
              </div>
              <div className="form-field">
                 <textarea rows="5" cols="20" placeholder="message"/>
              </div>
              <div className="form-field">
                  <button className="contact_btn">send message</button>
              </div>
            </div>
            <div className="contact_map">
              <Maps />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstactUs;
