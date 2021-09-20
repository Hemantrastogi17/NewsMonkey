import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default class App extends Component {
  apiKey = process.env.REACT_APP_NEW_API_KEY
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>

          <Navbar/>
          <LoadingBar
            height = {3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress = {this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} category={"general"} />
            </Route>
            <Route exact path="/business">
              <News setProgress = {this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} category={"business"} />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress = {this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} category={"entertainment"} />
            </Route>
            <Route exact path="/technology">
              <News setProgress = {this.setProgress} apiKey={this.apiKey} key="technology" pageSize={6} category={"technology"} />
            </Route>
            <Route exact path="/science">
              <News setProgress = {this.setProgress} apiKey={this.apiKey} key="science" exact pageSize={6} category={"science"} />
            </Route>
            <Route exact path="/sports">
              <News setProgress = {this.setProgress} apiKey={this.apiKey} key="sports" exact pageSize={6} category={"sports"} />
            </Route>
            <Route exact path="/health">
              <News setProgress = {this.setProgress} apiKey={this.apiKey} key="health" pageSize={6} category={"health"} />
            </Route>

          </Switch>
        </Router>
      </div>
    )
  }
}
