import React from "react";
import { Container } from "react-bootstrap";

const PotentCannabis = () => {
  return (
    <>
      <section>
        <Container className="py-5">
          <h2 className="ff_Philosopher fw-bold fs_4xl text-white text-center m-0">
            Potent Cannabis <span className="clr_gradient">Alert</span>
          </h2>
          <p className="ff_Montserrat fw-normal fs_md text-white m-0 text-center pt-2">
            click here to try our most potent hand picked craft cannabis
          </p>
        </Container>
        <div className="min_vh_space"></div>
      </section>
    </>
  );
};

export default PotentCannabis;
