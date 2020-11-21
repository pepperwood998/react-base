import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about/About.page";
import AddPage from "../pages/add";
import LandingLayout from "../components/layouts/landing";
import MainLayout from "../components/layouts/main";

export default function AppRouting() {
  return (
    <Router>
      <Switch>
        <Route path="/launcher">
          <MainLayout>
            <Switch>
              <Route path={["/launcher/add"]} component={AddPage} />
            </Switch>
          </MainLayout>
        </Route>
        <Route>
          <LandingLayout>
            <Switch>
              <Route path={["/", "/home"]} exact component={HomePage}></Route>
              <Route path={["/about"]} component={AboutPage}></Route>
            </Switch>
          </LandingLayout>
        </Route>
      </Switch>
    </Router>
  );
}
