import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import star_img2 from "../assets/image/svg/star_img2.svg";
import star_img3 from "../assets/image/svg/star_img3.svg";
import star_img4 from "../assets/image/svg/star_img4.svg";
import star_img5 from "../assets/image/svg/star_img5.svg";
import toron_right from "../assets/image/png/toron_right.png";
const OurClassifications = () => {
  return (
    <>
      <section className="Classifications_bg">
        <Container className="py-5 position-relative">
          <img
            className="position-absolute Classifications_right"
            src={toron_right}
            alt="toron_right"
          />
          <Row className="pt-5">
            <Col md={6}>
              <div className="classification_box">
                <h2 className="ff_Philosopher fw-semibold fs_4xl text-white m-0 text_border d-inline-block position-relative">
                  Our <span className="clr_gradient">Classifications</span>
                </h2>
                <h3 className="ff_Montserrat fw-normal fs_md m-0 text-white pt-2 para_border lh-base pe-5">
                  We’re proud of all our weed, but we still classify it based on
                  quality and price, with our levels classed at:
                </h3>
                <div className="pt-4">
                  <div>
                    <img src={star_img2} alt="star_img2" />
                  </div>
                  <span className="ff_Montserrat fw-semibold fs_xl m-0 text-white pt-1">
                    2-Star
                  </span>
                  <p className="ff_Montserrat fw-normal fs_md m-0 text-white pt-1">
                    Very affordable , entry level quality
                  </p>
                </div>
                <div className="pt-4">
                  <div>
                    <img src={star_img3} alt="star_img3" />
                  </div>
                  <span className="ff_Montserrat fw-semibold fs_xl m-0 text-white pt-1">
                    3-Star
                  </span>
                  <p className="ff_Montserrat fw-normal fs_md m-0 text-white pt-1">
                    Tried, tested, and affordable.
                  </p>
                </div>
                <div className="pt-4">
                  <div>
                    <img src={star_img4} alt="star_img4" />
                  </div>
                  <span className="ff_Montserrat fw-semibold fs_xl m-0 text-white pt-1">
                    4-Star
                  </span>
                  <p className="ff_Montserrat fw-normal fs_md m-0 text-white pt-1">
                    A step up in terms of taste, high, and quality.
                  </p>
                </div>
                <div className="pt-4">
                  <div>
                    <img src={star_img5} alt="star_img5" />
                  </div>
                  <span className="ff_Montserrat fw-semibold fs_xl m-0 text-white pt-1">
                    5-Star
                  </span>
                  <p className="ff_Montserrat fw-normal fs_md m-0 text-white pt-1">
                    Top-shelf buds for those special occasions.
                  </p>
                </div>
                <div className="mt-4 mt-lg-5 d-flex justify-content-center justify-content-md-start">
                  <button className="ff_Montserrat fw-bold fs_lg btn_1">
                    TRY PURPLE PANDA TODAY
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurClassifications;
