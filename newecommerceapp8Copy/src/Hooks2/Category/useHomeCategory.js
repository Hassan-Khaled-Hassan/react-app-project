import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetCategories } from '../../redux/actions/CategoryAction';

const useHomeCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCategories());
  }, []);
  // get a state of category from redux
  const state = useSelector((state) => state.AllCategory.Category);
  // get a state of loading from redux
  const loading = useSelector((state) => state.AllCategory.loading);
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
    "#FFD3E8",
    "#55CFDF",
    "#FFD3E8",
  ];
  return [state, loading, colors];
}

export default useHomeCategory