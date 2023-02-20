import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import traced_1 from "../assets/image/svg/traced_1.svg";
import traced_2 from "../assets/image/svg/traced_2.svg";
import traced_3 from "../assets/image/svg/traced_3.svg";
import Rectangle_30 from "../assets/image/png/Rectangle_30.png";
const CanadaOrders = () => {
  return (
    <>
      <section className="bg_img_mailorder position-relative">
        <span className="order_liner position-absolute end-0"></span>
        <span className="blue_sec position-absolute bottom-0 end-0"></span>
        <img
          className="position-absolute end-0 top-0"
          src={Rectangle_30}
          alt="Rectangle_30"
        />
        <Container className="py-5">
          <Row
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1000"
            className="justify-content-center pb-5">
            <Col md={10} lg={9}>
              <h2 className="ff_Philosopher fw-bold fs_4xl text-white m-0 text-center">
                Canada Wide
                <span className="clr_gradient"> Mail Orders</span>
              </h2>
              <p className="ff_Montserrat fw-normal fs_md text-white opacity_08 text-center pt-2">
                Purple Panda offers discreet mail orders to all provinces in
                Canada, we have new list of products everyday to serve your
                needs whether its recreational or medinical use. We ship the
                next business day from Monday-Thursdays, EMT payment is required
                for all mail orders
              </p>
            </Col>
          </Row>
          <Row className="my-5 justify-content-center z_index2">
            <Col
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              className="mb-5 mb-lg-0"
              md={6}
              lg={4}>
              <div className="card_1 d-flex flex-column align-items-center position-relative">
                <div className="dark_blue_round">
                  <span className="ff_Montserrat white_round d-flex flex-column align-items-center fw-semibold fs_3xl clr_purple">
                    01
                  </span>
                </div>
                <div>
                  <img src={traced_1} alt="Traced_3" />
                  <p className="ff_Montserrat fw-normal fs_md text-white opacity_07 m-0 pt-3">
                    Register for an account first, then head on other to our
                    shop selection
                  </p>
                </div>
                <span className="card1_blur position-absolute bottom-0 start-0"></span>
              </div>
            </Col>
            <Col
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              className=" mt-5 mt-md-0 mb-5 mb-lg-0"
              md={6}
              lg={4}>
              <div className="card_1 d-flex flex-column align-items-center position-relative">
                <div className="dark_blue_round">
                  <span className="ff_Montserrat white_round d-flex flex-column align-items-center fw-semibold fs_3xl clr_purple">
                    02
                  </span>
                </div>
                <div>
                  <img src={traced_2} alt="traced_1" />
                  <p className="ff_Montserrat fw-normal fs_md text-white opacity_07 m-0 pt-3">
                    Register for an account first, then head on other to our
                    shop selection
                  </p>
                </div>
                <span className="card1_blur position-absolute bottom-0 start-0"></span>
              </div>
            </Col>
            <Col
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              className="mt-5 mt-lg-0"
              md={6}
              lg={4}>
              <div className="card_1 d-flex flex-column align-items-center position-relative">
                <div className="dark_blue_round">
                  <span className="ff_Montserrat white_round d-flex flex-column align-items-center fw-semibold fs_3xl clr_purple">
                    03
                  </span>
                </div>
                <div>
                  <img src={traced_3} alt="Traced_2" />
                  <p className="ff_Montserrat fw-normal fs_md text-white opacity_07 m-0 pt-3">
                    Register for an account first, then head on other to our
                    shop selection
                  </p>
                </div>
                <span className="card1_blur position-absolute bottom-0 start-0"></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CanadaOrders;
