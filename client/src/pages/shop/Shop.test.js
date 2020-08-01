import React from "react";
// import { Provider } from "react-redux";
import { shallow } from "enzyme";
import { testStore } from "../../utils";
import { Shop } from "./Shop";
// import configureStore from "redux-mock-store";

// const mockStore = configureStore();

const setUp = (initialState = {}) => {
  const props = {
    fetchCollectionsStart: jest.fn(),
  };
  const store = testStore(initialState);
  const enzymeWrapper = shallow(<Shop store={store} {...props} />);
  return {
    enzymeWrapper,
    store,
    props,
  };
};

describe("Shop Page", () => {
  let wrapper;

  let mockFetchCollectionsStart = jest.fn();

  beforeEach(() => {
    // const initialState = {
    //   shop: {
    //     isFetching: false,
    //   },
    // };

    // const mockProps = {
    //   fetchCollectionsStart: mockFetchCollectionsStart,
    // };

    // const { enzymeWrapper } = setUp(initialState);
    // wrapper = enzymeWrapper;
    wrapper = shallow(
      <Shop fetchCollectionsStart={mockFetchCollectionsStart} />
    );
  });

  it("should render the Checkout component", () => {
    expect(wrapper.length).toBe(1);
  });
});
