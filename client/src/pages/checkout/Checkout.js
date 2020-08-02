import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItems from "../../components/checkout-items/CheckoutItems";
import StripeButton from "../../components/stripe-button/StripeButton";
import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlockContainer,
  TotalContainer,
  TestWarning
} from "./checkout.styles";


export const Checkout = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItems key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalContainer>
        <span>TOTAL: ${total}</span>
      </TotalContainer>
      <TestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 1/21 - CVV: 123
      </TestWarning>
      <StripeButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(Checkout);
