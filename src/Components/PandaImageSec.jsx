import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import panda_img1 from "../assets/image/png/panda_img1.png";
import panda_img2 from "../assets/image/png/panda_img2.png";
import panda_img3 from "../assets/image/png/panda_img3.png";
const PandaImageSec = () => {
  return (
    <>
      <section className="panda_bg">
        <Container className="py-5">
          <Row className="py-5 justify-content-center">
            <Col
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              sm={6}
              lg={4}>
              <img
                className="w-100 panda_image"
                src={panda_img1}
                alt="panda_img1"
              />
              <h2 className="ff_Philosopher fw-bold fs_xxl text-white m-0 text-center pt-3 pt-xl-4">
                <span className="clr_gradient">20% Off</span> For First Time
                Customers
              </h2>
            </Col>
            <Col
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-duration="1000"
              className="mt-5 mt-sm-0"
              sm={6}
              lg={4}>
              <img
                className="w-100 panda_image"
                src={panda_img2}
                alt="panda_img2"
              />
              <h2 className="ff_Philosopher fw-bold fs_xxl text-white m-0 text-center pt-3 pt-xl-4">
                Purple Panda’s{" "}
                <span className="clr_gradient">Picks Of The week</span>
              </h2>
            </Col>
            <Col
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              className="mt-5 mt-lg-0"
              sm={6}
              lg={4}>
              <img
                className="w-100 panda_image"
                src={panda_img3}
                alt="panda_img3"
              />
              <h2 className="ff_Philosopher fw-bold fs_xxl text-white m-0 text-center pt-3 pt-xl-4">
                <span className="clr_gradient">Collect rewards</span> points
                every time you purchase
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PandaImageSec;
