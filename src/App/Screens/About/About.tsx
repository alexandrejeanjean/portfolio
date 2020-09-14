import React from 'react'
import ClassicButton from '../../Shared/Button/Button'
import me from '../../Assets/me.png'
// import BubbleT from '../../Assets/BubbleT.svg'
import './about.scss'

const About = () => {
  return (
    <>
      {/* <img src={BubbleT} className='about-bubble' alt='' /> */}
      <main className='about-wrapper page'>
        <img
          className='about-profile-picture'
          src={me}
          alt='author'
          title='author'
        />

        <section className='about-presentation-wrapper'>
          <div className='about-presentation-text'>
            <h1>
              Faisons <span className='underlined'>connaissance.</span>
            </h1>
            <p>
              Je suis développeur web front-end, spécialisé sur
              <br /> l'univers React / React-Native.
            </p>
            <p>
              Depuis plus de 2 ans, je donne vie à des maquettes pour des
              applications web et mobiles écrites en javascript. <br />
              <br />
              Cet univers me passionne, et je mets toute mon énergie à améliorer
              mes compétences au quotidien.
              <br />
              <br />
              J'ai pris part à la création de différents back-office, très
              orientés métier. Mais aussi à la création d'applications mobiles,
              comme War of Golf (v2), Home Assist, Dipongo (v2), Dentsply...
            </p>
            <ClassicButton
              text='Découvrez mes compétences'
              endpoint='/services'
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default About
