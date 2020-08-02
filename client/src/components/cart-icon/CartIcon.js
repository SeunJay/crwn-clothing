import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
// import "./cart-icon.scss";
import {CartIconWrapper, ShoppingIcon, ItemCount} from "./cart-icon.styles"


export const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconWrapper onClick={toggleCartHidden}>
      <ShoppingIcon
        className="shopping-icon"
        style={{ width: "24px", height: "24px" }}
      />
      <ItemCount className="item-count">{itemCount}</ItemCount>
    </CartIconWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
