import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProduct } from "../../redux/actions/ProductAction";
import { GetCategories } from "../../redux/actions/CategoryAction";

const useHomeProduct1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProduct());
  }, []);
  // get a state of category from redux
  const Products = useSelector((state) => state.allProduct.allProducts);
  // get a state of loading from redux
  const loading = useSelector((state) => state.allProduct.loading);
   let Items = [];
   //get 4 product
   if (Products && Products.data) {
     Items = Products.data.slice(0, 4);
   } else {
     Items = [];
   }
   let items = [];
   //get 4 product
   if (Products && Products.data) {
     items = Products.data;
   } else {
     items = [];
   }
   useEffect(() => {
     if (Items) dispatch(GetCategories());
   }, [Items]);
  return [Items, loading, items];
};

export default useHomeProduct1;
