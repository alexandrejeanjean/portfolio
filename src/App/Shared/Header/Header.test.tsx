import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header', () => {
  it('should render header correctly', () => {
    const header = shallow(<Header />)
    expect(header).toMatchSnapshot()
  })
})
