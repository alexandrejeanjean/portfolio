import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import mail from '../../Assets/mail.svg'
const Header = () => (
  <header className='header'>
    <Link className='author-name' to='/'>
      alexandre jeanjean
    </Link>
    <a href='mailto:jeanjeanalexandre@gmail.com'>
      <img className='contact' src={mail} alt='' />
    </a>
  </header>
)

export default Header
