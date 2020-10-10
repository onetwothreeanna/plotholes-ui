import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import MovieState from './context/movie/MovieState';
import './App.css';

const App = () => {
  return (
    <MovieState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
            </div>
          </Fragment>
        </Router>
    </MovieState>
  );
};

export default App;
