import React from 'react'
import { shallow, mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'

let wrapper: any

beforeEach(() => {
  wrapper = shallow(<Home />)
})

describe('Home view', () => {
  it('should render home component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should be possible to click button to access next page', () => {
    const component = mount(
      <Router>
        <Home />
      </Router>
    )
    component.find('a.classic-btn').simulate('keydown', { keyCode: 32 })
    expect(component).toMatchSnapshot()
    component.unmount()
  })
})
