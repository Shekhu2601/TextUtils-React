import React from "react";
import PropTypes from 'prop-types'
import './style.css'





export default function Navbar(prop){
  

 
    
  
    return (
        <>
        <nav className={`navbar navbar-expand-lg  navbar-${prop.mode} bg-${prop.mode}`}>
  <div className="container-fluid">
    
    <a className="navbar-brand" href="#">{prop.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a  className="nav-link active darks" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active dark arial-current" href="/about">{prop.aboutText} </a>
        </li>
        
       
       
      </ul>
      
    </div>

    <div className="select">
      <label htmlFor="red">
        <input type="radio" name="color" id="rred"/>
        <span onClick={prop.redMode}  className="color1"></span>
      </label>
      <label htmlFor="green">
        <input type="radio" name="color" id="ggreen"/>
        <span onClick={prop.yMode}  className="color2"></span>
      </label>
      <label htmlFor="yellow">
        <input type="radio" name="color" id="yyellow"/>
        <span onClick={prop.gMode} className="color3"> </span>
      </label>
    </div>
    

    <div className={`form-check form-switch text-${prop.mode==="light"?"dark" : "light"}`}>
  <input onClick={prop.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label id="my" className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkMode</label>
</div>
    
  </div>
</nav>
        </>
    );
    
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};
 Navbar.defaultProps = {
  title : 'set the title'
 }