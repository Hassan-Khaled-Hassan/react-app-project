import {
  GetAllCategory,
  GetError,
  AddNewCategory,
  GetOneCategory,
} from "../Type";
const Initial = {
    Category: [],
    loading : true,
    oneCategory:[]
}
const CategoryReducer = (state = Initial, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case GetAllCategory:
        return {
          ...state,
          Category: action.payload,
          loading: false,
        };
      case GetOneCategory:
        return {
          oneCategory: action.payload,
          loading: false,
        };
      case AddNewCategory:
        return {
          Category: action.payload,
          loading: false,
        };
      case GetError:
        return {
          loading: true,
          Category: action.payload,
        };
      default:
        return state;
    }
};
export default CategoryReducer;