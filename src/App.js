import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route exact  path="/">
              <News key="general" pageSize={6} category={"general"} />
            </Route>
            <Route exact  path="/business">
              <News key="business" pageSize={6} category={"business"} />
            </Route>
            <Route exact  path="/entertainment">
              <News key="entertainment" pageSize={6} category={"entertainment"} />
            </Route>
            <Route exact  path="/technology">
              <News key="technology" pageSize={6} category={"technology"} />
            </Route>
            <Route  exact path="/science">
              <News key="science" exact  pageSize={6} category={"science"} />
            </Route>
            <Route  exact path="/sports">
              <News key="sports" exact  pageSize={6} category={"sports"} />
            </Route>
            <Route exact  path="/health">
              <News key="health" pageSize={6} category={"health"} />
            </Route>
            
          </Switch>
        </Router>
      </div>
    )
  }
}
