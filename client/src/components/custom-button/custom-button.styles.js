import styled, { css } from "styled-components";

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  letter-spacing: 0px;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #ffffff;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const CustomButtonContainer = styled.button`
  max-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  margin-right: 17px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    letter-spacing: 0px;
  }
`;
