import React from 'react'
import Logo from '../assets/logo_df_transp.png'
//IMPORT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const navbar = () => {
    return (
      <> 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#"><img src={Logo} alt="logo" className="logo"></img></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/AboutMe">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        
        </nav>
      </>
    )
}

export default navbar
