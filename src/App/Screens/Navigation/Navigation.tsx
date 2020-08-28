import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../Shared/Header/Header'
import NavButtons from '../../Shared/NavButtons/NavButtons'
import './navigation.scss'

type Props = { children: React.ReactNode }

const Navigation = ({ children }: Props) => {
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
      <Header />
      <nav className='navigation-global-wrapper'>
        <NavButtons text='Projets' position='left' path={path} />
        <NavButtons text='Faisons connaissance' position='bottom' path={path} />
        <NavButtons text='Mes services' position='right' path={path} />
      </nav>
      {children}
    </>
  )
}

export default Navigation
