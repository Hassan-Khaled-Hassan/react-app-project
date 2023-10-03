import {combineReducers} from 'redux';
import CategoryReducer from './CategoryReducer';
import BrandReducer from './BrandReducer';
import SubCategoryReducer from './SubcategoryReducer';
import ProductReducer from './ProductReducer';
import authReducer from './authReducer';

export default combineReducers({
  AllCategory: CategoryReducer,
  AllBrands: BrandReducer,
  SubCategory: SubCategoryReducer,
  allProduct: ProductReducer,
  authReducer: authReducer,
});