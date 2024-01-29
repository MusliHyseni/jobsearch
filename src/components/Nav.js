import React from 'react'
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid navDiv">
                <Link to='/' className="navbar-brand text-light">JobSearch</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ulHolder" id="navbarSupportedContent">
                <ul className="navbar-nav m-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active text-light" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/jobs" className="nav-link text-light" aria-current="page">Jobs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/myjobs" className="nav-link text-light" aria-current="page">My jobs</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
)
}

export default Nav