import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cannabis_grid_img1 from "../assets/image/png/Cannabis_grid_img1.png";
import Cannabis_grid_img2 from "../assets/image/png/Cannabis_grid_img2.png";
import Cannabis_grid_img3 from "../assets/image/png/Cannabis_grid_img3.png";
import Cannabis_grid_img4 from "../assets/image/png/Cannabis_grid_img4.png";
import Cannabis_grid_img5 from "../assets/image/png/Cannabis_grid_img5.png";

const Cannabis = () => {
  return (
    <>
      <section className="cannabis_bg_img">
        <Container className="pt-5">
          <Row className=" justify-content-center">
            <Col md={10} lg={8}>
              <h2 className="ff_Philosopher fw-bold fs_4xl text-white m-0 text-center">
                Cannabis
              </h2>
              <p className="ff_Montserrat fw-normal fs_md text-white text-center m-0 pt-2 px-xl-4">
                While we stock all sorts of products to make you feel great,
                we’re experts and lovers of cannabis at heart. We offer a wide
                range of buds each with different highs, flavors, and aromas, so
                you can find the perfect joint-filler, bowl-packer, or pipe
                clearer to suit your tastes
              </p>
            </Col>
          </Row>
          <Row className="align-items-center flex-column-reverse flex-md-row py-5">
            <Col className="mt-5 mt-md-0" md={7}>
              <div className="box_3 pe-3">
                <h2 className="ff_Montserrat fw-semibold fs_xxl m-0 text-white text-center text-md-start">
                  Strain <span className="clr_gradient">Families</span>
                </h2>
                <p className="ff_Montserrat fw-normal fs_md text-white m-0 pt-2 text-center text-md-start pe-lg-4 pe-xl-5">
                  We stock the three main families of cannabis at Purple Panda,
                  each of which has its own qualities.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <h4 className="ff_Montserrat fw-semibold fs_xl text-white m-0">
                    Indica:
                  </h4>
                  <p className="ff_Montserrat fw-normal fs_md text-white m-0 ps-3 pe-lg-4 pe-xl-5">
                    These are your bedtime buds, great for relaxing at the end
                    of the day and for treating stress and anxiety.
                  </p>
                </div>
                <div className="d-flex align-items-center pt-4">
                  <h4 className="ff_Montserrat fw-semibold fs_xl text-white m-0">
                    Sativa:
                  </h4>
                  <p className="ff_Montserrat fw-normal fs_md text-white m-0  ps-3 pe-lg-4 pe-xl-5">
                    Smoke up some Sativa for a boost of energy and creativity,
                    perfect for a sunny summer’s day with friends!
                  </p>
                </div>
                <div className="d-flex align-items-center pt-4 pb-4">
                  <h4 className="ff_Montserrat fw-semibold fs_xl text-white m-0">
                    Hybrid:
                  </h4>
                  <p className="ff_Montserrat fw-normal fs_md text-white m-0 ps-3 pe-lg-4 pe-xl-5">
                    Get the best of both worlds with our Hybrid range, bringing
                    together the sensations and flavors of Indica and Sativa for
                    something totally unique.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="mb-4 mb-md-0" md={5}>
              <div className="d_grid">
                <img
                  className="w-100 abu_grid_img1"
                  src={Cannabis_grid_img1}
                  alt="Cannabis_grid_img1"
                />
                <img
                  className="w-100 h-100 abu_grid_img2"
                  src={Cannabis_grid_img2}
                  alt="Cannabis_grid_img2"
                />
                <img
                  className="w-100 abu_grid_img3"
                  src={Cannabis_grid_img3}
                  alt="Cannabis_grid_img3"
                />
                <img
                  className="w-100 h-100 abu_grid_img4"
                  src={Cannabis_grid_img4}
                  alt="Cannabis_grid_img4"
                />
                <img
                  className="w-100 abu_grid_img5"
                  src={Cannabis_grid_img5}
                  alt="Cannabis_grid_img5"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cannabis;
