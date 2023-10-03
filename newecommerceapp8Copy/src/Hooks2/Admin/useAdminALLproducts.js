import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProduct, GetAllProductPage } from '../../redux/actions/ProductAction';

const useAdminALLproducts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetAllProduct(12));
    }, []);
    // get a state of category from redux
    const Products = useSelector((state) => state.allProduct.allProducts);
    // get a state of loading from redux
    const loading = useSelector((state) => state.allProduct.loading);
    let Items = [];
    //get 4 product
    if (Products && Products.data) {
      Items = Products.data;
    } else {
      Items = [];
    }
    let Paginations = [];
    //get 4 product
    if (Products && Products.data) {
      Paginations = Products.paginationResult;
    } else {
      Items = [];
    }
    const getPage = (page) => {
      //at press pagination
      dispatch(GetAllProductPage(page, 12));
      console.log(page);
    };
    return [Items, Paginations, loading, getPage];
}

export default useAdminALLproducts