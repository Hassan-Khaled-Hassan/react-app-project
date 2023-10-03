import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
import useHomeCategory from "../../Hooks2/Category/useHomeCategory";
// -------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HomeCategory = () => {
  const [state, loading, colors] = useHomeCategory();
  const [value, setValue] = useState(6);
   const updateValueBasedOnWindowWidth = () => {
     const innerWidth = window.innerWidth;

     // Modify the value based on your requirements
     if (innerWidth >= "767" && innerWidth <= "992") {
       setValue(4);
     } else if (innerWidth >= "575"&&innerWidth <= "767") {
       setValue(3);
     } else if (innerWidth <= "575") {
       setValue(2);
     } else {
       setValue(6);
     }
   };
    useEffect(() => {
      window.addEventListener("resize", updateValueBasedOnWindowWidth);
      updateValueBasedOnWindowWidth();
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", updateValueBasedOnWindowWidth);
      };
    }, []);
  return (
    <div className="container-fluid container-lg">
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row
        className="my-2 d-flex justify-content-between cat"
        
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
            modules={[Autoplay,Navigation, Pagination]}
            className="mySwiper"
          >
            {state.data ? (
              // eslint-disable-next-line array-callback-return
              state.data.slice(0, 12).map((item, index) => {
                return (
                  <SwiperSlide>
                    <CategoryCard
                      key={index}
                      title={item.name}
                      img={item.image}
                      background={colors[index]}
                    />
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
    // =====================
    // <Container >
    //   <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
    //   <Row className="my-2 d-flex justify-content-between" style={{backgroundColor: "white",borderRadius: "12px"}}>
    //   {loading === false ? (
    //   <Slider {...settings}>
    //       {state.data ? (
    //         // eslint-disable-next-line array-callback-return
    //         state.data.map((item, index) => {
    //           return (
    //             <CategoryCard
    //               key={index}
    //               title={item.name}
    //               img={item.image}
    //               background={colors[index]}
    //             />
    //           );
    //         })
    //       ) : (
    //         <h2>لا يوجد تصنيفات اخري حتي الان ...</h2>
    //       )}
    //   </Slider>
    //     ) : (
    //       <Spinner
    //         animation="border"
    //         variant="primary"
    //         className="my-0 mx-auto"
    //       />
    //     )}
    //   </Row>
    // </Container>
  );
};

export default HomeCategory;
