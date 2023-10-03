import useGetData from "../../HooksAxios/useGetData";
import { GetAllBrands, GetError, AddNewBrand, GetOneBrand } from "../Type";
import { useInsertDataWithImg } from "../../HooksAxios/useInsertData";

// get all category
export const GetBrands = (limit) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(`/api/v1/brands?limit=${limit}`);
      // console.log(res);
      dispatch({
        type: GetAllBrands,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: GetError,
        payload: "error" + e,
      });
    }
  };
};
export const GetBrandPage = (page) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(`/api/v1/brands?limit=4&page=${page}`);
      //console.log(res);
      dispatch({
        type: GetAllBrands,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: GetError,
        payload: "error" + e,
      });
    }
  };
};

export const CreateBrand = (formData) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useInsertDataWithImg(`/api/v1/brands?`, formData);
      //console.log(res);
      dispatch({
        type: AddNewBrand,
        payload: res,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GetError,
        payload: "error" + e,
      });
    }
  };
};

export const GetSpecificBrand = (id) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(`api/v1/brands/${id}`);
      //console.log(res);
      dispatch({
        type: GetOneBrand,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: GetError,
        payload: "error" + e,
      });
    }
  };
};