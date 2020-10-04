import React from 'react'
import { useLocation } from 'react-router-dom'
import { shallow } from 'enzyme'
import Template from './Template'

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: 'localhost:3000/projets',
  }),
}))

describe('Template view', () => {
  it('should render Template component correctly', () => {
    let wrapper = shallow(<Template children />)
    expect(wrapper).toMatchSnapshot()
  })
})
