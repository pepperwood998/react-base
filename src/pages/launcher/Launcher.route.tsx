import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AddPage from "./add";
import Profile from "./profile";

export default function LauncherRouting() {
  return (
    <Switch>
      <Route path={["/launcher/add"]} component={AddPage} />
      <Route path={["/launcher/profile"]} component={Profile} />
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}
