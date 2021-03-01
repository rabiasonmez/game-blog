import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Home from './containers/Home/Home';
import Content from './components/theme/Content';
import NotFound from './containers/Base/NotFound';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Category from './containers/Blog/Category';
import BlogDetail from './containers/Blog/BlogDetail';
import './assets/css/vendor.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
function App() {
  return (
    <BrowserRouter>
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/404" component={NotFound} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cat-:categorySlug" component={Category} />
          <Route exact path="/blog-:blogSlug" component={BlogDetail} />
        </Switch>
      </Content>
    </ BrowserRouter>
  );
}

export default App;
