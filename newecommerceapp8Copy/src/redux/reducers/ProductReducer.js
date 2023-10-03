import {
  GetError,
  AddProduct,
  GetProducts,
  GetUniqueProduct,
  GetRelatedProduct,
  DeleteOneProduct,
  EditOneProduct,
} from "../Type";
const Initial = {
  Product: [], // for create
  allProducts: [], //for get al product //برجع فيها النتيجه بتاعت ال create يعني هل تم انشائه ولا ايه
  oneProduct: [],
  ProductLike: [],
  DeleteProduct: [],
  UpdateOneProduct: [],
  loading: true,
};
const ProductReducer = (state = Initial, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case AddProduct:
      return {
        ...state,
        Product: action.payload,
        loading: false,
      };
    case GetProducts:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case GetUniqueProduct:
      return {
        oneProduct: action.payload,
        loading: false,
      };
    case GetRelatedProduct:
      return {
        ...state,
        ProductLike: action.payload,
        loading: false,
      };
    case DeleteOneProduct:
      return {
        ...state,
        DeleteProduct: action.payload,
        loading: false,
      };
    case EditOneProduct:
      return {
        ...state,
        UpdateOneProduct: action.payload,
        loading: false,
      };
    case GetError:
      return {
        loading: true,
        Product: action.payload,
      };
    default:
      return state;
  }
};
export default ProductReducer;
