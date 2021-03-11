// Libraries
import React, { Component } from 'react';
import {  Route,HashRouter } from 'react-router-dom';
// Styling
import './App.css';
// Components
import Home from './components/pages/Home';
import Space from './components/pages/Space';
import Blog from './components/pages/Blog';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/layout/Footer';
import Navb from './components/layout/Navb';
import Articale from './components/pages/Articale';

import FixedSection from './components/layout/FixedSection';
export default class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Navb />
          <FixedSection />
          <Route exact path="/" component={Home} />
          <Route exact path="/space" component={Space} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/blog/:id" component={Articale} />

          <Footer />
        </div>
      </HashRouter>
    );
  }
}
