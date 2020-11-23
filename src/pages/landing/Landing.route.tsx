import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./home";
import AboutPage from "./about";

export default function LandingRouting() {
  return (
    <Switch>
      <Route path={["/", "/home"]} exact component={HomePage} />
      <Route path={["/about"]} component={AboutPage} />
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}
