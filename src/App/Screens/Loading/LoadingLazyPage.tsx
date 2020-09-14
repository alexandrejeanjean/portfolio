import React from 'react'
// import BubbleT from '../../Assets/BubbleT.svg'
import '../Home/home.scss'

const Loading = () => {
  return (
    <>
      <main className='home-wrapper page'>
        <section>
          <div className='home-title-wrapper'>
            <div className='home-title-content'>
              <h1 className='home-title'>Chargement de l'itinéraire...</h1>
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

export default Loading
