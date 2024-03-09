// import { composeWithDevTools } from "@redux-devtools/extension";
// import { combineReducers, createStore } from "redux";
// import { cartReducer } from "./reducers/cart";
// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   theme: themeReducer,
//   cart: cartReducer,
// });
// export const store = createStore(rootReducer, composeWithDevTools());

// using reduc-toolkit
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appApi } from "./features/api/apiSlice";
import { cartReducer } from "./reducers/cart";
import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";
import { todoSlice } from "./reducers/todo";

const rootReducer = {
  counter: counterReducer,
  theme: themeReducer,
  cart: cartReducer,
  todoState: todoSlice.reducer,
  [appApi.reducerPath]: appApi.reducer,
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (gM) => gM().concat(appApi.middleware),
});
setupListeners(store.dispatch);
