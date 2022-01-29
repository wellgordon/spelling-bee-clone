import React from 'react';
import Game from './components/Game';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
    </Router>
  );
};

export default App;
