import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import HomePage from "../components/HomePage";
import PortfolioPage from "../components/PortfolioPage";

const AppRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/project/:id" component={PortfolioPage} />
      </Switch>
    </HashRouter>
  );
};

export default AppRouter;
