import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NextPrevButton from '../../../Shared/NextPrevBtn/NextPrevBtn'
import ProjectsDatas from '../ProjectsDatas'
import './projectsDetails.scss'

type Props = {
  location: {
    state: { project: { id: number; appType: string; description: string } }
  }
}

const Pictures = (projectId: number) => {
  return ProjectsDatas[projectId].pictures.map((pic) => {
    return (
      <img
        key={pic}
        src={`${pic}`}
        className='project-details-picture'
        alt={`projet` + ProjectsDatas[projectId].title}
      />
    )
  })
}

const ProjectDetails = ({ location }: Props) => {
  const [activeProjectId, setActiveProjectId] = useState(0)

  useEffect(() => {
    let projectId = location?.state?.project?.id
    if (projectId) return setActiveProjectId(projectId)
  }, [location])

  return (
    <>
      <main className='projects-details page'>
        <section className='projects-details-title-wrapper'>
          <div className='back-btn-wrapper'>
            <Link to='/projets'>{`< Projets`}</Link>
          </div>
          <h1>{ProjectsDatas[activeProjectId].title}</h1>
          <h2>{ProjectsDatas[activeProjectId].appType}</h2>
        </section>
        <section className='project-details-wrapper'>
          <div className='project-details-picture-wrapper'>
            {Pictures(activeProjectId)}
          </div>
          <div className='project-details-description'>
            {ProjectsDatas[activeProjectId].description.map((desc) => (
              <p key={desc}>{desc}</p>
            ))}
          </div>
        </section>
        <section className='navigation-wrapper'>
          {activeProjectId > 0 && activeProjectId < ProjectsDatas.length && (
            <NextPrevButton
              handleClick={() => setActiveProjectId(activeProjectId - 1)}
              text={`< ${ProjectsDatas[activeProjectId - 1]?.title}`}
            ></NextPrevButton>
          )}
          <span className='vertical-divider'>|</span>
          {activeProjectId + 1 < ProjectsDatas.length && (
            <NextPrevButton
              handleClick={() => setActiveProjectId(activeProjectId + 1)}
              text={`${ProjectsDatas[activeProjectId + 1]?.title} >`}
            ></NextPrevButton>
          )}
        </section>
      </main>
    </>
  )
}

export default ProjectDetails
