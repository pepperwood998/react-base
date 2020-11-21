import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LandingLayout from "../components/layouts/landing";
import MainLayout from "../components/layouts/main";
import HomePage from "../pages/home";
import AboutPage from "../pages/about/About.page";
import AddPage from "../pages/add";
import NotFound from "../pages/not-found/NotFound.page";

export default function AppRouting() {
  return (
    <Router>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route path="/launcher">
          <MainLayout>
            <Switch>
              <Route path={["/launcher/add"]} component={AddPage} />
              <Route path="*">
                <Redirect to="/404" />
              </Route>
            </Switch>
          </MainLayout>
        </Route>
        <Route>
          <LandingLayout>
            <Switch>
              <Route path={["/", "/home"]} exact component={HomePage}></Route>
              <Route path={["/about"]} component={AboutPage}></Route>
              <Route path="*">
                <Redirect to="/404" />
              </Route>
            </Switch>
          </LandingLayout>
        </Route>
      </Switch>
    </Router>
  );
}
