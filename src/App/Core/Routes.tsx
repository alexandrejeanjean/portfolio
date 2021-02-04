import React from "react";
import { Route, withRouter } from "react-router-dom";
import { AnimatedSwitch } from "./AnimatedSwitch";

const Home = React.lazy(() => import("./../Screens/Home/Home"));
const About = React.lazy(() => import("../Screens/About/About"));
const Projects = React.lazy(() => import("../Screens/Projects/Projects"));
const Services = React.lazy(() => import("../Screens/MyServices/Services"));
const ProjectsDetails = React.lazy(
  () => import("../Screens/Projects/ProjectsDetails/ProjectsDetails")
);

const ErrorPage = React.lazy(() => import("./../Screens/ErrorPage/ErrorPage"));

const routes = [
  {
    component: Home,
    path: "/",
    exact: true,
  },
  {
    component: About,
    path: "/a-propos",
    exact: true,
  },
  {
    component: Projects,
    path: "/projets",
    exact: true,
  },
  {
    component: ProjectsDetails,
    path: "/projets/infos",
    exact: false,
  },
  {
    component: Services,
    path: "/services",
    exact: true,
  },
  {
    component: ErrorPage,
    path: "",
  },
];

type Props = {
  location: any;
};

const Routes = withRouter(({ location }: Props) => {
  return (
    <AnimatedSwitch location={location}>
      {routes.map((route) => {
        return (
          <Route
            exact={route.exact}
            key={route.path}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </AnimatedSwitch>
  );
});

export default Routes;
