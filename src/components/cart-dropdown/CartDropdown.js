import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.scss";
import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps, null)(CartDropdown);
