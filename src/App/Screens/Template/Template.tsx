import React from 'react'
import Header from '../../Shared/Header/Header'
import Navigation from '../Navigation/Navigation'

type Props = { children: React.ReactNode }

const Template = ({ children }: Props) => (
  <>
    <Header />
    <Navigation />
    {children}
  </>
)

export default Template
