import { AddNewSignUp } from "../Type";
const Initial = {
  createUser: [],
  loading: true,
};
const authReducer = (state = Initial, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case AddNewSignUp:
      return {
        ...state,
        createUser: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
