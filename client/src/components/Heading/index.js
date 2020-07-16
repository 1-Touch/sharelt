import React from 'react';

const Heading = ({ name, icons }) => {
  return (
    <div className="py-2 heading">
      <h2 className="text-primary text-uppercase">{name}</h2>
      {/* Icons */}
      <div className="px-3 d-flex align-items-center justify-content-between">
        {icons &&
          icons.map((icon) => (
            <React.Fragment key={Math.random()}>{icon}</React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default Heading;
