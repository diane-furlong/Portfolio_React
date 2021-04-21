import React from "react"
import { HashRouter, BrowserRouter, Route, Switch, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar/>
      <HashRouter basename="/">
        <Route exact path="/" component={ Header }/>
        <Route exact path="/#/AboutMe/" component={ AboutMe }/>
        <Route exact path="/#/Portfolio/" component={ Portfolio }/>
        <Route exact path="/#/Contact/" component={ Contact }/>
      </HashRouter>
    </>
  );
}

export default App;
