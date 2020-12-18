/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Switch } from "react-router-dom";
import Route from "./route";

import SignIn from "../pages/SignIn";

import AddProfessionals from "../pages/AddProfessionals";
import ProfessionalsList from "../pages/ProfessionalsList";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/professionals" component={ProfessionalsList} isPrivate />
      <Route path="/add-contacts" component={AddProfessionals} isPrivate />
    </Switch>
  );
}
