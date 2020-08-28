import React from 'react'
import ClassicButton from '../../Shared/Button/Button'
import BubbleT from '../../Assets/BubbleT.svg'
import coffee0 from '../../Assets/coffee0.svg'
import development0 from '../../Assets/development0.svg'
import integration0 from '../../Assets/integration0.svg'
import project0 from '../../Assets/project0.svg'
import help0 from '../../Assets/help0.svg'
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
            <div className='skill-wrapper'>
              <div className='skill-cube'>
                <img src={coffee0} alt='' title='' />
              </div>

              <p>
                Découverte <br /> de votre projet
              </p>
            </div>
            <div className='skill-wrapper'>
              <div className='skill-cube'>
                <img src={help0} alt='' title='' />
              </div>
              <p>
                Accompagnement & <br /> réflexion
              </p>
            </div>
            <div className='skill-wrapper'>
              <div className='skill-cube'>
                <img src={integration0} alt='' title='' />
              </div>

              <p>
                Intégration de <br /> vos maquettes
              </p>
            </div>
            <div className='skill-wrapper'>
              <div className='skill-cube'>
                <img src={development0} alt='' title='' />
              </div>
              <p>
                Développement <br />
                front-end
              </p>
            </div>

            <div className='skill-wrapper'>
              <div className='skill-cube'>
                <img src={project0} alt='' title='' />
              </div>

              <p>
                Suivi de projet & <br />
                SAV
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Services
