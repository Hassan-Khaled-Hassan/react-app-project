import { GetAllBrands, GetError, AddNewBrand, GetOneBrand } from "../Type";
const Initial = {
  Category: [],
  loading: true,
  oneBrand :[]
};
const BrandReducer = (state = Initial, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GetAllBrands:
      return {
        ...state,
        Category: action.payload,
        loading: false,
      };
    case GetOneBrand:
      return {
        oneBrand: action.payload,
        loading: false,
      };
    case AddNewBrand:
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
export default BrandReducer;
