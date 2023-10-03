import useGetData from "../../HooksAxios/useGetData";
import {
  GetAllCategory,
  GetError,
  AddNewCategory,
  GetOneCategory,
} from "../Type";
import { useInsertDataWithImg} from "../../HooksAxios/useInsertData";

// get all category
export const GetCategories = (limit) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(`/api/v1/categories?limit=${limit}`);
      //console.log(res);
      dispatch({
        type: GetAllCategory,
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
export const GetCategoriesPage = (page) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(`/api/v1/categories?limit=4&page=${page}`);
      //console.log(res);
      dispatch({
        type: GetAllCategory,
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

export const CreateCategory = (formData) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useInsertDataWithImg(`/api/v1/categories?`, formData);
      //console.log(res);
      dispatch({
        type: AddNewCategory,
        payload: res,
        loading : true
      });
    } catch (e) {
      dispatch({
        type: GetError,
        payload: "error" + e,
      });
    }
  };
};

export const GetSpecificCategory = (id) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(
        `api/v1/categories/${id}`
      );
      //console.log(res);
      dispatch({
        type: GetOneCategory,
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