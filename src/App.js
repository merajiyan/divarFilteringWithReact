import Catalog from "./Catalog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/:field" exact component={Catalog} />
          <Route path="/:field/:name" exact component={Catalog} />
          <Route path="/:field/:name/:title" exact component={Catalog} />
          <Route
            path="/:field/:name/:title/:fieldOf"
            exact
            component={Catalog}
          />
          <Route
            path="/:field/:name/:title/:fieldOf/:date"
            component={Catalog}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
