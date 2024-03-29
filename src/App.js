import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Todo from './pages/Todo';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Todo />} />
      <Route path="/edit/:id" element={<Todo />} />
    </Routes>
  </Router>
);

export default App;
