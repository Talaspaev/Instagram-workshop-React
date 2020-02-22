import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Feed from '../components/Feed';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route component={Header} />
      <Route component={Feed} />
    </div>
  </BrowserRouter>
);

export default App;
