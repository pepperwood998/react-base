import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainLayout from "../../components/layouts/main";
import AddPage from "./add";

export default function LauncherRouting() {
  return (
    <MainLayout>
      <Switch>
        <Route path={["/launcher/add"]} component={AddPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </MainLayout>
  );
}
