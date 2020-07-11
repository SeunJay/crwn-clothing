import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/original.svg";
import "./header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="contact">CONTACT</OptionLink>
        {currentUser ? (
          <>
            <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
          </>
        ) : (
          <OptionLink className="option" to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
