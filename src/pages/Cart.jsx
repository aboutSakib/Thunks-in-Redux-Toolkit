import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../store/action/cart";

const Cart = () => {
  const cart = useSelector((storeState) => storeState.cart);
  const dispatch = useDispatch();
  let totalAmount = 0;
  cart.forEach((item) => (totalAmount += item.price * item.quantity));
  return (
    <>
      <div className="account-setting__content">
        <div className="account-setting__content__title">
          <h4> Product List in Your Cart</h4>
        </div>
        <div className="product-table-container">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="total-price">Your total price is:${totalAmount}</h2>

        <div className="mt-50">
          <button onClick={() => dispatch(clearCart())} className="btn-big">
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
