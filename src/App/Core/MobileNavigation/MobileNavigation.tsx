import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NavButtons from '../../Shared/NavButtons/NavButtons'

import './mobileNavigation.scss'

const MobileNavigation = () => {
  let [path, setNewPath] = useState('')
  let location = useLocation()

  useEffect(() => {
    if (location.pathname !== path) {
      let newPath = location.pathname
      setNewPath(newPath)
    }
  }, [location, path])

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
