import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import hero_panda from "../assets/image/png/hero_panda.png";
import panda_gif from "../assets/image/png/panda_gif.gif";
const Header = () => {
  return (
    <>
      <header className="bg_hero min_vh_100 d-flex flex-column position-relative">
        <Navbar />
        <section className="d-flex flex-grow-1 align-items-center">
          <Container className="py-5">
            <Row className="align-items-center flex-column-reverse flex-md-row justify-content-between">
              <Col className="mt-5 mt-md-0" md={6}>
                <h1 className="ff_Philosopher fw-bold fs_5xl m-0 text-white text-center text-md-start">
                  Setting a
                  <span className="ff_Philosopher clr_gradient"> ‘High’ </span>
                  Standard
                </h1>
                <p className="ff_Montserrat fw-normal fs_md text-white m-0 pe-md-5 pt-2 text-center text-md-start">
                  We at Purple Panda are passionate about becoming the best
                  online weed dispensary Canada has ever seen. We believe in
                  good products, fair pricing, and top-notch customer service
                </p>
                <div className="mt-5 sign d-flex justify-content-center justify-content-md-start">
                  <button className="ff_Montserrat fw-bold fs_lg btn_1">
                    SIGN IN
                  </button>
                </div>
              </Col>
              <Col md={5}>
                <img
                  className="hero_panda position-relative"
                  src={hero_panda}
                  alt="panda"
                />
                <span className="box_1 position-absolute end-0"></span>
                <img
                  className="position-absolute gif"
                  src={panda_gif}
                  alt="panda_gif"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </header>
    </>
  );
};

export default Header;
