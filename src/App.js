import React, {Component} from 'react';
import {Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainRoute from "./views/components/MainRoute";
import Home from "./views/main/home/Home";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: true
    }
  }

  render() {

    if (!this.state.ready) {
      return <div/>;
    }

    return (
        <BrowserRouter>
          <Switch>
            <MainRoute path="/" name="home" component={Home}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
