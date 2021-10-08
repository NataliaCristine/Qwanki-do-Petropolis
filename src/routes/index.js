import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/contato"></Route>
      <Route path="/historia"></Route>
      <Route exact path="/"></Route>
      <Route path="/professor"></Route>
      <Route path="/eventos"></Route>
    </Switch>
  );
};

export default Routes;
