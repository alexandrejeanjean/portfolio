import React from 'react'
import NavButtons from '../../Shared/NavButtons/NavButtons'
import './navigation.scss'

type TNavigation = { path: string }

const Navigation = ({ path }: TNavigation) => {
  return (
    <>
      <nav className='desktop-navigation-wrapper'>
        <NavButtons
          text='Projets'
          position='left'
          path={path}
          isMobile={false}
        />
        <NavButtons
          text='Faisons connaissance'
          position='bottom'
          path={path}
          isMobile={false}
        />
        <NavButtons
          text='Compétences'
          position='right'
          path={path}
          isMobile={false}
        />
      </nav>
    </>
  )
}

export default Navigation
