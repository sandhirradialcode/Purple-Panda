import React, { useState } from "react";
import { Container } from "react-bootstrap";
import nav_panda from "../assets/image/svg/nav_panda.svg";
import ri_search from "../assets/image/svg/ri_search.svg";
import cart_svg from "../assets/image/svg/cart_svg.svg";
import mdi_gift from "../assets/image/svg/mdi_gift.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setopenNav] = useState(true);
  if (openNav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <>
      <nav className="top_nav py-3">
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <a href="#" className="d-inline-block">
              <img src={mdi_gift} alt="mdi_gift" />
            </a>
            <p className="ff_Montserrat fw-light fs_md text-white m-0 text-center ps-1 ps-sm-3">
              <span className="fw-bolder">Black Friday</span>
              savings are here ,save up to 10% off on coupon code
            </p>
            <a
              href="#"
              className="ff_Montserra fw-bolder fs_md clr_gradient ms-1 ms-sm-3 d-inline-block">
              Shop Now
            </a>
          </div>
        </Container>
      </nav>
      <nav className="position-relative py-3">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <a href="#" className="d-inline-block nav_logo">
                <img src={nav_panda} alt="nav_panda" />
              </a>
            </div>
            <ul className="ps-0 mb-0 d-none d-md-flex gap-md-3 gap-lg-3 gap-xl-5 align-items-center">
              <li>
                <Link
                  to="/"
                  className="ff_Montserrat fw-normel fs_md text-white nav_links d-inline-block">
                  HOME
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="ff_Montserrat fw-normel fs_md text-white nav_links d-inline-block">
                  SHOP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ff_Montserrat fw-normel fs_md text-white nav_links d-inline-block">
                  ABOUT
                </a>
              </li>
              <li>
                <Link
                  to="/ContactPage"
                  className="ff_Montserrat fw-normel fs_md text-white nav_links d-inline-block">
                  CONTACT
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="ff_Montserrat fw-normel fs_md text-white nav_links d-inline-block">
                  FAQ
                </a>
              </li>
              <li>
                <form class="search_input d-flex align-items-center">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search here.."
                  />
                  <button type="submit" class="btn btn_search"></button>
                </form>
              </li>
              <li>
                <a href="#" className="d-inline-block">
                  <img src={cart_svg} alt="cart_svg" />
                </a>
              </li>
              <li>
                <button className="ff_Montserrat fw-bold fs_lg btn_1">
                  SIGN IN
                </button>
              </li>
            </ul>
            <button
              onClick={() => setopenNav(false)}
              className="d-flex justify-content-evenly flex-column d-md-none menu_btn">
              <span className="menu_line"></span>
              <span className="menu_line"></span>
              <span className="menu_line"></span>
            </button>
          </div>
        </Container>
        <div
          className={
            openNav ? "showNav d-md-none d-block" : "hideNav d-md-none d-block"
          }>
          <ul className="ps-0 mb-0 position-relative d-flex gap-4 justify-content-center w-100 min-vh-100 flex-column align-items-center">
            <button
              onClick={() => setopenNav(true)}
              className="bg-light btn-close  fs-4 position-absolute end-0 mt-4 me-4"></button>
            <li onClick={() => setopenNav(true)}>
              <Link
                to="/"
                className="ff_Montserrat fw-normel fs_md text-white nav_links d-inline-block">
                HOME
              </Link>
            </li>
            <li onClick={() => setopenNav(true)}>
              <a
                href="#"
                className="ff_Montserrat fw-normel fs_md text-white nav_links d-inline-block">
                SHOP
              </a>
            </li>
            <li onClick={() => setopenNav(true)}>
              <a
                href="#"
                className="ff_Montserrat fw-normel fs_md text-white nav_links d-inline-block">
                ABOUT
              </a>
            </li>
            <li onClick={() => setopenNav(true)}>
              <Link
                to="/ContactPage"
                className="ff_Montserrat fw-normel fs_md text-white nav_links d-inline-block">
                CONTACT
              </Link>
            </li>
            <li onClick={() => setopenNav(true)}>
              <a
                href="#"
                className="ff_Montserrat fw-normel fs_md text-white nav_links d-inline-block">
                FAQ
              </a>
            </li>
            <li onClick={() => setopenNav(true)}>
              <form class="search_input d-flex">
                <input type="text" name="search" placeholder="Search here.." />
                <button type="submit" class="btn btn_search"></button>
              </form>
            </li>
            <li onClick={() => setopenNav(true)}>
              <a href="#" className="d-inline-block">
                <img src={cart_svg} alt="cart_svg" />
              </a>
            </li>
            <li onClick={() => setopenNav(true)}>
              <button className="ff_Montserrat fw-bold fs_lg btn_1">
                SIGN IN
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
