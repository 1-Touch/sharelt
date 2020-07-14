import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import './styles.css';

// Logo
import logo from '../../assets/logo.jpg';

// Components
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';
import Reset from './Reset';

const Auth = () => {
  return (
    <div className="my-login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="brand">
                <img src={logo} alt="logo" />
              </div>
              {
                <>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/login" />}
                  />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/forgot" component={Forgot} />
                  <Route exact path="/reset" component={Reset} />
                </>
              }
              <div className="footer">
                Copyright &copy; 2017 &mdash; Your Company
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
