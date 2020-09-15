import React from 'react'
import './nextPrevBtn.scss'

type Props = {
  text: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const NextPrevButton = ({ text, handleClick }: Props) => (
  <button className='next-prev-btn' onClick={handleClick}>
    <p>{text}</p>
  </button>
)

export default NextPrevButton
