import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import toron_left from "../assets/image/png/toron_left.png";
import toron_right from "../assets/image/png/toron_right.png";

const GreateTorontoArea = () => {
  return (
    <>
      <section>
        <Container className="py-5 ">
          <Row className="justify-content-center flex-column align-items-center">
            <Col md={5}>
              <h2 className="ff_Montserrat fw-semibold fs_lg text-white m-0 text-center lh-base">
                We’re based in both the{" "}
                <span className="clr_gradient">Greater Toronto Area</span>, with
                our delivery service covering:
              </h2>
            </Col>
          </Row>
          <p className="ff_Montserrat fw-normal fs_md text-white m-0 opacity_07 text-center pt-3">
            If you’re in any of these cities and need a little pick me up, you
            know where to go!
          </p>
          <Row className="mt-5 position-relative">
            <Col md={6}>
              <div className="TorontoArea_box1 d-flex justify-content-center">
                <div>
                  <div className="my-3 d-flex align-items-center gap-4">
                    <span className="ellipse_gradient"></span>
                    <h2 className="ff_Montserrat fw-normal fs_xxl text-white m-0">
                      Mississauga
                    </h2>
                  </div>
                  <div className="my-3 d-flex align-items-center gap-4">
                    <span className="ellipse_gradient"></span>
                    <h2 className="ff_Montserrat fw-normal fs_xxl text-white m-0">
                      Oakville
                    </h2>
                  </div>
                  <div className="my-3 d-flex align-items-center gap-4">
                    <span className="ellipse_gradient"></span>
                    <h2 className="ff_Montserrat fw-normal fs_xxl text-white m-0">
                      Brampton
                    </h2>
                  </div>
                  <div className="my-3 d-flex align-items-center gap-4">
                    <span className="ellipse_gradient"></span>
                    <h2 className="ff_Montserrat fw-normal fs_xxl text-white m-0">
                      Etobicoke
                    </h2>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="mt-4 mt-md-0 " md={6}>
              <div className="TorontoArea_box1 d-flex justify-content-center">
                <div>
                  <div className="my-3 d-flex align-items-center gap-4">
                    <span className="ellipse_gradient"></span>
                    <h2 className="ff_Montserrat fw-normal fs_xxl text-white m-0">
                      Toronto
                    </h2>
                  </div>
                  <div className="my-3 d-flex align-items-center gap-4">
                    <span className="ellipse_gradient"></span>
                    <h2 className="ff_Montserrat fw-normal fs_xxl text-white m-0">
                      Vaughan
                    </h2>
                  </div>
                  <div className="my-3 d-flex align-items-center gap-4">
                    <span className="ellipse_gradient"></span>
                    <h2 className="ff_Montserrat fw-normal fs_xxl text-white m-0">
                      Markham
                    </h2>
                  </div>
                  <div className="my-3 d-flex align-items-center gap-4">
                    <span className="ellipse_gradient"></span>
                    <h2 className="ff_Montserrat fw-normal fs_xxl text-white m-0">
                      Richmond
                    </h2>
                  </div>
                </div>
              </div>
            </Col>
            <div>
              <img
                className="position-absolute toron_left z_index_1"
                src={toron_left}
                alt="toron_left"
              />
              <img
                className="position-absolute  toron_right z_index_1"
                src={toron_right}
                alt="toron_right"
              />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GreateTorontoArea;
