import React, { Component } from 'react';
import logo2 from '../../images/logo2.png';
import '../../stylesheets/fixedSection.css';
export default class FixedSection extends Component {
  render() {
    return (
      <div className="fixedd p-0 m-0">
        <div className="fixedSection">
          {' '}
          <h6>THE BUSINESS HUB. THE 21ST CENTURY GARAGE.</h6>
          <img alt="TBH logo" src={logo2} className="img-fluid" />{' '}
          <span>SOCIAL</span>
          <div className="icons">
            {' '}
            <a
              href="https://www.facebook.com/thebusinesshub.space/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <i className="fab fa-facebook-f myFB"></i>
            </a>
            <a
              href="https://www.instagram.com/thebusinesshub.space/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <i className="fab fa-instagram myFB"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
