import React from "react"
import { HashRouter, BrowserRouter, Route, Switch, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Portfolio from "./components/Portfolio"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar/>
      <HashRouter basename="/">
        <Route path="/" component={ Header }/>
        <Route path="/Portfolio_React/AboutMePage" component={ AboutMe }/>
        <Route path="/Portfolio_React/PortfolioPage" component={ Portfolio }/>
        <Route path="/Portfolio_React/ContactPage" component={ Contact }/>
      </HashRouter>
    </>
  );
}

export default App;
