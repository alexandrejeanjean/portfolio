import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import '../../Screens/Navigation/navigation.scss'

type Props = { text: string; position: string; path: string }

const NavButtons = ({ text, position, path }: Props) => {
  let btnClasses = classNames({
    'nav-button-link': true,
    left: position === 'left',
    right: position === 'right',
    bottom: position === 'bottom',
    focused:
      (path === '/projets' && position === 'left') ||
      (path === '/services' && position === 'right'),
    'bottom-focused': path === '/a-propos' && position === 'bottom',
  })

  let decorationClass = classNames({
    'nav-decoration-line': true,
    'deco-left': position === 'left',
    'deco-right': position === 'right',
    'deco-bottom': position === 'bottom',
  })

  const getDestination = () => {
    if (text === 'Faisons connaissance') return '/a-propos'
    if (text === 'Projets') return '/projets'
    if (text === 'Mes services') return '/services'
    return '/'
  }

  return (
    <div className='nav-link-wrapper'>
      <Link className={btnClasses} to={getDestination()}>
        {text}
      </Link>
      <span className={decorationClass}></span>
    </div>
  )
}

export default NavButtons
