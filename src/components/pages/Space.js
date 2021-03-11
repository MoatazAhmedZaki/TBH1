import React, { Component } from 'react';
import Header from '../layout/Header';
// import spaceBg from '../../images/spacebg.png';
import '../../stylesheets/SpaceCss.css';
import OurOffice from '../spaceSections/OurOffice';
import { Container } from 'react-bootstrap';
import ContactFooter from '../layout/ContactFooter';
export default class Space extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="spacepage">
        <div style={{ marginBottom: '130px' }}>
          <Header
            title={'SPACE'}
            secondtitle1={'Enjoy the '}
            secondtitle2={'wonderful'}
            secondtitle3={'space we offer'}
            headerParagraph={
              'In the heart of Maadi with all of its trees. Keep yourself always refreshed in our amazing office space. It is beautiful, with wonderful scenery.'
            }
          />
        </div>
        <Container>
          <div className="col-md-10 mx-auto py-5">
            <div className="whiteline mb-3 mx-2"></div>

            <h2 className="px-2 white headline">Check Our Amazing Office!</h2>

            <p className="px-2 white w-75 subtxt">
              {' '}
              No more cluncky chairs or uncomfortable seats !. Just the best of
              the best. Our office space has wonderful scenery from the open,
              large windows. The offices are spacious and feels professional.
            </p>
          </div>
        </Container>
        <OurOffice />

        <div className="myspaceblur">
          <ContactFooter
            lefttoptitle={'Don’t Hesitate visiting Us.'}
            lefttopparagraph={'Business, Politics'}
            rightheader={'Pass By, We’d love to see you. '}
          />
        </div>
      </section>
    );
  }
}
