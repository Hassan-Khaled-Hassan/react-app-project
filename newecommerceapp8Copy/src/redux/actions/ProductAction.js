import {
  GetError,
  AddProduct,
  GetProducts,
  GetUniqueProduct,
  GetRelatedProduct,
  DeleteOneProduct,
  EditOneProduct,
} from "../Type";
import { useInsertDataWithImg } from "../../HooksAxios/useInsertData";
import useGetData from './../../HooksAxios/useGetData';
import useDeleteData from "../../HooksAxios/useDeleteData";
import { useUpdateDataWithImg } from "../../HooksAxios/useUpdateData";


export const createProduct = (formData) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useInsertDataWithImg(`/api/v1/products`, formData);
      console.log(res);
      dispatch({
        type: AddProduct,
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
export const GetAllProduct = (id) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(`/api/v1/products?limit=${id}`);
      dispatch({
        type: GetProducts,
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
export const GetAllProductPage = (page,limit) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(
        `/api/v1/products?page=${page}&limit=${limit}`
      );
      console.log(res);
      dispatch({
        type: GetProducts,
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
export const GetAllProductPageSearch = (queryString) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(`/api/v1/products?${queryString}`);
      console.log(res);
      dispatch({
        type: GetProducts,
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
export const GetSpecificProduct = (id) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(`/api/v1/products/${id}`);
      console.log(res);
      dispatch({
        type: GetUniqueProduct,
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


export const GetProductLike = (id) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(`/api/v1/products?category=${id}`);
      console.log(res);
      dispatch({
        type: GetRelatedProduct,
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

export const DeleteProduct = (id) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      let response = await useDeleteData(`/api/v1/products/${id}`);
      console.log(response);
      dispatch({
        type: DeleteOneProduct,
        payload: response,
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
export const UpdateProduct = (id,formData) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useUpdateDataWithImg(
        `/api/v1/products/${id}`,
        formData
      );
      console.log(res);
      dispatch({
        type: EditOneProduct, 
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
