import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const StoreHours = () => {
  return (
    <>
      <section>
        <Container className="py-5">
          <Row className=" justify-content-center">
            <Col
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-duration="1000"
              xs={8}
              sm={10}
              xl={6}>
              <h2 className="ff_Philosopher fw-normal fs_4xl text-white pb-5 text-center">
                Store <span className="clr_gradient">Hours</span>
              </h2>
              <Row className="justify-content-center">
                <Col
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="2000"
                  className="mb-5 px-4"
                  sm={6}>
                  <h2 className="ff_Montserrat fw-semibold fs_xl text-white m-0 text-center store_hour">
                    Mon : 10am-8pm
                  </h2>
                </Col>
                <Col
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="2000"
                  className="mb-5 px-4"
                  sm={6}>
                  <h2 className="ff_Montserrat fw-semibold fs_xl text-white m-0 text-center store_hour">
                    Tue : 10am-8pm
                  </h2>
                </Col>
                <Col
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="2000"
                  className="mb-5 px-4"
                  sm={6}>
                  <h2 className="ff_Montserrat fw-semibold fs_xl text-white m-0 text-center store_hour">
                    Wed : 10am-8pm
                  </h2>
                </Col>
                <Col
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="2000"
                  className="mb-5 px-4"
                  sm={6}>
                  <h2 className="ff_Montserrat fw-semibold fs_xl text-white m-0 text-center store_hour">
                    Thu : 10am-8pm
                  </h2>
                </Col>
                <Col
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="2000"
                  className="mb-5 px-4"
                  sm={6}>
                  <h2 className="ff_Montserrat fw-semibold fs_xl text-white m-0 text-center store_hour">
                    Fri : 10am-8pm
                  </h2>
                </Col>
                <Col
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="2000"
                  className="mb-5 px-4"
                  sm={6}>
                  <h2 className="ff_Montserrat fw-semibold fs_xl text-white m-0 text-center store_hour">
                    Sat : 10am-8pm
                  </h2>
                </Col>
                <Col
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="2000"
                  className="mb-5 px-4"
                  sm={6}>
                  <h2 className="ff_Montserrat fw-semibold fs_xl text-white m-0 text-center store_hour">
                    Sun : 10am-8pm
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default StoreHours;
