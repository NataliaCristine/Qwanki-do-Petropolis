import { Route, Switch } from "react-router-dom";
import Events from "../pages/Events";

const Routes = () => {
  return (
    <Switch>
      <Route path="/contatos"></Route>
      <Route path="/historia"></Route>
      <Route exact path="/"></Route>
      <Route path="/professor"></Route>
      <Route path="/eventos">
        <Events />
      </Route>
      <Route exact path="/eventos/:id">
        {/* <EVENTESPECIFICO></EVENTESPECIFICO> */}
      </Route>
    </Switch>
  );
};

export default Routes;
