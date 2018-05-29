import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Home.css';
import { Jumbotron, Container, Button, Col, Row } from 'reactstrap';

class Room extends Component {
  render() {
    return(
       <Container>
        <Row>
          <Col xs="2">.col-3</Col>
          <Col xs="8">
            <Jumbotron fluid id="jumbo">
              <Container fluid>
                <h1 className="display-3">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </Container>
            </Jumbotron>
          </Col>
          <Col xs="2">.col-3</Col>
        </Row>
      </Container>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <div className="house black">
            <Room/>
        </div>
        <div className="house white">
          <Room/>
        </div>
        <div className="house black">
          <Room/>
        </div>
      </div>

    );
  }
}

export default Home;
