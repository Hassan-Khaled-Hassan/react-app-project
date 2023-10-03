import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetCategories, GetCategoriesPage } from '../../redux/actions/CategoryAction';

const useAllCategoryPage = () => {
   const dispatch = useDispatch();
   // at first load
   useEffect(() => {
     dispatch(GetCategories(4));
   }, []);
   // to get state from redux
   const state = useSelector((state) => state.AllCategory.Category);
   const loading = useSelector((state) => state.AllCategory.loading);

   let pageCount = 0;
   if (state.paginationResult) {
     pageCount = state.paginationResult.numberOfPages;
   }
   const getPage = (page) => {
     //at press pagination
     dispatch(GetCategoriesPage(page));
     console.log(page);
   };
   return [state, loading, pageCount, getPage];
}

export default useAllCategoryPage