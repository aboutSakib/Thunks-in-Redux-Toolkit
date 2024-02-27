export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "cart/addToCart": {
      const product = state.find((item) => item.id === action.payload.id);
      return product
        ? state.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          })
        : [...state, { ...action.payload, quantity: 1 }];
    }

    case "cart/removeFromCart": {
      return state.filter((item) => item.id !== action.payload);
    }

    case "cart/modifyQunatityOfItem": {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
    }
    case "cart/clearCart": {
      return [];
    }
    default:
      return state;
  }
};

// using  reactToolkit
// import { createReducer } from "@reduxjs/toolkit";
// import {
//   addToCart,
//   clearCart,
//   modifyQunatityOfItem,
//   removeFromCart,
// } from "../action/cart";

// export const cartReducer = createReducer([], (builder) => {
//   builder
//     .addCase(addToCart, (state, acation) => {
//       const product = state.find((item) => item.id === acation.payload.id);
//       product
//         ? (product.quantity += 1)
//         : state.push({ ...acation.payload, quantity: 1 });
//     })
//     .addCase(removeFromCart, (state, action) => {
//       return state.filter((item) => item.id !== action.payload);
//     })
//     .addCase(modifyQunatityOfItem, (state, action) => {
//       const productIndex = state.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       state[productIndex].quantity = action.payload.quantity;
//     })
//     .addCase(clearCart, () => {
//       return [];
//     })
//     .addDefaultCase((state) => {
//       return state;
//     });
// });
