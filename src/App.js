import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Home from './container/home';
import Frends from './container/frends';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/frends' component={Frends} />
    </div>
  </BrowserRouter>
)

export default App;
