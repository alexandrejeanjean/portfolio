import React from 'react'
import { Link } from 'react-router-dom'
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
  const projectId = location?.state?.project?.id

  return (
    <>
      <main className='projects-details page'>
        <section className='projects-details-title-wrapper'>
          <div className='back-btn-wrapper'>
            <Link to='/projets'>{`< Projets`}</Link>
          </div>
          <h1>{ProjectsDatas[projectId].title}</h1>
          <h2>{ProjectsDatas[projectId].appType}</h2>
        </section>
        <section className='project-details-wrapper'>
          <div className='project-details-picture-wrapper'>
            {Pictures(projectId)}
          </div>
          <div className='project-details-description'>
            {ProjectsDatas[projectId].description.map((desc) => (
              <p>{desc}</p>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default ProjectDetails
