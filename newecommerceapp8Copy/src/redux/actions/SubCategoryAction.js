
import { GetError, AddSubCategory, GetSubCategories } from "../Type";
import { useInsertData } from "../../HooksAxios/useInsertData";
import useGetData from "../../HooksAxios/useGetData";
 // create new sub category
export const CreateSubCategory = (formData) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useInsertData(`/api/v1/subcategories?`, formData);
      console.log(res);
      dispatch({
        type: AddSubCategory,
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

 // get all  sub category based on category id
export const GetSubCategoriesOnCategory  = (id) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
      console.log(res);
      dispatch({
        type: GetSubCategories,
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
