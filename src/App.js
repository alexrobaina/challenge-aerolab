import React, {Component} from 'react';
import './App.scss';
import Home from './components/containers/home/Home';
import Redeem from './components/containers/redeem/Redeem';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
              <Router>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/home" component={Home}/>
                      <Route path="/redeem" component={Redeem}/>
                  </Switch>
              </Router>
      </div>
      )
    }
  }
  
  export default App
  
  