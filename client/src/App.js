import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import NoMatch from "./components/pages/NoMatch";
import "./components/pages/style.css"

function App() {
  return (
    <Router>
      <div className="wrapping">
        <NavTabs />
        <Switch>
        {/* <Route exact path="/" component={Login} /> */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/contact" component={SignUp} /> */}
        {/* <Route path="/lessons" component={Projects} /> */}
        <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
