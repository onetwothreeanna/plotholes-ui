import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Alerts from './components/layout/Alerts';
import MovieState from './context/movie/MovieState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <MovieState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Alerts />
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </MovieState>
  );
};

export default App;
