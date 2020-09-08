import React from 'react'
import { shallow } from 'enzyme'

import Projects from './Projects'

let ProjectsWrapper: any

beforeEach(() => {
  ProjectsWrapper = shallow(<Projects />)
})

describe('Projects component', () => {
  it('should render Projects component correctly', () => {
    expect(ProjectsWrapper).toMatchSnapshot()
  })
})
