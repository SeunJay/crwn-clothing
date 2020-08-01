import React from "react";
import { shallow } from "enzyme";
import { testStore } from "../../utils";
import Collection from "./Collection";

const setUp = (initialState = {}) => {

  const store = testStore(initialState);
  const wrapper = shallow(<Collection store={store} />);
  return wrapper;
};

describe("Collection Page", () => {
   let wrapper;

    beforeEach(() => {
      const initialState = {
        shop: {
          mockItems: [{ id: 1 }, { id: 2 }, { id: 3 }]
        },
      };

      wrapper = setUp(initialState);
    });


      it("should render the CollectionPage component", () => {
        expect(wrapper).toMatchSnapshot();
      });
});
