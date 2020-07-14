import React from 'react';
import { FaHome, FaUser, FaEnvelope, FaWrench } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

import './styles.css';

const Sidenav = () => {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
      <div className="overlay-dark px-3">
        <Link
          to="/"
          className="navbar-brand text-white d-block mx-auto text-center py-3 mb-3 bottom-border"
        >
          SHARELT
        </Link>
        <div>
          <div className="bottom-border pb-3">
            <img
              src="https://randomuser.me/api/portraits/women/82.jpg"
              width="50"
              className="rounded-circle mr-3"
              alt="sidenav"
            />
            <Link to="/profile" className="text-white">
              Olivia Isla
            </Link>
          </div>
          <ul className="navbar-nav flex-column mt-4">
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className="nav-link text-white p-3 mb-2 d-flex align-items-center sidebar-link"
                activeClassName="current"
              >
                <FaHome className="text-light mr-3 icon" />
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/profile"
                className="nav-link text-white p-3 mb-2 d-flex align-items-center sidebar-link"
                activeClassName="current"
              >
                <FaUser className="text-light mr-3 icon" />
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/posts"
                className="nav-link text-white p-3 mb-2 d-flex align-items-center sidebar-link"
                activeClassName="current"
              >
                <FaEnvelope className="text-light mr-3 icon" />
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/settings"
                className="nav-link text-white p-3 mb-2 d-flex align-items-center sidebar-link"
                activeClassName="current"
              >
                <FaWrench className="text-light mr-3 icon" />
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
