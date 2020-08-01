import React from "react";
import { shallow } from "enzyme";
// import configureStore from "redux-mock-store"
import { testStore } from "../../utils";
import Checkout from "./Checkout";

// let wrapper;

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Checkout store={store} />);
  return wrapper;
};

describe("Checkout Page", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      cart: {
        cartItems: [],
        total: 50
      },
      
    };

    wrapper = setUp(initialState);
  });

  it("take snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the Checkout component", () => {
    expect(wrapper.length).toBe(1);
  });

  
});
