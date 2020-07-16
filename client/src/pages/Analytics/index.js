import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// Components
import Heading from '../../components/Heading';
import Spinner from '../../components/Spinner';
import LineChart from '../../components/Charts/LineChart';

const Analytics = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [resultSet, setResultSet] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchHandler = (platform) => {
    console.log(platform);
    console.log(searchTerm);
    setLoading(true);
    setTimeout(() => {
      setResultSet(true);
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="px-4 w-100">
      <Heading name="analytics" />
      {/* Search Bar */}
      <div className="input-group my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search over social media"
          aria-label="Search over social media with two button addons"
          aria-describedby="button-addon4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append" id="button-addon4">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => searchHandler('facebook')}
          >
            <FaFacebookF className="facebook" />
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => searchHandler('instagram')}
          >
            <FaInstagram className="instagram" />
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => searchHandler('twitter')}
          >
            <FaTwitter className="twitter" />
          </button>
        </div>
      </div>
      {loading ? (
        <div className="my-5">
          <Spinner />
        </div>
      ) : (
        resultSet && (
          <div className="px-5">
            <LineChart />
          </div>
        )
      )}
    </div>
  );
};

export default Analytics;
