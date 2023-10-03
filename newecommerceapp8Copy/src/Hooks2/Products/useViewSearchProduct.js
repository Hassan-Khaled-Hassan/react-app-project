import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProduct, GetAllProductPage, GetAllProductPageSearch } from '../../redux/actions/ProductAction';


const useViewSearchProduct = () => {
  let limit = 8;
  const dispatch = useDispatch();

  const GetProduct = async ()=>{
    getStorge();
    sortData();
  // await dispatch(GetAllProduct(limit));
    await dispatch(
      GetAllProductPageSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${QueryCat}&${QueryBrand}${PriceHigh}${PriceLow}`
      )
    );
  }
  useEffect(() => {
    GetProduct()
  }, []);
  // get a state of category from redux
  const Products = useSelector((state) => state.allProduct.allProducts);
  // get a state of loading from redux
  const loading = useSelector((state) => state.allProduct.loading);
  //  ----------------------------------------------------
  let Items = [];let Paginations = [];let Result=0;
 try {
   if (Products.data) Items = Products.data;
   else Items = [];
 } 
 catch (e) {}
 try {
   if (Products.paginationResult)
     Paginations = Products.paginationResult;
   else Paginations = [];
 } catch (e) {}
 try {
   if (Products.results) Result = Products.results;
   else Result = 0;
 } catch (e) {}
  const getPage = (page) => {
        getStorge();
        sortData();

    //at press pagination
    dispatch(
      GetAllProductPageSearch(
        `sort=${sort}&page=${page}&limit=${limit}&keyword=${word}&${QueryCat}&${QueryBrand}${PriceHigh}${PriceLow}`
      )
    );
  };
  // =================================
  let PriceLow = "",
    PriceHigh = "";
  let word = "",
    QueryCat = "",
    QueryBrand = "",
    PriceTo = "",
    PriceFrom = "";
  const getStorge = () => {
    if (localStorage.getItem("SearchWord") != null) {
      word = localStorage.getItem("SearchWord");
    }
     if (localStorage.getItem("catCecked") != null){
      QueryCat = localStorage.getItem("catCecked")
    }
     if (localStorage.getItem("brandCecked") != null){
      QueryBrand = localStorage.getItem("brandCecked")
    }
    if (localStorage.getItem("priceFrom") != null) {
      PriceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo") != null) {
      PriceTo = localStorage.getItem("priceTo");
    }
    if (PriceFrom === "" || PriceFrom <= 0) {
      PriceLow = "";
    } else {
      PriceLow = `&price[gte]=${PriceFrom}`;
    }
    if (PriceTo === "" || PriceTo <= 0) {
      PriceHigh = "";
    } else {
      PriceHigh = `&price[lte]=${PriceTo}`;
    }
  };

  // ====================================
   let sortType = "",
     sort;
  // sort type
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    if (sortType === "الاكثر مبيعا") {
      sort = "-sold";
    } else if (sortType === "الاعلي تقييما") {
      sort = "-ratingsQuantity";
    } else if (sortType === "الاعلي كمية") {
      sort = "-quantity";
    } else if (sortType === " السعر من الاقل للاعلي") {
      sort = "+price";
    } else if (sortType === "السعر من الاعلي للاقل") {
      sort = "-price";
    } else {
      sort = "";
    }
  };
  return [Items, loading, Paginations, getPage, GetProduct, Result];
}

export default useViewSearchProduct