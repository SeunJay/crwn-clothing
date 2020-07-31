import React from "react";
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
} from "./cart-item.styles";


const CartItem = ({ cartItem: { imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <CartItemDetails>
        <span className="name" style={{ fontSize: "16px" }}>
          {name}
        </span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
