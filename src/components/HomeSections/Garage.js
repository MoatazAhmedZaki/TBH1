import React, { Component } from 'react';
import '../../stylesheets/HomeCss.css';
import { Col, Row } from 'react-bootstrap';

export default class Garage extends Component {
  render() {
    return (
      <div className="garagebackground py-5" style={{marginTop:'100px'}}>
        {/* <div className="overlay"> */}
        <div className="container">
          <Row className="d-flex justify-content-center">
            <Col sm={12} md={10}>
              <Row>
                <Col sm={12}>
                  <div className="garagetitle">
                    <img
                      src={require('../../images/Group 7.png')}
                      className="pt-5 "
                      alt="LirtenHome"
                    />
                    <h1 className="py-3">
                      the 21st century <br />
                      garage
                    </h1>
                  </div>
                  <div className="whitelinee mb-3"></div>

                  <div className="garageparg">
                    <p>
                      Google, Facebook, Uber and a lot of other successful
                      businesses over the past decade started in either a dorm
                      room or a garage. You may not have a dorm room or a garage
                      but neither would a professional office space be the most
                      practical choice for your business at it’s early stages.
                      We’ve got your pain and we’ve got you a solution! Now you
                      can get your stand alone office room with just the comfort
                      that you would expect from a million dollar office
                      building, but only a lot more convenient.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
