import React from "react";
import { Container } from "react-bootstrap";
import left_range_img from "../assets/image/png/left_range_img.png";
import right_range_img from "../assets/image/png/right_range_img.png";

const OurRange = () => {
  return (
    <>
      <section className="py-5">
        <Container
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          className="position-relative">
          <div>
            <img
              className=" position-absolute bottom-0 start-0 z_index_1"
              src={left_range_img}
              alt="left_range_img"
            />
            <img
              className=" position-absolute top-0 end-0 z_index_1"
              src={right_range_img}
              alt="right_range_img"
            />
          </div>
          <div className="range_box">
            <h2 className="ff_Philosopher fw-bold fs_4xl m-0 text-white text-center">
              Our<span className="fw-normel clr_gradient"> Range</span>
            </h2>
            <div className="pt-5">
              <p className="ff_Montserrat fw-normal fs_md text-white m-0 text-center">
                We have a variety of different recreational and medicinal items
                in our range, including cannabis, vapes, edibles, magic
                mushrooms, extracts, and CBD products, to help you unwind, have
                fun, and even do some valuable soul searching.
              </p>
              <p className="ff_Montserrat fw-normal fs_md text-white m-0 text-center pt-4">
                Whether you’re looking to order edibles online or browse for
                your new favorite strain, Purple Panda has got you covered.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurRange;
