import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import chemical from "../assets/image/png/chemical.png";

import delivery from "../assets/image/png/delivery.png";
import packaging from "../assets/image/png/packaging.png";
import marijuana_buds from "../assets/image/png/marijuana_buds.png";
import collect_rewards from "../assets/image/png/collect_rewards.png";
import mail_orders from "../assets/image/png/mail_orders.png";
import man_icon from "../assets/image/png/man_icon.png";
import secure_transactions from "../assets/image/png/secure_transactions.png";

const ProductDelivery = () => {
  return (
    <>
      <section>
        <Container className="py-5">
          <Row className="align-items-center justify-content-between my-5">
            <Col md={5}>
              <div className="chemical_img position-relative">
                <img className="w-100" src={chemical} alt="chemical" />
                <span className="product_blur position-absolute"></span>
              </div>
            </Col>
            <Col md={7} lg={6}>
              <Row className="my-5 my-md-0">
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <img src={delivery} alt="delivery" />
                    <h6 className="ff_Montserrat fw-semibold fs_md text-white m-0 ms-2">
                      Same Day Delivery
                    </h6>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={packaging} alt="packaging" />
                    <h6 className="ff_Montserrat fw-semibold fs_md text-white m-0 ms-2">
                      Discreet packaging
                    </h6>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={marijuana_buds} alt="marijuana_buds" />
                    <h6 className="ff_Montserrat fw-semibold fs_md text-white m-0 ms-2">
                      Premium Marijuana Buds
                    </h6>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={collect_rewards} alt="collect_rewards" />
                    <h6 className="ff_Montserrat fw-semibold fs_md text-white m-0 ms-2">
                      Collect Rewards
                    </h6>
                  </div>
                </Col>
                <Col className="mt-5 mt-sm-0" sm={6}>
                  <div className="d-flex align-items-center">
                    <img src={mail_orders} alt="mail_orders" />
                    <h6 className="ff_Montserrat fw-semibold fs_md text-white m-0 ms-2">
                      Canada Wide Mail Orders
                    </h6>
                  </div>
                  <div className="d-flex align-items-center  mt-3">
                    <img src={man_icon} alt="man_icon" />
                    <h6 className="ff_Montserrat fw-semibold fs_md text-white m-0 ms-2">
                      19+
                    </h6>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={secure_transactions} alt="secure_transactions" />
                    <h6 className="ff_Montserrat fw-semibold fs_md text-white m-0 ms-2">
                      Secure Transactions
                    </h6>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDelivery;
