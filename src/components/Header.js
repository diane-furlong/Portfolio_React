import React from 'react'
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Diane Furlong</h1>
                <Typed 
                    className="typed-text"
                    strings={["Full-stack Web Developer:"]}
                    typeSpeed={40}
                    backSpeed={60}
                />
                <Typed
                    className="typed-text2"
                    strings={["Front-end web design", "Back-end logistics"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="/Contact" className="btn-main-offer">Contact Me</a>
            </div>
        </div>

    )
}

export default Header
