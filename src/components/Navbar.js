import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// ${props.mode==='dark'?'light':'dark'}

export default function Navbar(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/aboutus">
              {props.home}
            </Link>
          </li>
          
            </ul>
          
   
        <form className="d-flex">
        <div className="form-check form-switch">
  <input
  onClick={props.changeMode}
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="flexSwitchCheckDefault"
  />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode === "dark"? "white":"black"}} >
    {  props.mode ==="dark" ?  "Disable Dark mode":"Enable Dark Mode"}
  </label>
</div>

          
         
        </form>
      </div>
    </div>
  </nav>
  
  
    </div>
  )
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    home: PropTypes.string,
}
Navbar.defaultProps={
    title: "set title",
    home: "set home"
}