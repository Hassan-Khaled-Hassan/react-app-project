import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetCategories } from "../redux/actions/CategoryAction";
import { GetBrands } from "../redux/actions/BrandAction";
import useViewSearchProduct from './Products/useViewSearchProduct';
const useSideBarSearchHook = () => {
  const [Items, loading, Paginations, getPage, GetProduct, Result] =
    useViewSearchProduct();
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      await dispatch(GetCategories());
      await dispatch(GetBrands());
    };
    get();
  }, []);
  const Category = useSelector((state) => state.AllCategory.Category);
  const Brands = useSelector((state) => state.AllBrands.Category);
  //to get category
  let category = [];
  if (Category.data) {
    category = Category.data;
  }
  let brand = [];
  if (Brands.data) {
    brand = Brands.data;
  }
  const [catChecked, setCatChecked] = useState([]);
  var queryCat = "",
    queryBrand = "";
  const clickCategory = (e) => {
    let value = e.target.value
    if (value === "0") {
        setCatChecked([])
    }
    else {
        if (e.target.checked === true) {
            setCatChecked([...catChecked, value])
        } else if (e.target.checked === false) {
            const newArry = catChecked.filter((e) => e !== value)
            setCatChecked(newArry)
        }
    }
  }
  useEffect(() => {
    queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catCecked", queryCat);
    setTimeout(() => {
      GetProduct();
    }, 1000);
  }, [catChecked]);
  const [brandChecked, setBrandChecked] = useState([]);
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArry = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArry);
      }
    }
  };
  useEffect(() => {
    queryBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandCecked", queryBrand);
    setTimeout(() => {
      GetProduct();
    }, 1000);
  }, [brandChecked]);
  // ------------------------------------
  // ----------the price  -------------
  const [From, setPriceFrom] = useState(0);
  const [To, setToFrom] = useState(0);

  const priceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);

    setPriceFrom(e.target.value);
  };
  const priceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setToFrom(e.target.value);
  };
  useEffect(() => {
    setTimeout(() => {
      GetProduct();
    }, 1000);
  }, [From, To]);
  return [category, brand, clickCategory, clickBrand, priceFrom, priceTo];
  // =================================================
}

export default useSideBarSearchHook;