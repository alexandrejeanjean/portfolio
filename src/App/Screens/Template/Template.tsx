import React from 'react'
import Header from '../../Shared/Header/Header'
import Navigation from '../../Core/Navigation/Navigation'
import MobileNavigation from '../../Core/MobileNavigation/MobileNavigation'

type Props = { children: React.ReactNode }

const Template = ({ children }: Props) => (
  <>
    <Header />
    <Navigation />
    <MobileNavigation />
    {children}
  </>
)

export default Template
