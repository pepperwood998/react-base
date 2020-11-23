import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AccountPage from "./account";
import SettingsPage from "./settings";

function ProfileRouting() {
  return (
    <Switch>
      <Route
        path={["/launcher/profile", "/launcher/profile/account"]}
        component={AccountPage}
        exact
      />
      <Route path={["/launcher/profile/settings"]} component={SettingsPage} />
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}

export default ProfileRouting;
