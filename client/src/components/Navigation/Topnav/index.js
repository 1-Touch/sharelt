import React from 'react';
import { FaSearch, FaBell, FaSignOutAlt, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';

const Topnav = () => {
  return (
    <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
      <div className="row align-items-center">
        <div className="col-md-4">
          <h4 className="text-light text-uppercase mb-0">Dashboard</h4>
        </div>
        <div className="col-md-5">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search"
              />
              <button type="button" className="btn btn-white search-button">
                <FaSearch className="text-danger" />
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-3">
          <ul className="navbar-nav">
            <li className="nav-item icon-parent">
              <Link to="#" className="nav-link icon-bullet">
                <FaComments className="text-muted icon" />
              </Link>
            </li>
            <li className="nav-item icon-parent">
              <Link to="#" className="nav-link icon-bullet">
                <FaBell className="text-muted icon" />
              </Link>
            </li>
            <li
              className="nav-item ml-md-auto"
              data-toggle="modal"
              data-target="#sign-out"
            >
              <Link to="#" className="nav-link">
                <FaSignOutAlt className="text-danger icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
