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
      <HashRouter basename='/'>
        <Route path="/" component={ Header }/>
        <Route path="/AboutMePage/" component={ AboutMe }/>
        <Route path="/PortfolioPage/" component={ Portfolio }/>
        <Route path="/ContactPage/" component={ Contact }/>
      </HashRouter>
    </>
  );
}

export default App;
