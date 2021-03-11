import React, { Component } from 'react';
import '../../stylesheets/HomeCss.css';
import { Col, Row, Container } from 'react-bootstrap';

export default class Experience extends Component {
  render() {
    return (
      <Container style={{ marginTop: '100px',marginBottom:'100px' }}>
        <Row className="d-flex justify-content-center mb-3">
          <Col sm={12} md={8}>
            <h1 className="imgheader mt-3">OFFICE EXPERIENCE</h1>
            <img
              src={require('../../images/spacebg.png')}
              alt="ExperienceImage"
              className="card-img-top"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
