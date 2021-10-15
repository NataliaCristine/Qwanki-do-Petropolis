import { Route, Switch } from "react-router-dom";
import History from "../pages/History";

import Instrutor from "../pages/Instructor";

import Events from "../pages/Events";
import IndividualEvent from "../pages/Individual Event";
import Contacts from "../pages/Contacts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/contatos">
        <Contacts />
      </Route>
      <Route path="/historia">
        <History />
      </Route>
      <Route exact path="/"></Route>
      <Route path="/instrutor">
        <Instrutor />
      </Route>
      <Route exact path="/eventos">
        <Events />
      </Route>
      <Route exact path="/eventos/:id">
        <IndividualEvent />
      </Route>
    </Switch>
  );
};

export default Routes;
