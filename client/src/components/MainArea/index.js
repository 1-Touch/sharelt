import React from 'react';

const MainArea = (props) => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
            <div className="row pt-md-5 mt-md-3 mb-5">{props.children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainArea;
