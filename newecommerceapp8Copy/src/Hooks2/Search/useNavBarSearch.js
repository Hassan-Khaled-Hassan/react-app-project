import React, { useEffect } from "react";
import { useState } from "react";
import useViewSearchProduct from "../Products/useViewSearchProduct";

const useNavBarSearch = () => {
  const [Items, loading, Paginations, getPage, GetProduct, Result] =
    useViewSearchProduct();
  const [Word, SetWord] = useState("");
  const OnChangeSearch = (e) => {
    console.log(e.target.value);
    localStorage.setItem("SearchWord", e.target.value);
    SetWord(e.target.value);
    const path = window.location.pathname;
    if (path != "/products") {
      window.location.href = "/products";
    }
  };
  console.log(Word);
  useEffect(() => {
    setTimeout(() => {
      GetProduct();
    }, 1000);
  }, [Word]);
  return [OnChangeSearch, Word];
};

export default useNavBarSearch;
