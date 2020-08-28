import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { AnimatedSwitch } from './AnimatedSwitch'
import Home from '../Screens/Home/Home'
import About from '../Screens/About/About'
import Projects from '../Screens/Projects/Projects'
import Services from '../Screens/MyServices/Services'

const routes = [
  {
    component: Home,
    path: '/',
  },
  {
    component: About,
    path: '/a-propos',
  },
  {
    component: Projects,
    path: '/projets',
  },
  {
    component: Services,
    path: '/services',
  },
]

type Props = {
  location: any
}

const Routes = withRouter(({ location }: Props) => {
  return (
    <AnimatedSwitch location={location}>
      {routes.map((route) => {
        return (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        )
      })}
    </AnimatedSwitch>
  )
})

export default Routes
