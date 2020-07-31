import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 340px;
  padding: 20px;
  border: 1px solid #000;
  position: absolute;
  background-color: #fff;
  top: 80px;
  right: 70px;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const SpanMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
