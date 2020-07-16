import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { BsCheckCircle } from 'react-icons/bs';

import './styles.css';

const Account = (props) => {
  const [isSelected, setIsSelected] = useState(true);

  const { icon, name } = props;

  const socialIcon = (icon) => {
    if (icon === 'facebook') {
      return <FaFacebook className="social-icon facebook mr-3" />;
    } else if (icon === 'instagram') {
      return <FiInstagram className="social-icon instagram mr-3" />;
    } else if (icon === 'twitter') {
      return <FiTwitter className="social-icon twitter mr-3" />;
    }
  };

  const selectHandler = (name) => {
    console.log(name);
    setIsSelected(!isSelected);
  };

  return (
    <div className="pages mb-2" onClick={() => selectHandler(name)}>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          {socialIcon(icon)}
          {name}
        </div>
        <>
          {isSelected && (
            <BsCheckCircle style={{ color: 'green', fontSize: '26px' }} />
          )}
        </>
      </div>
    </div>
  );
};

export default Account;
