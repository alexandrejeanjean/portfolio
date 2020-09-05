import React from 'react'
import { Link } from 'react-router-dom'
import './button.scss'

type Props = { text: string; endpoint: string }

const ClassicButton = ({ text, endpoint }: Props) => (
  <Link className='classic-btn' to={endpoint}>
    {text}
  </Link>
)

export default ClassicButton
