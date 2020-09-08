import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { AnimatedSwitch } from './AnimatedSwitch'

const Home = React.lazy(() => import('./../Screens/Home/Home'))
const About = React.lazy(() => import('../Screens/About/About'))
const Projects = React.lazy(() => import('../Screens/Projects/Projects'))
const Services = React.lazy(() => import('../Screens/MyServices/Services'))

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
