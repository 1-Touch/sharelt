import React from 'react';

const Forgot = () => {
  return (
    <div className="card fat">
      <div className="card-body">
        <h4 className="card-title">Forgot Password</h4>
        <form method="POST" className="my-login-validation" novalidate="">
          <div className="form-group">
            <label for="email">E-Mail Address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              value=""
              required
              autoFocus
            />
            <div className="invalid-feedback">Email is invalid</div>
            <div className="form-text text-muted">
              By clicking "Reset Password" we will send a password reset link
            </div>
          </div>

          <div className="form-group m-0">
            <button type="submit" className="btn btn-primary btn-block">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
