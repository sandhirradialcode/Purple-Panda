import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog_img1 from "../assets/image/png/blog_img1.png";
import blog_img2 from "../assets/image/png/blog_img2.png";
import blog_img3 from "../assets/image/png/blog_img3.png";
const LatestBlogs = () => {
  return (
    <>
      <section className="blog_bg_img">
        <Container className="py-5">
          <h2
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1000"
            className="ff_Philosopher fw-bold fs_4xl text-white m-0 text-center">
            Latest <span className="clr_gradient">Blogs</span> And{" "}
            <span className="clr_gradient">News</span>
          </h2>
          <Row
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            className="py-5 justify-content-center">
            <Col sm={6} lg={4}>
              <div className="blog_card">
                <img className="w-100" src={blog_img1} alt="blog_img1" />
                <div className="pe-3 ps-4 pt-1 pb-3">
                  <span className="ff_Montserrat fw-normal fs_xsm text-white m-0">
                    12 Dec 2022
                  </span>
                  <h4 className="ff_Montserrat fw-semibold fs_xl text-white m-0 pt-3">
                    Integer vulputate
                  </h4>
                  <p className="ff_Montserrat fw-normal fs_md text-white m-0 pt-1 lh-base pe-4">
                    Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                    pharetra odio sed senectus sed morbi suspendisse convallis.
                  </p>
                  <a
                    href="#"
                    className="ff_Montserrat fw-normal fs_sm clr_gradient d-inline-block mt-3">
                    READ MORE....
                  </a>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="blog_card">
                <img className="w-100" src={blog_img2} alt="blog_img2" />
                <div className="pe-3 ps-4 pt-1 pb-3">
                  <span className="ff_Montserrat fw-normal fs_xsm text-white m-0">
                    15 Nov 2022
                  </span>
                  <h4 className="ff_Montserrat fw-semibold fs_xl text-white m-0 pt-3">
                    Lectus aenean
                  </h4>
                  <p className="ff_Montserrat fw-normal fs_md text-white m-0 pt-1 lh-base">
                    Tempor cras et scelerisque bibendum. Sapien proin pharetra
                    iaculis cras massa auctor turpis. Eget massa imperdiet sit
                    massa. Hac sit nec.
                  </p>
                  <a
                    href="#"
                    className="ff_Montserrat fw-normal fs_sm clr_gradient d-inline-block mt-3">
                    READ MORE....
                  </a>
                </div>
              </div>
            </Col>
            <Col className="mt-5 mt-lg-0" sm={6} lg={4}>
              <div className="blog_card">
                <img className="w-100" src={blog_img3} alt="blog_img3" />
                <div className="pe-3 ps-4 pt-1 pb-3">
                  <span className="ff_Montserrat fw-normal fs_xsm text-white m-0">
                    22 Dec 2022
                  </span>
                  <h4 className="ff_Montserrat fw-semibold fs_xl text-white m-0 pt-3">
                    Egestas odio
                  </h4>
                  <p className="ff_Montserrat fw-normal fs_md text-white m-0 pt-1 lh-base">
                    Viverra sit volutpat pulvinar vulputate accumsan sapien.
                    Amet urna etiam curabitur ac in viverra tortor proin. Dui
                    viverra eu tristique in eget ut purus.
                  </p>
                  <a
                    href="#"
                    className="ff_Montserrat fw-normal fs_sm clr_gradient d-inline-block mt-3">
                    READ MORE....
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LatestBlogs;
