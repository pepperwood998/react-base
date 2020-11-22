import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingRouting from "../pages/landing/Landing.route";
import LauncherRouting from "../pages/launcher/Launcher.route";
import NotFound from "../pages/not-found/NotFound.page";

export default function AppRouting() {
  return (
    <Router>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route path="/launcher">
          <LauncherRouting />
        </Route>
        <Route>
          <LandingRouting />
        </Route>
      </Switch>
    </Router>
  );
}
