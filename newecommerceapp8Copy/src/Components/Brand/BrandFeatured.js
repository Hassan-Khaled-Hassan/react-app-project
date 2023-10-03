import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import BrandCard from "./BrandCard";
import useHomeBrands from "../../Hooks2/Brands/useHomeBrands";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";
import { useEffect } from "react";

const BrandFeatured = ({ title, btntitle }) => {
  const [state, loading] = useHomeBrands();
  const [value, setValue] = useState(6);
  const updateValueBasedOnWindowWidth = () => {
    const innerWidth = window.innerWidth;

    // Modify the value based on your requirements
    if (innerWidth >= "767" && innerWidth <= "992") {
      setValue(4);
    } else if (innerWidth >= "575" && innerWidth <= "767") {
      setValue(3);
    } else if (innerWidth <= "575") {
      setValue(1);
    } else {
      setValue(6);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateValueBasedOnWindowWidth);
    updateValueBasedOnWindowWidth();
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener(
        "resize",
        updateValueBasedOnWindowWidth,
        "reload",
        updateValueBasedOnWindowWidth
      );
    };
  }, []);
  return (
    <div className="container-fluid container-lg">
      <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row
        className="my-1 d-flex justify-content-between brands cat"

      >
        {loading === false ? (
          <Swiper
            // dir="rtl"
            slidesPerView={value}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            {state && state.data ? (
              // eslint-disable-next-line array-callback-return
              state.data.slice(0, 12).map((item, index) => {
                return (
                  <SwiperSlide>
                    <BrandCard key={index} img={item.image} />
                  </SwiperSlide>
                );
              })
            ) : (
              <h2>لا يوجد تصنيفات اخري حتي الان ...</h2>
            )}
          </Swiper>
        ) : (
          <Spinner
            animation="border"
            variant="primary"
            className="my-0 mx-auto"
          />
        )}
      </Row>
    </div>
  );
};

export default BrandFeatured;
