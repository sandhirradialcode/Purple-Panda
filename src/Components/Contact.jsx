import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <header className="bg_contact min_60vh">
        <Navbar />
        <section>
          <Container className="py-5">
            <div className="d-flex flex-column align-items-center">
              <h2 className="ff_Philosopher fw-normal fs_4xl text-white m-0 text-center">
                Contact
              </h2>
              <p className="ff_Montserrat fw-normal fs_md text-center m-0 text-white pt-1">
                Home &#62; Contact
              </p>
            </div>
          </Container>
        </section>
      </header>
    </>
  );
};

export default Contact;
