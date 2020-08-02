import React from "react";
import { shallow } from "enzyme";
import { Checkout } from "./Checkout";
import CheckoutItems from "../../components/checkout-items/CheckoutItems";

describe("Checkout", () => {
  let wrapper;

  let mockItems = [{ id: 1 }, { id: 2 }]

  beforeEach(() => {
    const mockProps = {
      cartItems: mockItems,
      total: 50,
    };

    wrapper = shallow(<Checkout {...mockProps} />);
  });

  it("checkout", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("checkout", () => {
    expect(wrapper.find(CheckoutItems).length).toBe(mockItems.length);
  });
});
