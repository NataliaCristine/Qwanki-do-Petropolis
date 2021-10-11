import { Route, Switch } from "react-router-dom";
import History from "../pages/History";
import Professor from "../pages/Instructor";

const Routes = () => {
  return (
    <Switch>
      <Route path="/contato"></Route>
      <Route path="/historia">
        <History />
      </Route>
      <Route exact path="/"></Route>
      <Route path="/professor">
        <Professor />
      </Route>
      <Route path="/eventos"></Route>
    </Switch>
  );
};

export default Routes;
