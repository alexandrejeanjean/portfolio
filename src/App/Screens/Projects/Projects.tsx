import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './projects.scss'
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
      'title-left': isTitle && i % 2 === 0,
      'title-right': isTitle && i % 2 === 1,
    })
  }

  if (isMetaTitle) {
    return classNames({
      'card-meta': true,
      'meta-left': i % 2 === 0,
      'meta-right': i % 2 === 1,
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
  })
}

let btnStyle = (i: number) =>
  classNames({ 'project-card-button': true, left: i % 2 === 0 })

const Projects = () => {
  return (
    <>
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
            <Link
              className='project-card-wrapper'
              key={item.title}
              to={{
                pathname: item.endpoint,
                state: {
                  project: item,
                },
              }}
            >
              <div className={cardStyle(i, false, false, item.picture)}>
                <div className={cardStyle(i, true, false, item.picture)}>
                  <h2 className='card-title'>{item.title}</h2>
                  <ul className={cardStyle(i, false, true, item.picture)}>
                    <li className='card-meta-item'>{item.integration}</li>
                    <li>{item.development}</li>
                  </ul>
                </div>
              </div>
              <div className='project-overlay'></div>
              <div className={btnStyle(i)}>En savoir plus</div>
            </Link>
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
