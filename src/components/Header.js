import React from 'react'
import Typed from "react-typed"
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import stackoverflow from '../assets/stackover2.png'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Diane Furlong</h1>
                <h2>Full-stack Web Developer:</h2>
                <Typed
                    className="typed-text2"
                    strings={["Front-end web design", "Back-end logistics"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
               
                <section>
                    <div className="row contactMeDiv">
                        <div className="block">
                            <div className="row">
                                <div className="col-md-12">
                                    <a href="/Contact" className="btn-main-offer">Contact Me</a>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-4">
                                    <a href="https://www.linkedin.com/in/diane-furlong/">
                                        <img className="connectphoto" src={linkedin} alt="LinkedIn Logo" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="https://github.com/diane-furlong">
                                        <img className="connectphoto" src={github} alt="GitHub Logo" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="https://stackoverflow.com/users/story/14291129">
                                        <img className="connectphoto" src={stackoverflow} alt="StackOverflow Logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Header
