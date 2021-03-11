import React, { Component } from 'react';
import HomeHeader from '../layout/HomeHeader';
import Services from '../HomeSections/Services';
import Garage from '../HomeSections/Garage';
import Whytbh from '../HomeSections/Whytbh';
import Experience from '../HomeSections/Experience';
import Location from '../HomeSections/Location';
import '../../stylesheets/HomeCss.css';

export default class Home extends Component {
  componentDidMount() {
 
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="homepage">
        <HomeHeader />
        <Services />
        <Garage />
        <Whytbh />
        <Experience />
        <Location />

        
      </section>


    );
  }
}
