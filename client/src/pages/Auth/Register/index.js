import React from 'react';

const Register = () => {
  return (
    <div className="card fat">
      <div className="card-body">
        <h4 className="card-title">Register</h4>
        <form method="POST" className="my-login-validation" novalidate="">
          <div className="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              name="name"
              required
              autoFocus
            />
            <div className="invalid-feedback">What's your name?</div>
          </div>

          <div className="form-group">
            <label for="email">E-Mail Address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              required
            />
            <div className="invalid-feedback">Your email is invalid</div>
          </div>

          <div className="form-group">
            <label for="password">Password</label>
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
                name="agree"
                id="agree"
                className="custom-control-input"
                required=""
              />
              <label for="agree" className="custom-control-label">
                I agree to the <a href="#">Terms and Conditions</a>
              </label>
              <div className="invalid-feedback">
                You must agree with our Terms and Conditions
              </div>
            </div>
          </div>

          <div className="form-group m-0">
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </div>
          <div className="mt-4 text-center">
            Already have an account? <a href="index.html">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
