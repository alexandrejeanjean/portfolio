import React from 'react'
import { Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'
import LoadingLazyPage from '../Screens/Loading/LoadingLazyPage'

/**
 * This component is used to control the routing animation.
 * It controls what should happen after animation complete (onRest).
 * It differs animation direction based on routePopped props. (Set in router.action.js and available from routerReducer).
 * @param location React router location used as key in Switch
 * @param children All routes (set in Routes.js)
 * @param routePopped Used to manage direction of animation
 * @param rest All other props sent down
 */

type Props = {
  history?: any
  location?: any
  children?: any
}

export const AnimatedSwitch = ({
  history,
  location,
  children,
  ...rest
}: Props) => {
  const reverse = location.pathname === '/'

  return (
    <PoseGroup
      flipMove={false}
      preEnterPose={reverse ? 'leftSide' : 'rightSide'}
      exitPose={reverse ? 'rightSide' : 'leftSide'}
    >
      <ContextRouteAnimation key={location.pathname} reverse={reverse}>
        <React.Suspense fallback={LoadingLazyPage()}>
          <Switch location={location} {...rest}>
            {children}
          </Switch>
        </React.Suspense>
      </ContextRouteAnimation>
    </PoseGroup>
  )
}

export default AnimatedSwitch

export const ContextRouteAnimation = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    // scale: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 400,
    },
  },
  leftSide: {
    x: '-100vw',
    opacity: 0,
    // scale: 1.5,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 400,
    },
  },
  rightSide: {
    x: '100vw',
    opacity: 0,
    // scale: 1.5,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 400,
    },
  },
})
