import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Portfolio from "./components/Portfolio"
import ParticlesComps from "./components/ParticlesComps";
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"

function App() {
  return (
    <BrowserRouter>
     {/* <ParticlesComps/> */}
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Header}/>
        <Route exact path="/AboutMe" component={AboutMe}/>
        <Route exact path="/Portfolio" component={Portfolio}/>
        <Route exact path="/Contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
