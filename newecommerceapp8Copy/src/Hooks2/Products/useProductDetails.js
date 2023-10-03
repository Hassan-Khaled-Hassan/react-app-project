import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetProductLike, GetSpecificProduct } from '../../redux/actions/ProductAction';
import mobile from "../../images/mobile.png";
import { GetCategories, GetSpecificCategory } from '../../redux/actions/CategoryAction';
import { GetSpecificBrand } from '../../redux/actions/BrandAction';
const useProductDetails = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSpecificProduct(id));
  }, []);

  const Product = useSelector((state) => state.allProduct.oneProduct);
  const Category = useSelector((state) => state.AllCategory.oneCategory);
  const Brand = useSelector((state) => state.AllBrands.oneBrand);
  const productLike = useSelector((state) => state.allProduct.ProductLike);
  const loading = useSelector((state) => state.allProduct.loading);
  //to show products item
  let item = [];
  if (Product && Product.data) item = Product.data;
  else item = [];
  // -----------------------------
  useEffect(() => {
    if (item.category) dispatch(GetSpecificCategory(item.category));
    if (item.brand) dispatch(GetSpecificBrand(item.brand));
    if (item.category) dispatch(GetProductLike(item.category));
    if (item.category) dispatch(GetCategories());;
  }, [item]);
  //  console.log(Brand);
  //to view images gallery
  let images = [];
  if (item && item.images)
    images = item.images.map((img) => {
      return { original: img };
    });
  else {
    images = [{ original: `${mobile}` }];
  }
  //to show category item
  let cat = [];
  if (Category && Category.data) cat = Category.data;
  else cat = [];

  //to show brand item
  let brand = [];
  if (Brand && Brand.data) brand = Brand.data;
  else brand = [];
  let prod = [];
  if (productLike) prod = productLike.data;
  else prod = [];

  return [item, images, cat, brand, prod, loading];
}

export default useProductDetails