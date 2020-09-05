import React from 'react'
import ClassicButton from '../../Shared/Button/Button'
import ServicesDatas from './ServicesDatas'

import BubbleT from '../../Assets/BubbleT.svg'
import './services.scss'

const Services = () => {
  return (
    <>
      <img src={BubbleT} className='services-bubble' alt='' />
      <main className='page'>
        <section className='services-wrapper'>
          <h1 className='services-title'>Mes services.</h1>
          <p className='services-subtitle'>
            J'ai à coeur d'architecturer, et d'intégrer les différents
            composants d'une application avec soin.
          </p>
          <p className='services-subtitle'>
            Je prends le temps de respecter les guidelines des UI/UX Designers.
          </p>
          <p className='services-subtitle'>
            Délivrer une application maintenable, dev-friendly est mon objectif.
          </p>
          <ClassicButton text='Visiter les projets' endpoint='/projets' />
          <div className='skills-wrapper'>
            {ServicesDatas.map((item) => (
              <div className='skill-wrapper' key={item.img}>
                <div className='skill-cube'>
                  <img src={item.img} alt='' title='' />
                </div>
                <p>
                  {item.legend[0]}
                  <br />
                  {item.legend[1]}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Services
