import React from "react";
import { Container } from "react-bootstrap";
import Mushrooms from "../assets/image/png/Mushrooms.png";
import Extracts from "../assets/image/png/Extracts.png";
import Vapes_Accessories from "../assets/image/png/Vapes_Accessories.png";
import CBD from "../assets/image/png/CBD.png";
import Edibles from "../assets/image/png/Edibles.png";
import Cannabis from "../assets/image/png/Cannabis.png";
import Bulk_Orders from "../assets/image/png/Bulk_Orders.png";

const Shop = () => {
  return (
    <>
      <section className="bg_dark_blue position-relative">
        <span className="blue_sec position-absolute bottom-0 start-0"></span>
        <Container className="py-5">
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="1000"
            className="d-flex justify-content-between gap-4 overflow_scroll z_index2">
            <div className="custom_w d-flex flex-column align-items-center">
              <img className="shop_img" src={Mushrooms} alt="Mushrooms" />
              <h4 className="ff_Philosopher fw-bold fs_xl text-white text-center m-0 pt-2">
                Mushrooms
              </h4>
            </div>
            <div className="custom_w d-flex flex-column align-items-center">
              <img className="shop_img" src={Extracts} alt="Mushrooms" />
              <h4 className="ff_Philosopher fw-bold fs_xl text-white text-center m-0 pt-2">
                Extracts
              </h4>
            </div>
            <div className="custom_w d-flex flex-column align-items-center">
              <img
                className="shop_img"
                src={Vapes_Accessories}
                alt="Vapes_Accessories"
              />
              <h4 className="ff_Philosopher fw-bold fs_xl text-white text-center m-0 pt-2 w_133">
                Vapes & Accessories
              </h4>
            </div>
            <div className="custom_w d-flex flex-column align-items-center">
              <img className="shop_img" src={CBD} alt="CBD" />
              <h4 className="ff_Philosopher fw-bold fs_xl text-white text-center m-0 pt-2">
                CBD
              </h4>
            </div>
            <div className="custom_w d-flex flex-column align-items-center">
              <img className="shop_img" src={Edibles} alt="Edibles" />
              <h4 className="ff_Philosopher fw-bold fs_xl text-white text-center m-0 pt-2">
                Edibles
              </h4>
            </div>
            <div className="custom_w d-flex flex-column align-items-center">
              <img className="shop_img" src={Cannabis} alt="Cannabis" />
              <h4 className="ff_Philosopher fw-bold fs_xl text-white text-center m-0 pt-2">
                Cannabis
              </h4>
            </div>
            <div className="custom_w d-flex flex-column align-items-center">
              <img className="shop_img" src={Bulk_Orders} alt="Bulk_Orders" />
              <h4 className="ff_Philosopher fw-bold fs_xl text-white text-center m-0 pt-2">
                Bulk Orders
              </h4>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Shop;
