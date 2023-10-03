import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const initailState = {};

const meddleware = [thunk];

const store = createStore(
  rootReducer,
  initailState,
  composeWithDevTools(applyMiddleware(...meddleware))
);

export default store;
