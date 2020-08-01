import { applyMiddleware, createStore } from "redux";
import rootReducer from "../redux/root-reducer";
import { middlewares } from "../redux/store";

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
