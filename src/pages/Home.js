/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Row, Col, Container, Button} from 'reactstrap'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import { Component } from 'react'
import axios from 'axios'
import Footer from './../components/Footer'
import bgimage from './../images/jobpic.png'
import bgimage2 from './../images/ben_img.jpg'
import { Jumbotron} from 'reactstrap';
import JobItems from './../components/JobItems'
export default class Home extends Component {

  render() {
    return (
      <div>   
     
     {/* Header */}
      {/* <Content/> */}
      <Jumbotron fluid style={{backgroundImage: `url(${bgimage})`, backgroundSize: 'cover'}} className="text-light">
        <h1 className="display-3 text-center">Welcome</h1>
        <p className="lead text-center">The Best Online Recruitment and Assessment Platform for Leading Information companies.</p>
        <hr className="my-2 text-center" />
        <p className="text-center">Filter candidates who are not relevant to the pre-assessment questionProfile your candidates efficiently with online psychometric assessments
        Test solution from start to finish (including testing, selection and placement centers)</p>
        <p className="lead text-center">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>

      <Container>
          <JobItems />
      </Container>
      <Footer/> 
      </div>
    )
  }
}

