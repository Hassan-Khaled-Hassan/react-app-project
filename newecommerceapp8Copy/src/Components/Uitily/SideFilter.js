import React from 'react'
import { Row } from 'react-bootstrap'
import useSideBarSearchHook from "../../Hooks2/useSideBarSearch";

const SideFilter = () => {

  const [
    AllCategories,
    AllBrands,
    clickCategory,
    SelectBrand,
    PriceFrom,
    PriceTo,
  ] = useSideBarSearchHook();
  let LowPrice = localStorage.getItem("priceFrom");
  let HighPrice = localStorage.getItem("priceTo");
  console.log(HighPrice);
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input onChange={clickCategory} type="checkbox" value="0" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {AllCategories.length >= 1 ? (
            AllCategories.map((item, index) => {
              return (
                <div className="d-flex mt-2" key={index}>
                  <input
                    onChange={clickCategory}
                    type="checkbox"
                    value={item._id}
                  />
                  <div className="filter-sub me-2 ">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h5>لا يوجد تصنيفات متاحة حتي الان </h5>
          )}
        </div>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>
          <div className="d-flex mt-3">
            <input onChange={SelectBrand} type="checkbox" value="0" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {AllBrands.length >= 1 ? (
            AllBrands.map((item, index) => {
              return (
                <div className="d-flex mt-2" key={index}>
                  <input
                    onChange={SelectBrand}
                    type="checkbox"
                    value={item._id}
                  />
                  <div className="filter-sub me-2 ">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h5>لا يوجد ماركات متاحة حتي الان </h5>
          )}
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 ">ابل</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 ">سامسونج</div>
          </div>
        </div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            value={LowPrice}
            onChange={PriceFrom}
            className="m-2 text-center input"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            onChange={PriceTo}
            value={HighPrice}
            className="m-2 text-center input"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter
