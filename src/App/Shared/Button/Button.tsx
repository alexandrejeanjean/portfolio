import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './button.scss'

type Props = { text: string; endpoint: string; componentClass?: string }

let btnStyle = (componentClass: string) =>
  classNames({ 'classic-btn': true, [componentClass]: true })

const ClassicButton = ({ text, endpoint, componentClass }: Props) => (
  <Link
    className={btnStyle(componentClass ? componentClass : '')}
    to={endpoint}
  >
    {text}
  </Link>
)

export default ClassicButton
