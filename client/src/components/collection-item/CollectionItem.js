import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  CollectionItemBackgroundImage,
  CollectionFooter,
  AddButton,
} from "./collection-item.styles";
// import "./collection-item.scss";
import CustomButton from "../custom-button/CustomButton";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemBackgroundImage imageUrl={imageUrl} />
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooter>
      {/* <div className="custom-button"></div> */}
      <CustomButton onClick={() => addItemToCart(item)} inverted>
        ADD TO CART
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
