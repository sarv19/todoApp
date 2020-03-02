import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import AddItem from "./AddItem";
import EditItem from "./EditItem";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={`/edit-item/:item_id`} component={EditItem} />
        <Route path="/add-item" component={AddItem} />
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
