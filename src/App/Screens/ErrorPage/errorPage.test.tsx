import React from "react";
import { shallow } from "enzyme";
import ErrorPage from "./ErrorPage";

let wrapper: any;

beforeEach(() => {
  wrapper = shallow(<ErrorPage />);
});

describe("ErrorPage view", () => {
  it("should render ErrorPage component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
