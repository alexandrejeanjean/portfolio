import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../Shared/Header/Header'
import Navigation from '../../Core/Navigation/Navigation'
import MobileNavigation from '../../Core/MobileNavigation/MobileNavigation'
import BrainHead from '../../Assets/BrainHead'

type Props = { children: React.ReactNode }

const Template = ({ children }: Props) => {
  let [path, setNewPath] = useState('')
  let location = useLocation()

  useEffect(() => {
    if (location.pathname !== path) {
      let newPath = location.pathname
      setNewPath(newPath)
    }
  }, [location, path])

  const setBackground = () => {
    if (['/services', '/a-propos', '/projets'].indexOf(path) > -1) {
      return <BrainHead className='about-bubble' />
    }
    return null
  }

  return (
    <>
      <Header />
      <Navigation path={path} />
      <MobileNavigation path={path} />
      {children}
      {setBackground()}
    </>
  )
}

export default Template
