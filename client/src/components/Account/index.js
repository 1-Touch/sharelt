import React from 'react';
import { FaFacebook, FaCheck } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import './styles.css';

const Account = (props) => {
  const { icon, name } = props;
  return (
    <div className="pages mb-2">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          {icon === 'facebook' && (
            <FaFacebook className="social-icon facebook mr-3" />
          )}
          {name}
        </div>
        <>
          <FaCheck style={{ color: 'green', fontSize: '26px' }} />
        </>
      </div>
    </div>
  );
};

export default Account;
