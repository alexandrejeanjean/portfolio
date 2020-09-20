import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './navButtons.scss'
import dev from '../../Assets/development0.svg'
import help from '../../Assets/help0.svg'
import coffee from '../../Assets/coffee0.svg'

type Props = { text: string; position: string; path: string; isMobile: boolean }

const NavButtons = ({ text, position, path, isMobile }: Props) => {
  const getDestination = () => {
    if (text === 'Faisons connaissance') return '/a-propos'
    if (text === 'Projets') return '/projets'
    if (text === 'Compétences') return '/services'
    return '/'
  }

  const getIcon = () => {
    if (text === 'Faisons connaissance') return coffee
    if (text === 'Projets') return dev
    if (text === 'Compétences') return help
    return
  }

  let mobileBtnClasses = classNames({
    'mobile-nav-link': true,
    'mobile-focused':
      (path === '/projets' && position === 'left') ||
      (path === '/services' && position === 'right') ||
      (path === '/a-propos' && position === 'bottom'),
  })

  if (isMobile) {
    return (
      <div className='mobile-nav-link-wrapper'>
        <Link className={mobileBtnClasses} to={getDestination()}>
          <img src={getIcon()} className='mobile-nav-icon' />
          <p className='mobile-nav-link-text'>{text}</p>
        </Link>
      </div>
    )
  }

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

  return (
    <div className='desktop-nav-link-wrapper'>
      <Link className={btnClasses} to={getDestination()}>
        {text}
      </Link>
      <span className={decorationClass}></span>
    </div>
  )
}

export default NavButtons
