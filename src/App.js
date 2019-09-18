import React, {Component} from 'react';
import './App.scss';
import Home from './components/containers/home/Home';
import Redeem from './components/containers/redeem/Redeem';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GivePoints from './components/containers/givePoints/GivePoints';


class App extends Component {
  render() {
    return (
      <div className="App">
              <Router>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/Home" component={Home}/>
                      <Route path="/Redeem" component={Redeem}/>
                      <Route path="/GivePoints" component={GivePoints}/>
                  </Switch>
              </Router>
      </div>
      )
    }
  }
  
  export default App
  
  