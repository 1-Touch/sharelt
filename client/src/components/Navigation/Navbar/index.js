import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './styles.css';

// Components
import Sidenav from '../Sidenav';
import Topnav from '../Topnav';

// Actions
import { logout } from '../../../store/actions/auth';

const Navbar = (props) => {
  const dispatch = useDispatch();

  // Logout function
  const logoutHandler = () => {
    dispatch(logout());
    props.history.push('/');
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <button
          className="navbar-toggler ml-auto mb-2 bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          <div className="container-fluid">
            <div className="row">
              <Sidenav />
              <Topnav />
            </div>
          </div>
        </div>
      </nav>
      {/* Signout Modal */}
      <div
        className="modal fade"
        id="sign-out"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="signOutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Signout
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to Signout of your current logged account ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={logoutHandler}
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Navbar);
