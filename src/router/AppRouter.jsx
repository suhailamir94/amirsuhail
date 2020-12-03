import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../components/HomePage";
import PortfolioPage from "../components/PortfolioPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/project/:id" component={PortfolioPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
