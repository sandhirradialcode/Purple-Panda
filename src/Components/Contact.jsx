import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Container className="py-5">
          <div>
            <h2 className="ff_Philosopher fw-normal fs_4xl text-white m-0 text-center">
              Contact
            </h2>
            <p className="ff_Montserrat fw-normal fs_md text-center m-0 text-white pt-1">
              Home > Contact
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
