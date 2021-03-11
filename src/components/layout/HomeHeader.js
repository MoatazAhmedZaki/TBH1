import React, { Component } from 'react';
import '../../stylesheets/HeaderCss.css';
import { Row, Col } from 'react-bootstrap';
export default class HomeHeader extends Component {
  render() {
    return (
      <div className="homeheader">
        <Row className="d-flex justify-content-center ">
          <Col sm="12" md="10" style={{ marginTop: '140px' }}>
            <div className="headerbackground "></div>
          </Col>
        </Row>
        <h2>
          THE <span className="homest">21</span>
          <br className="d-lg-none d-sm-block " /> CENTURY <br />
          <span className="text-center homegarage"> garage</span>
        </h2>
        <div className="homeheaderoverlay"></div>
      </div>
    );
  }
}
