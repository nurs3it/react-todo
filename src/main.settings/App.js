import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Navbar from "../components/Navbar";

function App() {
  return (
    <Router>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <Navbar/>
          </div>
          <div className="col-12">
            <Switch>
              <Route exact path="/"><Home/></Route>
              <Route path="/about"><About/></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
