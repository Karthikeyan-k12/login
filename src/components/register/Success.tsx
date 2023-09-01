import React from 'react'
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 justify-content-center d-flex align-items-center position text">
            Successfully registered, <Link className='px-1' to={'/login'}>Login</Link> here
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 screen bg-info"></div>
          </div>
        </div>
      );
}

export default Success