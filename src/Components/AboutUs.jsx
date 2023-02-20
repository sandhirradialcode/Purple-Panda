import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about_img1 from "../assets/image/png/about_img1.png";
import about_img2 from "../assets/image/png/about_img2.png";
import about_img3 from "../assets/image/png/about_img3.png";
import about_img4 from "../assets/image/png/about_img4.png";
import about_img5 from "../assets/image/png/about_img5.png";

const AboutUs = () => {
  return (
    <>
      <section id="ABOUT" className="bg_cannabis">
        <Container className="py-5">
          <Row className="align-items-center flex-column-reverse flex-md-row py-5">
            <Col
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              className="mt-5 mt-md-0"
              md={6}>
              <div className="box_2">
                <h2 className="ff_Philosopher fw-normal fs_4xl m-0 text-white text-center text-md-start">
                  About
                  <span className="ff_Philosopher clr_gradient"> Us</span>
                </h2>
                <p className="ff_Montserrat fw-normal fs_md text-white m-0 pt-2 text-center text-md-start">
                  Purple Panda is a Canadian online cannabis dispensary with a
                  passion for good weed and even better customer service. We all
                  remember the days of waiting for scary strangers on street
                  corners, but thankfully those days are over. Now, we’re proud
                  of how we provide an easy, convenient, and user-friendly
                  experience to our clients.
                </p>
                <p className="ff_Montserrat fw-normal fs_md text-white m-0 pt-2 pt-md-0 text-center text-md-start">
                  We specialize in high-quality cannabis for both recreational
                  and medical purposes, while also making sure that you’re
                  getting the best bud for your buck! Along with all the
                  different strains of cannabis that we stock, you can also get
                  your fill of edibles, vapes, CBD, extracts, and even buy magic
                  mushrooms online from our store.
                </p>
                <div className="mt-4 mt-lg-5 d-flex justify-content-center justify-content-md-start">
                  <button className="ff_Montserrat fw-bold fs_lg btn_1">
                    READ MORE
                  </button>
                </div>
              </div>
            </Col>
            <Col
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              className="mb-4 mb-md-0"
              md={6}>
              <div className="d_grid">
                <img
                  className="w-100 abu_grid_img1"
                  src={about_img1}
                  alt="about_img1"
                />
                <img
                  className="w-100 h-100 abu_grid_img2"
                  src={about_img2}
                  alt="about_img2"
                />
                <img
                  className="w-100 abu_grid_img3"
                  src={about_img3}
                  alt="about_img3"
                />
                <img
                  className="w-100 h-100 abu_grid_img4"
                  src={about_img4}
                  alt="about_img4"
                />
                <img
                  className="w-100 abu_grid_img5"
                  src={about_img5}
                  alt="about_img5"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
