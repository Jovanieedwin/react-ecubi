
import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' className="navbar-brand" href="#">Rick And Morty</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/' className="nav-item nav-link active" >Home </Link>
            <Link to='/curiosities' className="nav-item nav-link" >Curiosities</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;