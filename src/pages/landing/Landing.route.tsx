import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingLayout from "../../components/layouts/landing";
import HomePage from "./home";
import AboutPage from "./about";

export default function LandingRouting() {
  return (
    <LandingLayout>
      <Switch>
        <Route path={["/", "/home"]} exact component={HomePage}></Route>
        <Route path={["/about"]} component={AboutPage}></Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </LandingLayout>
  );
}
