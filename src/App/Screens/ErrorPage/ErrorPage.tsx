import React from 'react'
// import BubbleT from '../../Assets/BubbleT.svg'
import ClassicButton from '../../Shared/Button/Button'
import '../Home/home.scss'

const ErrorPage = () => {
  return (
    <>
      <main className='home-wrapper page'>
        <section>
          <div className='home-title-wrapper'>
            <div className='home-title-content'>
              <h1 className='home-title'>Erreur de calcul...</h1>
              <p className='home-subtitle'>
                Nouvelle itinéraire juste en dessous
              </p>
              <ClassicButton text='Reprendre la route' endpoint='/' />
            </div>
          </div>
          <div className='home-bubble-wrapper'>
            {/* <img src={BubbleT} className='home-bubble' alt='' /> */}
          </div>
        </section>
      </main>
    </>
  )
}

export default ErrorPage
