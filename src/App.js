import React from 'react';
import DefaultLayout from './components/themeLayout/DefaultLayout';
import Home from './containers/Home/HomeContainer';
import Category from './containers/Category/CategoryContainer';
import Blog from './containers/Blog/BlogContainer';
import Author from './containers/Author/AuthorContainer';
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Login from './containers/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cat-page" component={Category} />
          <Route exact path="/blog" component = {Blog} />
          <Route exact path="/login" component = {Login}/>
          <Route exact path = "/author" component = {Author} />
        </Switch>
      </DefaultLayout>
    </ BrowserRouter>
  );
}

export default App;
