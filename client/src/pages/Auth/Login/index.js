import React from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { login } from '../../../store/actions/auth';

const Login = (props) => {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login());
    props.history.push('/dashboard');
  };

  return (
    <div className="card fat">
      <div className="card-body">
        <h4 className="card-title">Login</h4>
        <form onSubmit={loginHandler} className="my-login-validation">
          <div className="form-group">
            <label htmlFor="email">E-Mail Address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              required
              autoFocus
            />
            <div className="invalid-feedback">Email is invalid</div>
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
              <a href="forgot.html" className="float-right">
                Forgot Password?
              </a>
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              name="password"
              required
              data-eye
            />
            <div className="invalid-feedback">Password is required</div>
          </div>

          <div className="form-group">
            <div className="custom-checkbox custom-control">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="custom-control-input"
              />
              <label htmlFor="remember" className="custom-control-label">
                Remember Me
              </label>
            </div>
          </div>

          <div className="form-group m-0">
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </div>
          <div className="mt-4 text-center">
            Don't have an account? <a href="register.html">Create One</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
