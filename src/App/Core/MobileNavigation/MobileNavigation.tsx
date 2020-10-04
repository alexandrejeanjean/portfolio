import React from 'react'
import NavButtons from '../../Shared/NavButtons/NavButtons'
import './mobileNavigation.scss'

type TMobileNavigation = { path: string }

const MobileNavigation = ({ path }: TMobileNavigation) => {
  return (
    <>
      <nav className='mobile-navigation-wrapper'>
        <NavButtons text='Projets' position='left' path={path} isMobile />
        <NavButtons
          text='Faisons connaissance'
          position='bottom'
          path={path}
          isMobile
        />
        <NavButtons text='Compétences' position='right' path={path} isMobile />
      </nav>
    </>
  )
}

export default MobileNavigation
