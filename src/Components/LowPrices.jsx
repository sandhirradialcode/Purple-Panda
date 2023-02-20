import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mushroom from "../assets/image/png/mushroom.png";

const LowPrices = () => {
  return (
    <>
      <section>
        <Container className="py-5">
          <div className="low_prices_box py-5 py-md-0">
            <Row className=" flex-column-reverse flex-md-row justify-content-between align-items-center">
              <Col className="mt-5 mt-md-0" sm={9} md={6} lg={7}>
                <div className="px-3 px-lg-5">
                  <h2 className="ff_Philosopher fw-bold fs_4xl text-white m-0 text-center text-md-start">
                    High <span className="clr_gradient">Thoughts</span>, Low{" "}
                    <span className="clr_gradient">Prices</span>
                  </h2>
                  <p className="ff_Montserrat fw-normal fs_md text-white m-0 pt-2 pe-lg-5 lh-base text-center text-md-start">
                    We pride ourselves on supplying premium, top-shelf weed
                    without the top-shelf markups. Some dispensaries will charge
                    an arm and a leg for the newest “flavors”, but we believe in
                    fair, affordable prices for good products at every level of
                    quality and breed.
                  </p>
                  <div className="mt-4 mt-lg-5 d-flex justify-content-center justify-content-md-start">
                    <button className="ff_Montserrat fw-bold fs_lg btn_1">
                      GIVE PURPLE PANDA A GO
                    </button>
                  </div>
                </div>
              </Col>
              <Col sm={9} md={6} lg={5} xxl={4}>
                <div className="mushroom_img position-relative">
                  <img className="w-100" src={mushroom} alt="mushroom" />
                  <span className="mushroom_blur position-absolute"></span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LowPrices;
