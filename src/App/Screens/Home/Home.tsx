import React from 'react'
// import BubbleT from '../../Assets/BubbleT.svg'
import Brain from '../../Assets/Brain'
import ClassicButton from '../../Shared/Button/Button'
import './home.scss'

const Home = () => {
  return (
    <>
      <main className='home-wrapper page'>
        <section>
          <div className='home-title-wrapper'>
            <div className='home-title-content'>
              <h1 className='home-title'>
                Cødeur <br />
                du web.
              </h1>
              <p className='home-subtitle'>
                Bonjour, je m'appelle Alexandre. <br /> Depuis plus de 2 ans,
                j'agite de la matière grise pour donner vie à de nouvelles
                applications web & mobile innovantes.
              </p>
              <ClassicButton text='Suivez-moi' endpoint='/a-propos' />
            </div>
          </div>
          <div className='home-bubble-wrapper'>
            <Brain className='home-bubble' />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
