import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../pages/home";
import AddPage from "../pages/add";

export default function AppRouting() {
  return (
    <React.Fragment>
      <Route path={["/", "/home"]} exact>
        <HomePage></HomePage>
      </Route>
      <Route path={["/add"]}>
        <AddPage></AddPage>
      </Route>
    </React.Fragment>
  );
}
