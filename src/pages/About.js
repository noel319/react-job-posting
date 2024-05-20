/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import bgimage from './../images/pic2.jpg'
import image from './../images/profilepic.jpg'

import Footer from './../components/Footer'

const About = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }} className="text-light">
        <Container fluid>
          <h1 className="display-3 text-center">About</h1>
          <p className="lead text-center">This page for personal portofolio site.</p>
        </Container>
      </Jumbotron>

      <Container>
    <div className="card mb-3">
    <div className="row no-gutters">
    <div className="col-md-4">
      <img src={image} className="card-img" alt="image" width="200px"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">FAKHRUR RIJAL</h5>
        <p className="card-text">People who are just learning to make a website and there are still 
        many shortcomings if there are people who can give advice I am very grateful for that.</p>
      </div>
    </div>
  </div>
 </div>
      
      </Container>
      <Footer/>
    </div>
  );
};

export default About;