import React from 'react'
import { shallow, mount } from 'enzyme'

import Navigation from './Navigation'

let NavigationWrapper: any

beforeEach(() => {
  NavigationWrapper = shallow(<Navigation />)
})

describe('Navigation component', () => {
  it('should render Navigation component correctly', () => {
    expect(NavigationWrapper).toMatchSnapshot()
  })
})
