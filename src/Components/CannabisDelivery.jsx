import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cannabis_leaves from "../assets/image/png/cannabis_leaves.png";

const CannabisDelivery = () => {
  return (
    <>
      <section className=" position-relative">
        <span className="blue_sec position-absolute top-0 end-0 z_index_1"></span>
        <Container className="py-5">
          <Row className=" align-items-center">
            <Col
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              md={7}>
              <img
                className="w-100"
                src={cannabis_leaves}
                alt="green_cannabis_leaves"
              />
            </Col>
            <Col
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-duration="1000"
              className="mt-5 mt-md-0"
              md={5}>
              <div className="CanDelivery_box">
                <h2 className="ff_Philosopher fw-normel fs_4xl m-0 text-white text-center text-md-start">
                  <span className="clr_gradient">Express</span> Cannabis
                  Delivery
                </h2>
                <p className="ff_Montserrat fw-normal fs_md text-white m-0 pt-2 text-center text-md-start">
                  One of the ways that we set ourselves apart from your average
                  dispensary is through our express delivery service. We’ve all
                  been there – work has finished early and you’ve gotten home,
                  but your jar is empty and the nearest dispensary is miles
                  away. With our service, you could have a box of premium
                  pre-rolls, a bag of bodacious buds, or a package of enticing
                  edibles at your door in just three hours!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CannabisDelivery;
