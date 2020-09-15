import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Core/Routes'
import Template from './Screens/Template/Template'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Template>
          <Routes />
        </Template>
      </BrowserRouter>
    </div>
  )
}

export default App
