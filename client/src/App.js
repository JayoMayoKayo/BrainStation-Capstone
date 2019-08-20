import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage.js';
import NewsFeed from './components/NewsFeed/NewsFeed.js';
import PriceChecker from './components/PriceChecker/PriceChecker.js';
import About from './components/About/About.js';


class App extends React.Component {
  render() {  
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/newsFeed" component={NewsFeed}></Route>
            <Route path="/priceChecker" component={PriceChecker}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
