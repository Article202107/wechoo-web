import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import BottomNavigation from './components/common/BottomNavigation';

function App() {
  // TODO hide header and bottom navigation according to the current page
  return (
    <Router basename="/">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
      <BottomNavigation />
    </Router>
  );
}

export default App;
