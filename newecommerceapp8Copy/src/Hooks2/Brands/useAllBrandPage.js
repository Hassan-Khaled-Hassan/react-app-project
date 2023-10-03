import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBrands, GetBrandPage } from "../../redux/actions/BrandAction";

const useAllBrandPage = () => {
  const dispatch = useDispatch();
  // at first load
  useEffect(() => {
    dispatch(GetBrands(4));
  }, []);
  // to get state from redux
  const state = useSelector((state) => state.AllBrands.Category);
  const loading = useSelector((state) => state.AllBrands.loading);

  let pageCount = 0;
  if (state.paginationResult) {
    pageCount = state.paginationResult.numberOfPages;
  }
  const getPage = (page) => {
    //at press pagination
    dispatch(GetBrandPage(page));
    console.log(page);
  };
  return [state, loading, pageCount, getPage];
};

export default useAllBrandPage;
