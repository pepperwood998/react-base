import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from "../components/layouts/main";
import LandingLayout from "../components/layouts/landing";
import LandingRouting from "../pages/landing/Landing.route";
import LauncherRouting from "../pages/launcher/Launcher.route";
import NotFound from "../pages/not-found/NotFound.page";

export default function AppRouting() {
  return (
    <Router>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route path="/launcher">
          <MainLayout>
            <LauncherRouting />
          </MainLayout>
        </Route>
        <Route>
          <LandingLayout>
            <LandingRouting />
          </LandingLayout>
        </Route>
      </Switch>
    </Router>
  );
}
