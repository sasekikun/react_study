import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Home from './container/Home';
import Friends from './container/Friends';
import Info from './container/Info';
import Registration from './container/Registration';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/friends' component={Friends} />
      <Route exact path='/friends/:name' component={Info} />
      <Route exact path='/Registration' component={Registration} />
    </div>
  </BrowserRouter>
)

export default App;
