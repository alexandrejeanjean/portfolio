import React from 'react'
import { shallow } from 'enzyme'

import MobileNavigation from './MobileNavigation'

const NavigationProps = {
  path: '/projets',
}

describe('MobileNavigation component', () => {
  it('should render MobileNavigation component correctly', () => {
    const NavigationWrapper = shallow(
      <MobileNavigation path={NavigationProps.path} />
    )
    expect(NavigationWrapper).toMatchSnapshot()
  })
})
