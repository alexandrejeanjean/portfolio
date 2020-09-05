import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import Routes from './Core/Routes'
import Template from './Screens/Template/Template'

import './App.scss'
import Pointer from './Shared/Pointer/Pointer'

const App = () => {
  useEffect(() => {
    if (!isMobile) {
      new Pointer()
    }
  }, [])
  return (
    <div className='App'>
      <div className='cursor cursor--small'></div>
      <canvas className='cursor cursor--canvas'></canvas>
      <BrowserRouter>
        <Template>
          <Routes />
        </Template>
      </BrowserRouter>
    </div>
  )
}

export default App
