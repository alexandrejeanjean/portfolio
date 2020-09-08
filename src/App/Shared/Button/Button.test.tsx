import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it("should render button for 'a-propos' link", () => {
    const button = shallow(<Button text="Faisons connaissance" endpoint="/a-propos" />);
    expect(button).toMatchSnapshot();
  });
});