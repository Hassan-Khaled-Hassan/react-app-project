import { GetError, AddSubCategory, GetSubCategories } from "../Type";
const Initial = {
  SubCategory: [],
  loading: true,
};
const SubCategoryReducer = (state = Initial, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case AddSubCategory:
      return {
        ...state, // علشان نكمل علي البيانات السابقه 
        SubCategory: action.payload,
        loading: false,
      };
    case GetSubCategories:
      return {
        SubCategory: action.payload,
        loading: false,
      };
    case GetError:
      return {
        loading: true,
        SubCategory: action.payload,
      };
    default:
      return state;
  }
};
export default SubCategoryReducer;
