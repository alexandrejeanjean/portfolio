import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import Services from "./Services";
import { ServicesDatas } from "./ServicesDatas";

let wrapper: any;

beforeEach(() => {
  wrapper = shallow(<Services />);
});

describe("Services view", () => {
  it("should render Services component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should be possible to click button to access next page", () => {
    const component = mount(
      <Router>
        <Services />
      </Router>
    );
    component.find("a.classic-btn").simulate("keydown", { keyCode: 32 });
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it("should render 5 skills", () => {
    const component = mount(
      <Router>
        <Services />
      </Router>
    );
    expect(component.find("section.skills-wrapper").children()).toHaveLength(
      ServicesDatas.length
    );
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
