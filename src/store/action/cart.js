export const addToCart = (product) => {
  return {
    type: "cart/addToCart",
    payload: product,
  };
};
export const removeFromCart = (productID) => {
  return {
    type: "cart/removeFromCart",
    payload: productID,
  };
};
export const modifyQunatityOfItem = (obj) => {
  return {
    type: "cart/modifyQunatityOfItem",
    payload: obj,
  };
};
export const clearCart = () => {
  return {
    type: "cart/clearCart",
  };
};

// using reactTollkit
// import { createAction } from "@reduxjs/toolkit";
// export const addToCart = createAction("cart/addToCart");
// export const removeFromCart = createAction("cart/removeFromCart");
// export const modifyQunatityOfItem = createAction("cart/modifyQunatityOfItem");
// export const clearCart = createAction("cart/clearCart");
