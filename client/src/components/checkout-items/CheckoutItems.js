import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItemToCart,
  removeItem,
} from "../../redux/cart/cart.actions";
import {
  CheckoutItemsContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-items.styles";
import "./checkout-items.scss";

const CheckoutItems = ({
  cartItem,
  clearItemFromCart,
  addItemToCart,
  removeItem,
}) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CheckoutItemsContainer>
      <ImageContainer>
        <img src={imageUrl} alt="cart-item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItemToCart(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemsContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItems);
