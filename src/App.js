import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Home from './components/Home';
const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exect path="/checkout" component={Checkout} />
      </Switch>
    </>
  );
};

export default App;
