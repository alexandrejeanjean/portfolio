import React from "react";
import { shallow } from "enzyme";
import LoadingLazyPage from "./LoadingLazyPage";

let wrapper: any;

beforeEach(() => {
  wrapper = shallow(<LoadingLazyPage />);
});

describe("LoadingLazyPage view", () => {
  it("should render LoadingLazyPage component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
