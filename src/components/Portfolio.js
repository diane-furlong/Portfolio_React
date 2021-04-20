import React from 'react'
import awty from '../assets/are-we-there-yet.png'
import retail from '../assets/retail-page.png'
import aboutme from '../assets/Responsive-Portfolio-Image.png'
import weatherdash from '../assets/demo2.gif'
import treasure from '../assets/treasuredemo.gif'
import workdaysched from '../assets/workdaydemo.gif'
import randompass from '../assets/passworddemo.gif'
import teamprofgen from '../assets/teamprofilegenerator-demo.gif'
import readmegen from '../assets/readme-demo.gif'
import ems from '../assets/EMS_demo.gif'
import notetaker from '../assets/notepage_screenshot.png'
import eatdaburger from '../assets/SS-burger.jpg'

const Portfolio = () => {
    return (
        <main className="blockPort portfolioWrapper">
        <section>
          <div>
            <h1 className="block-header">Portfolio</h1>
            <hr />
          </div>
    
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <p className="portcaption">Treasure Trove</p>
              </div>
              <div className="row">
                <a href="https://diane-furlong.github.io/Treasure-Trove/">
                  <img id="port-image-3" className="img-fluid port-image" src={treasure} alt="Demo of Treasure Trove"/>
                </a>
              </div>
            </div>
    
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <p className="portcaption">Workday Scheduler</p>
              </div>
              <div className="row">
                <a href="https://diane-furlong.github.io/Work-Day-Scheduler/">
                  <img id="port-image-3" className="img-fluid port-image" src={workdaysched} alt="Demo of Workday Scheduler."/>
                </a>
              </div>
            </div>
    
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <p className="portcaption">Random Password Generator</p>
              </div>
              <div className="row">
                <a href="https://diane-furlong.github.io/Password-Generator/">
                  <img id="port-image-3" className="img-fluid port-image" src={randompass} alt="Demo of Random Password Generator"/>
                </a>
              </div>
            </div>
          </div>
    
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <p className="portcaption">Team Profile Generator</p>
              </div>
              <div className="row">
                <img id="port-image-3" className="img-fluid port-image" src={teamprofgen} alt="Demo of Team profile generator."/>
              </div>
            </div>
    
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <p className="portcaption">README Generator</p>
              </div>
              <div className="row">
                <img id="port-image-3" className="img-fluid port-image" src={readmegen} alt="Demo of Random READ ME Generator"/>
              </div>
            </div>
    
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <p className="portcaption">Employee Management System</p>
              </div>
              <div className="row">
                <img id="port-image-3" className="img-fluid port-image" src={ems} alt="Demo of Employee Management System."/>
              </div>
            </div>
          </div>
    
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <p className="portcaption">Note Taker</p>
              </div>
              <div className="row">
                <a href="https://theultimatenotetaker.herokuapp.com/">
                  <img id="port-image-3" className="img-fluid port-image" src={notetaker} alt="Screenshot of Note Taker App"/>
                </a>
              </div>
            </div>
    
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <p className="portcaption">Are We There Yet?</p>
              </div>
              <div className="row">
                <a href="https://arewethereyet.herokuapp.com/">
                  <img id="port-image-3" className="img-fluid port-image" src={awty} alt="Screenshot of Are We There Yet."/>
                </a>
              </div>
            </div>
    
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <p className="portcaption">Eat Da Burger!</p>
              </div>
              <div className="row">
                <a href="https://eatin-da-burg.herokuapp.com/">
                  <img id="port-image-3" className="img-fluid port-image" src={eatdaburger} alt="Screenshot of Eat Da Burger"/>
                </a>
              </div>
            </div>
          </div>
          

          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <p className="portcaption">Retail Website</p>
              </div>
              <div className="row">
                <a href="https://diane-furlong.github.io/RetailSite_SustainableStems/">
                  <img className="img-fluid port-image" src={retail} alt="Screenshot of a retail page from my portfolio."/>
                </a>
              </div>
            </div>
    
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 retailPic">
              <div className="row">
                <p className="portcaption">About Me Website V.1</p>
              </div>
              <div className="row">
                <a href="./index.html">
                  <img className="img-fluid port-image" src={aboutme} alt="Screenshot of my about me page from my portfolio."/>
                </a>
              </div>
            </div>
    
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <p className="portcaption">Weather Dashboard</p>
              </div>
              <div className="row">
                <a href="https://diane-furlong.github.io/Weather-Dashboard/">
                  <img className="img-fluid port-image" src={weatherdash} alt="Demo of weather dashboard."/>
                </a>
              </div>
            </div>
          </div>
    
        </section>
      </main>
    
    )
}

export default Portfolio
