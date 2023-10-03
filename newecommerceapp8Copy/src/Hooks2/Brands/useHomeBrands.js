import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBrands } from "../../redux/actions/BrandAction";
const useHomeBrands = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetBrands());
  }, []);
  // get a state of category from redux
  const state = useSelector((state) => state.AllBrands.Category);
  // get a state of loading from redux
  const loading = useSelector((state) => state.AllBrands.loading);
  return [state, loading];
};

export default useHomeBrands;
