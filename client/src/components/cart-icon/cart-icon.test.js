import React from "react";
import { shallow } from "enzyme";
import { CartIcon } from "./CartIcon";

describe("Cart icon component", () => {
  let wrapper;
  let mockToggleCartHidden;
  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 5,
      toggleCartHidden: mockToggleCartHidden,
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it("should render the cart icon properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call toggleCartHidden method when icon is clicked", () => {
    const cartIcon = wrapper.find("CartIconWrapper");
    cartIcon.simulate("click");
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it("should render the items count as a text", () => {
    const itemCount = parseInt(wrapper.find("ItemCount").text());
    expect(itemCount).toBe(5);
  });
});


