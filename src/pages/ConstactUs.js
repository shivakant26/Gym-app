import React from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Maps from "../component/GoogleMap";
import { getInTouchCard } from "../Constant";
import { useForm } from "react-hook-form";
import { addContactInfo } from "../services/redux/siteReducer/siteSlice";
import { emailPattern } from "../constant/allregex/Regex";

const ConstactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const info = useSelector((state) => state);

  const onSubmit = (data) => {
    dispatch(addContactInfo(data));
    reset();
  };

  return (
    <>
      <div className="contactus_section">
        <div className="getinTouch center">
          <Container>
            <h5>contact us</h5>
            <h1>Get In Touch</h1>
            <div className="contact_get_in">
              {getInTouchCard?.map((cards, index) => {
                return (
                  <div className="card center" key={index}>
                    <div className="card_icon">{cards?.icon}</div>
                    <h5>{cards?.heading}</h5>
                    <p>{cards?.discription}</p>
                  </div>
                );
              })}
            </div>
            <div className="contact_form_section">
              <div className="contact_form">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col>
                      <div className="form-field">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          {...register("name", {
                            required: true,
                          })}
                        />
                        {errors?.name?.type === "required" && (
                          <p className="error">required*</p>
                        )}
                      </div>
                    </Col>
                    <Col>
                      <div className="form-field">
                        <input
                          type="text"
                          name="email"
                          placeholder="Your email"
                          {...register("email", {
                            required: true,
                            pattern: emailPattern,
                          })}
                        />
                        {errors?.email?.type === "required" && (
                          <p className="error">required*</p>
                        )}
                        {errors?.email?.type === "pattern" && (
                          <p className="error">invalid email</p>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <div className="form-field">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        {...register("subject", {
                          required: true,
                        })}
                      />
                      {errors?.subject?.type === "required" && (
                        <p className="error">required*</p>
                      )}
                    </div>
                  </Row>
                  <Row>
                    <div className="form-field">
                      <textarea
                        rows="5"
                        name="message"
                        cols="20"
                        placeholder="message"
                        {...register("message", {
                          required: true,
                        })}
                      />
                      {errors?.message?.type === "required" && (
                        <p className="textareaError">required*</p>
                      )}
                    </div>
                  </Row>
                  <Row>
                    <div className="form-field">
                      <button className="contact_btn" type="submit">
                        send message
                      </button>
                    </div>
                  </Row>
                </Form>
              </div>
              <div className="contact_map">
                <Maps />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ConstactUs;
