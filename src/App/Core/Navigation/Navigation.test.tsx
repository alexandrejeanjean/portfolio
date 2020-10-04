import React from 'react'
import { shallow } from 'enzyme'

import Navigation from './Navigation'

const NavigationProps = {
  path: '/projets',
}

describe('Navigation component', () => {
  it('should render Navigation component correctly', () => {
    const NavigationWrapper = shallow(
      <Navigation path={NavigationProps.path} />
    )
    expect(NavigationWrapper).toMatchSnapshot()
  })
})
