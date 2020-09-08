import React from 'react'
import { shallow } from 'enzyme'
import Template from './Template'

let wrapper: any

beforeEach(() => {
  wrapper = shallow(<Template children />)
})

describe('Template view', () => {
  it('should render Template component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
