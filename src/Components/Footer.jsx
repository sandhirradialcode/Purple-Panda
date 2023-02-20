import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footer_panda from "../assets/image/svg/footer_panda.svg";

const Footer = () => {
  return (
    <>
      <section className="footer_bg position-relative">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={12} lg={6}>
              <div className="d-flex flex-column align-items-center">
                <a href="#" className="d-inline-block">
                  <img src={footer_panda} alt="footer_panda" />
                </a>
                <p className="ff_Montserrat fw-normal fs_md text-white text-center m-0 pt-3 lh-base">
                  Tempor cras et scelerisque bibendum. Sapien proin pharetra
                  iaculis cras massa auctor turpis. Eget massa imperdiet sit
                  massa. Hac sit nec.
                </p>
                <ul className="d-flex align-items-center gap-4 my-4 p-0">
                  <li>
                    <a
                      href="#"
                      className="ff_Montserrat fw-semibold fs_md text-white d-inline-block">
                      SHOP
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="ff_Montserrat fw-semibold fs_md text-white d-inline-block">
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="ff_Montserrat fw-semibold fs_md text-white d-inline-block">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="copyright">
          <Container>
            <p className="ff_Montserrat fw-normal fs_xsm text-white text-center m-0">
              © copyright 2022 purplepanda
            </p>
          </Container>
        </div>
        <span className="blue_sec position-absolute top-0 end-0"></span>
      </section>
    </>
  );
};

export default Footer;
