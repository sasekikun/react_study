import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Home from './container/home';
import Friends from './container/friends';
import Info from './container/info';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/friends' component={Friends} />
      <Route exact path='/friends/:name' component={Info} />
    </div>
  </BrowserRouter>
)

export default App;
