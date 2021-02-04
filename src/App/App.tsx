import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Core/Routes";
import Template from "./Screens/Template/Template";

import "./App.scss";

const trackingId = "UA-113464443-3";
const history = createBrowserHistory();
ReactGA.initialize(trackingId);
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Template>
          <Routes />
        </Template>
      </BrowserRouter>
    </div>
  );
};

export default App;
