import React from 'react';
import Game from './components/Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Home}>
          {/* <Home /> */}
        </Route>
        <Route path="/game" element={Game}>
          {/* <Game /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
