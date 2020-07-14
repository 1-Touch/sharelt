import React from 'react';
import {
  FaShoppingCart,
  FaSync,
  FaMoneyBillAlt,
  FaUsers,
  FaChartLine,
} from 'react-icons/fa';

import './styles.css';

const Dashboard = () => {
  return (
    <>
      <div className="col-xl-3 col-sm-6 p-2">
        <div className="card card-common">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <FaShoppingCart className="text-warning icon-card" />
              <div className="text-right text-secondary">
                <h5>Sales</h5>
                <h3>$135,000</h3>
              </div>
            </div>
          </div>
          <div className="card-footer text-secondary">
            <FaSync className="mr-3" />
            <span>Update Now</span>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 p-2">
        <div className="card card-common">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <FaMoneyBillAlt className="text-success icon-card" />
              <div className="text-right text-secondary">
                <h5>Expenses</h5>
                <h3>$39,000</h3>
              </div>
            </div>
          </div>
          <div className="card-footer text-secondary">
            <FaSync className="mr-3" />
            <span>Update Now</span>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 p-2">
        <div className="card card-common">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <FaChartLine className="text-danger icon-card" />
              <div className="text-right text-secondary">
                <h5>Visitors</h5>
                <h3>35,000</h3>
              </div>
            </div>
          </div>
          <div className="card-footer text-secondary">
            <FaSync className="mr-3" />
            <span>Update Now</span>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 p-2">
        <div className="card card-common">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <FaUsers className="text-info icon-card" />
              <div className="text-right text-secondary">
                <h5>Users</h5>
                <h3>15,000</h3>
              </div>
            </div>
          </div>
          <div className="card-footer text-secondary">
            <FaSync className="mr-3" />
            <span>Update Now</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
