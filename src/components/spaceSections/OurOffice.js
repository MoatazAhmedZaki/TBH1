import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

export default class OurOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officeRooms: [
        {
          src:
            'https://i.pinimg.com/originals/16/8c/b2/168cb2a46bad146aaaf9aa6212ded02b.jpg',
          alt: 'TBH office1'
        },
        {
          src:
            'https://i.pinimg.com/originals/16/8c/b2/168cb2a46bad146aaaf9aa6212ded02b.jpg',
          alt: 'TBH office2'
        },
        {
          src:
            'https://i.pinimg.com/originals/16/8c/b2/168cb2a46bad146aaaf9aa6212ded02b.jpg',
          alt: 'TBH office3'
        },
       
      ],
      meetingRooms: [
        {
          src:
            'https://masarspace.com/wp-content/uploads/2019/12/IMG-20191011-WA0050.jpg',
          alt: 'TBH office1'
        },
        {
          src:
            'https://masarspace.com/wp-content/uploads/2019/12/IMG-20191011-WA0050.jpg',
          alt: 'TBH office2'
        },
        {
          src:
            'https://masarspace.com/wp-content/uploads/2019/12/IMG-20191011-WA0050.jpg',
          alt: 'TBH office3'
        }
      ],
      cafe: [
        {
          src: 'https://images0.westend61.de/0001262137pw/casual-business-people-having-a-meeting-in-a-cafe-FKF03687.jpg',
          alt: 'TBH office2'
        },
        {
          src: 'https://images0.westend61.de/0001262137pw/casual-business-people-having-a-meeting-in-a-cafe-FKF03687.jpg',
          alt: 'TBH office1'
        },

        {
          src: 'https://images0.westend61.de/0001262137pw/casual-business-people-having-a-meeting-in-a-cafe-FKF03687.jpg',
          alt: 'TBH office3'
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="col-sm-12 mx-auto py-4 redbg ">
          <div className="col-sm-8 mx-auto px-5 ">
            <p className=" white mb-0 spacetitle">Maadi Headquarters</p>

            <Row>
              <Col sm={12} md={5}>
                {' '}
                <h3 className="white subTitle"> Office Rooms</h3>
              </Col>
              <Col sm={12} md={7}>
                {' '}
                <p className="include">
                  {' '}
                  It includes:
                  <br /> Virtual Office, Training rooms and private offices
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <Container>
          <Row className="pt-2 ml-5">
            <Col sm={6}>
              <p className="p1 py-2">
                feel free to lay it out in your own unique way!
              </p>
            </Col>
          </Row>

          <Carousel>
            {this.state.officeRooms.map(off => (
              <Carousel.Item className="text-center">
                <img
                  className="img-fluid interimg"
                  src={off.src}
                  alt={off.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <Row>
            <Col sm={12} md={4}>
              <div className="redline mt-3 mb-1 mx-2"></div>

              <h2 className="px-2 white headline2">SerVices:</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={2}>
              <p className="px-2 p2">
                The offices are repleted with services that will help conduct
                your business successfully.
              </p>
            </Col>
            <Col className="listService" sm={12} md={4}>
              <ul>
                <li>
                  <i className="fas fa-check-square px-2"></i> Food And Music
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Free Coffee
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Cool Munchies
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Free WIFI
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Printing (50
                  Papers)
                </li>
              </ul>
            </Col>
            <Col className="listService" sm={12} md={4}>
              <ul>
                <li>
                  <i className="fas fa-check-square px-2"></i> private open-air
                  Balacony
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> LEDs Screen
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Comfy Bean Bags
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i>Ergonomics Chairs
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> White Boards
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Office Supplies
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        <div className="col-sm-12 mx-auto py-4 redbg ">
          <div className="col-sm-8 mx-auto px-5 ">
            <p className=" white mb-0 spacetitle">Maadi Headquarters</p>

            <h3 className="white subTitle"> Meeting Rooms</h3>
          </div>
        </div>

        <Container>
          <Row className="pt-2 ml-5">
            <Col sm={6}>
              <p className="p1 py-2">
                Feel free to lay it out in your own unique way.
              </p>
            </Col>
          </Row>

          <Carousel>
            {this.state.meetingRooms.map(off => (
              <Carousel.Item>
                <img
                  className="img-fluid interimg"
                  src={off.src}
                  alt={off.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <Row>
            <Col sm={12} md={4}>
              <div className="redline mt-3 mb-1 mx-2"></div>

              <h2 className="px-2 white headline2">SerVices:</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={2}>
              <p className="px-2 p2">
                The meeting room is repleted with services that will help
                conduct your meeting successfully.
              </p>
            </Col>
            <Col className="listService" sm={12} md={4}>
              <ul>
                <li>
                  <i className="fas fa-check-square px-2"></i> Food And Music
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Free Coffee
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Cool Munchies
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Free WIFI
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Printing (50
                  Papers)
                </li>
              </ul>
            </Col>
            <Col className="listService" sm={12} md={4}>
              <ul>
                <li>
                  <i className="fas fa-check-square px-2"></i> private open-air
                  Balacony
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> LEDs Screen
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Comfy Bean Bags
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i>Ergonomics Chairs
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> White Boards
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Office Supplies
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        <div className="col-sm-12 mx-auto py-4 redbg ">
          <div className="col-sm-8 mx-auto px-5 ">
            <p className=" white mb-0 spacetitle">Maadi Headquarters</p>

            <h3 className="white subTitle">Cafe</h3>
          </div>
        </div>

        <Container>
          <Row className="pt-5 ml-5"></Row>

          <Carousel>
            {this.state.cafe.map(off => (
              <Carousel.Item>
                <img
                  className="img-fluid interimg"
                  src={off.src}
                  alt={off.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <Row>
            <Col sm={12} md={4}>
              <div className="redline mt-3 mb-1 mx-2"></div>

              <h2 className="px-2 white headline2">SerVices:</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={2}>
              <p className="px-2 p2">
                The Cafe is repleted with services and lunch area that will help
                energize your mind and business successfully.
              </p>
            </Col>
            <Col className="listService" sm={12} md={4}>
              <ul>
                <li>
                  <i className="fas fa-check-square px-2"></i> Food And Music
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Free Coffee
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Cool Munchies
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Free WIFI
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Printing (50
                  Papers)
                </li>
              </ul>
            </Col>
            <Col className="listService" sm={12} md={4}>
              <ul>
                <li>
                  <i className="fas fa-check-square px-2"></i> private open-air
                  Balacony
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> LEDs Screen
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Comfy Bean Bags
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i>Ergonomics Chairs
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> White Boards
                </li>
                <li>
                  <i className="fas fa-check-square px-2"></i> Office Supplies
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
