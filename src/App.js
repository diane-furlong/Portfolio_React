import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from "react-particles-js"
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  return (
    <>
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
      <Navbar/>
      <Header/>
      <h2>portfolio</h2>
    </>
  );
}

export default App;
