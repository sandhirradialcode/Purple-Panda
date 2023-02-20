import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import item_1 from "../assets/image/png/item_1.png";
import item_2 from "../assets/image/png/item_2.png";
import item_3 from "../assets/image/png/item_3.png";

const PopularItems = () => {
  return (
    <>
      <section className="popular_Items_bg position-relative">
        <span className="blue_sec position-absolute top-0 start-0"></span>
        <Container className="py-5">
          <Row className="justify-content-center pt-4">
            <Col md={5}>
              <h2 className="ff_Philosopher fw-bold fs_4xl text-white m-0 text-center">
                Most <span className="clr_gradient">Popular</span> Items
              </h2>
              <p className="ff_Montserrat fw-normal fs_md text-white m-0 text-center pt-2">
                Pellentesque tincidunt fermentum mauris dignissim quam arcu. A
                netus natoque urna vivamus faucibus. Sollicitudin et nisl.
              </p>
            </Col>
          </Row>
          <Row className="py-5 justify-content-center">
            <Col sm={6} lg={4} xxl={3}>
              <div className="item_card">
                <a href="#">
                  <img className="w-100" src={item_1} alt="item_1" />
                </a>
                <a
                  href="#"
                  className="ff_Montserrat fw-normal fs_xl text-white m-0 mt-3 d-inline-block">
                  Stoner Patch(500mg)
                </a>
                <span className="ff_Montserrat fw-bold fs_xl clr_gradient m-0 pt-1">
                  $20.00
                </span>
                <div className="mt-4 d-flex justify-content-center justify-content-md-start">
                  <button className="ff_Montserrat fw-bold fs_md btn_1">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Col>
            <Col className="mt-4 mt-sm-0" sm={6} lg={4} xxl={3}>
              <div className="item_card">
                <a href="#">
                  <img className="w-100" src={item_2} alt="item_2" />
                </a>
                <a
                  href="#"
                  className="ff_Montserrat fw-normal fs_xl text-white m-0 mt-3 d-inline-block">
                  Stoner Patch(500mg)
                </a>
                <span className="ff_Montserrat fw-bold fs_xl clr_gradient m-0 pt-1">
                  $20.00
                </span>
                <div className="mt-4 d-flex justify-content-center justify-content-md-start">
                  <button className="ff_Montserrat fw-bold fs_md btn_1">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Col>
            <Col className="mt-4 mt-lg-0" sm={6} lg={4} xxl={3}>
              <div className="item_card">
                <a href="#">
                  <img className="w-100" src={item_3} alt="item_3" />
                </a>
                <a
                  href="#"
                  className="ff_Montserrat fw-normal fs_xl text-white m-0 mt-3 d-inline-block">
                  Stoner Patch(500mg)
                </a>
                <span className="ff_Montserrat fw-bold fs_xl clr_gradient m-0 pt-1">
                  $20.00
                </span>
                <div className="mt-4 d-flex justify-content-center justify-content-md-start">
                  <button className="ff_Montserrat fw-bold fs_md btn_1">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Col>
            <Col className="mt-4 mt-xxl-0" sm={6} lg={4} xxl={3}>
              <div className="item_card">
                <a href="#">
                  <img className="w-100" src={item_3} alt="item_3" />
                </a>
                <a
                  href="#"
                  className="ff_Montserrat fw-normal fs_xl text-white m-0 mt-3 d-inline-block">
                  Stoner Patch(500mg)
                </a>
                <span className="ff_Montserrat fw-bold fs_xl clr_gradient m-0 pt-1">
                  $20.00
                </span>
                <div className="mt-4 d-flex justify-content-center justify-content-md-start">
                  <button className="ff_Montserrat fw-bold fs_md btn_1">
                    ADD TO CART
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

export default PopularItems;
