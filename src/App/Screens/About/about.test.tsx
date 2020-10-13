import React from "react";
import { shallow } from "enzyme";
import About from "./About";

let wrapper: any;

beforeEach(() => {
  wrapper = shallow(<About />);
});

describe("About view", () => {
  it("should render About component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
