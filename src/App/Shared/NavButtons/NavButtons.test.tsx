import React from 'react'
import { shallow } from 'enzyme'
import NavButtons from './NavButtons'

describe('NavButtons', () => {
  it('should render nav buttons correctly', () => {
    const navButton = shallow(
      <NavButtons
        text='Faisons connaissance'
        position='bottom'
        path='/a-propos'
      />
    )
    expect(navButton).toMatchSnapshot()
  })
})
