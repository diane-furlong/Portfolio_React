import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from '../assets/profile-picture.jpg'

const AboutMe = () => {
    return (
        <div className="aboutMeWrapper">
            <container className="row">
                <div className="col-5">
                    <img src={Image} alt="Diane Furlong" className="profPhoto"></img>
                </div>
                <div className="col-5 aboutMeText">
                    <p>I am in training to become a full stack web developer. I am building upon current skills and learning many new skills. I taught myself basic HTML and CSS at an early age, but never took the steps to further explore this interest- until now! Thus far, I've made applications working on both the front end and the back end. View my portfolio page to see some examples!</p>
                    <br />
                    <p>Here's a little information about my background:</p>

                    <p>I grew up in the suburbs of Cleveland and have lived in the area my whole life. I attended Cleveland State University and graduated with a Bachelor's of Science in Environmental Science. I focused in chemistry and completed a minor in biology.</p>

                    <p>While in my last few years of university, I interned at the Northeast Ohio Regional Sewer District working in Analytical Services. After graduating, I started working as a microbiologist at STERIS in the Healthcare sector. I work to develop low-temperature sterilizers for medical devices and equipment.</p>
                </div>
            </container>
        </div>
    )
}

export default AboutMe
