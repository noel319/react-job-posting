/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Row, Col, Container, Button} from 'reactstrap'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import { Component } from 'react'
import axios from 'axios'

import JobItems from './../components/JobItems'
import Footer from './../components/Footer'

export default class FindJobs extends Component {

  render() {
    return (
      <div >   
     
      <Container>
      <JobItems/>
      </Container>
      <Footer/> 
      </div>
      
    )
  }
}

