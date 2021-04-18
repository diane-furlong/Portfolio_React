import React from 'react'
import Particles from "react-particles-js"

const ParticlesComps = () => {
    return (
        <Particles
        className="particles-canvas"
            params={{
                particles: {
                    line_linked: {
                        enable: false
                    },
                    number: {
                        value: 90,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: "star",
                        stroke: {
                            width: 4,
                            color: "#f5b183"
                        }
                    }
                }
            }}
      /> 
    )
}

export default ParticlesComps