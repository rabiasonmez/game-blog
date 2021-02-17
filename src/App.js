import React from 'react';
import DefaultLayout from './components/layout/DefaultLayout';
import Home from './containers/Home';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </DefaultLayout>
    </ BrowserRouter>
  );
}

export default App;
