import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cannabis_leaves from "../assets/image/png/cannabis_leaves.png";
import phone_logo from "../assets/image/svg/phone_logo.svg";
import massage_logo from "../assets/image/svg/massage_logo.svg";
const Freecontactus = () => {
  return (
    <>
      <section>
        <Container className="py-5">
          <Row className=" flex-column-reverse flex-lg-row align-items-center">
            <Col md={10} lg={6} xxl={7}>
              <img
                className="w-100"
                src={cannabis_leaves}
                alt="green_cannabis_leaves"
              />
            </Col>
            <Col className="mt-5 mt-md-0" lg={6} xxl={5}>
              <div className="contact_us_box">
                <h2 className="ff_Philosopher fw-bold fs_xxl text-white text-center text-md-start">
                  Feel free to <span className="clr_gradient">contact us</span>{" "}
                  anytime you need our help.
                </h2>
                <p className="ff_Montserrat fw-normal fs_md text-white m-0 pt-2 text-center text-md-start">
                  We usually reply in 24 hours, if there is an urgent need to
                  reach us. please give us a call at the number below
                </p>
                <div className="pt-3 justify-content-between d-flex align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <img src={phone_logo} alt="phone_logo" />
                    <p className="ff_Montserrat fw-semibold fs_md text-white m-0">
                      1-888-726-3219
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img src={massage_logo} alt="massage_logo" />
                    <p className="ff_Montserrat fw-semibold fs_md text-white m-0">
                      1-888-726-3219
                    </p>
                  </div>
                </div>
                <form className="input_group mt-5">
                  <Row className="d-flex justify-content-between">
                    <Col md={6}>
                      <input type="text" placeholder="First name" />
                    </Col>
                    <Col md={6}>
                      <input type="text" placeholder="Last name" />
                    </Col>
                    <Col className="mt-3" md={6}>
                      <input type="text" placeholder="Email address" />
                    </Col>
                    <Col className="mt-3" md={6}>
                      <input type="text" placeholder="Phone number" />
                    </Col>
                    <Col className="mt-3" md={12}>
                      <input
                        className="message_input"
                        type="text"
                        placeholder="Message..."
                      />
                    </Col>
                  </Row>
                  <button
                    className=" btn_1 mt-5 py-2 px-4 ff_Montserrat fw-bold fs_lg text-white "
                    type="Submit">
                    Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Freecontactus;
