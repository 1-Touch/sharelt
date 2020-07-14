import React from 'react';
import {
  FaUserPlus,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

import './styles.css';

// Components
import Account from '../../components/Account';

const Posts = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-4 w-100">
      {/* Heading Area */}
      <div className="py-2 heading">
        <h2 className="text-primary text-uppercase">post</h2>
        <FaUserPlus className="add-icon" />
      </div>
      {/* Form */}
      <div className="px-3 py-4">
        <form onSubmit={submitHandler}>
          {/* Accounts */}
          <div className="d-flex justify-content-around pb-4">
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="facebookSwitch"
              />
              <label className="custom-control-label" htmlFor="facebookSwitch">
                <FaFacebookF className="social-icon facebook" />
              </label>
            </div>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="instaSwitch"
              />
              <label className="custom-control-label" htmlFor="instaSwitch">
                <FaInstagram className="social-icon instagram" />
              </label>
            </div>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="twitterSwitch"
              />
              <label className="custom-control-label" htmlFor="twitterSwitch">
                <FaTwitter className="social-icon twitter" />
              </label>
            </div>
          </div>

          {/* Form */}
          <div className="card p-5">
            <div className="form-group">
              <label htmlFor="postArea" className="mr-5">
                Upload Media
              </label>
              {/* File choice */}
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="imageRadio"
                  name="radioToggler"
                  className="custom-control-input"
                  value="image"
                />
                <label className="custom-control-label" htmlFor="imageRadio">
                  Image
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="VideoRadio"
                  name="radioToggler"
                  className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="VideoRadio">
                  Video
                </label>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="postArea">Enter your post</label>
              <textarea
                className="form-control"
                id="postArea"
                rows="6"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary text-uppercase">
              post
            </button>
          </div>

          {/* Account Pages */}
          <div className="card p-5 mt-3">
            <h5 className="text-primary text-center pb-2">Accounts</h5>
            <Account icon="facebook" name="Love is Life" />
            <Account icon="facebook" name="Hugs or Drugs" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Posts;
