import React from 'react';

const Reset = () => {
  return (
    <div className="card fat">
      <div className="card-body">
        <h4 className="card-title">Reset Password</h4>
        <form method="POST" className="my-login-validation" novalidate="">
          <div className="form-group">
            <label for="new-password">New Password</label>
            <input
              id="new-password"
              type="password"
              className="form-control"
              name="password"
              required
              autoFocus
              data-eye
            />
            <div className="invalid-feedback">Password is required</div>
            <div className="form-text text-muted">
              Make sure your password is strong and easy to remember
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

export default Reset;
