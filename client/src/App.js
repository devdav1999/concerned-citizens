import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
// import Blog from './components/pages/Blog/Blog.js';
import Share from './components/pages/Share/Share.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';
// import ComposeTemplate from './components/pages/ComposeTemplate/ComposeTemplate.js';

function App () {
  return (
    <div className="App">
      {/* <nav className="App-navigation">
        <h1 className="App-title">MERN Starter</h1>
        <Link to="/">Welcome</Link>
        <Link to="/blog/">Blog</Link>
        <Link to="/write/">Write Article</Link>
      </nav> */}

      <div className="App-mainContent">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/share/' component={Share} />
          <Route exact path='/write/' component={WriteArticle} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
