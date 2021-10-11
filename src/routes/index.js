import { Route, Switch } from "react-router-dom";
import Events from "../pages/Events";
import IndividualEvent from "../pages/Individual Event";

const Routes = () => {
  return (
    <Switch>
      <Route path="/contatos"></Route>
      <Route path="/historia"></Route>
      <Route exact path="/"></Route>
      <Route path="/professor"></Route>
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
