import React from 'react'
import Logo from '../assets/logo_df_transp.png'
import $ from 'jquery'
//IMPORT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});

const navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container nav-item">
          <a className="navbar-brand" href="/Portfolio_React/#/" id="logo">Diane Furlong</a>

          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/Portfolio_React/#/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/AboutMe/">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/Portfolio/">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/Contact/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      
      </nav>
    )
}

export default navbar
