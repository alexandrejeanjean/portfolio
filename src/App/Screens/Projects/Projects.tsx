import React from 'react'
import classNames from 'classnames'
import './projects.scss'
// import BubbleT from '../../Assets/BubbleT.svg'
import ProjectsDatas from './ProjectsDatas'
import ClassicBtn from '../../Shared/Button/Button'

let cardStyle = (
  i: number,
  isTitle: boolean,
  isMetaTitle: boolean,
  picture: string
) => {
  if (isTitle) {
    return classNames({
      'card-datas-wrapper': true,
      'title-right': isTitle && i % 2 === 1,
    })
  }

  if (isMetaTitle) {
    return classNames({
      'card-meta': true,
      'meta-right': i % 2 === 0,
    })
  }

  return classNames({
    'project-card': true,
    left: i % 2 === 0,
    right: i % 2 === 1,
    'dipongo-bg': picture === 'dipongo',
    'wog-bg': picture === 'wog',
    'ha-bg': picture === 'ha',
    'fg-bg': picture === 'fillgood',
    'overlay-dipongo': i % 2 === 0 && picture === 'dipongo',
    'overlay-ha': i % 2 === 1 && picture === 'ha',
    'overlay-wog': i % 2 === 0 && picture === 'wog',
    'overlay-fg': i % 2 === 1 && picture === 'fillgood',
  })
}

const Projects = () => {
  return (
    <>
      {/* <img src={BubbleT} className='projects-bubble' alt='' /> */}
      <main className='projects-wrapper page'>
        <section className='projects-title-wrapper'>
          <h1>
            Sélection de <span className='underlined'>projets.</span>
          </h1>
          <p>
            Je vous propose ici un échantillon des projets auxquels j'ai pris
            part depuis mes premiers pas dans le web jusqu'à aujourd'hui.
          </p>
        </section>
        <section className='projects-cards-wrapper'>
          {ProjectsDatas.map((item, i) => (
            <div
              className={cardStyle(i, false, false, item.picture)}
              data-description={item.description[0]}
              data-description2={item.description[1]}
              data-description3={item.description[2]}
              key={item.title}
            >
              <div className={cardStyle(i, true, false, item.picture)}>
                <h2 className='card-title'>{item.title}</h2>
                <ul className={cardStyle(i, false, true, item.picture)}>
                  <li className='card-meta-item'>{item.integration}</li>
                  <li>{item.development}</li>
                </ul>
              </div>
            </div>
          ))}
        </section>
        <div className='contact-btn-wrapper'>
          <ClassicBtn text='Ecrivez-moi' endpoint='/' />
        </div>
      </main>
    </>
  )
}

export default Projects
