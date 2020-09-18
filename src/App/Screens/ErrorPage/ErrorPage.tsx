import React from 'react'
import Emoji from 'react-emoji-render'
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
                <Emoji text='👇' onlyEmojiClassName='make-emojis-large' />
              </p>
              <ClassicButton text='Reprendre la route' endpoint='/' />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ErrorPage
