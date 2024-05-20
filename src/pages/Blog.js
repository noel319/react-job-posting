/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Jumbotron, Container,Col,Row } from 'reactstrap';
import bgimage from './../images/picnews.jpg'
import image from './../images/news.jpg'

import Footer from './../components/Footer'

const Blog = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }} className="text-light">
        <Container fluid>
          <h1 className="display-3 text-center">News</h1>
          <p className="lead text-center">This page for news.</p>
        </Container>
      </Jumbotron>

    <Container>
      <Row>
        <Col>
        <div className="card mb-3">
        <div className="col-md-20">
            <div className="card-body">
            <img src={image} className="card-img" alt="image" width="200px"/>
            <br></br>
                <h5 className="card-title">How to Get an IT Job: Succeeding in Your IT Career</h5>
                <small><p>August 26, 2018</p></small>
            <p className="card-text">Whether you are preparing to enter the job market for the first time, or have been working for the majority of your life, now is an excellent time to begin a career as an IT professional. The tech market has been booming over the past few decades and shows no signs of slowing down with so much growth and such a high demand for new gadgets, apps, and software.

One of the most difficult parts of applying for a job is getting started, especially when you don’t really know where to begin. If you find yourself in this position, the best resource available to you is one that can offer not only information to help you every step of the way, but also tips from professionals already working and hiring employees within the technical field. This is that resource.
Browse a category by clicking on any of the links below:
Resume, Interview, & Networking Tips
Best Degrees for IT professionals
IT Tools & Resources
Certifications, Conferences, & Training Courses
Best Cities & Average Salary Range for IT Professionals
Further Advice & Inspiration
Resume, Interview, & Networking Tips
Tweet this:
“[the] number of cloud jobs has increased by over 30%.”
– SolarWinds
Resume vs Curriculum Vitae
Prior to updating your resume or curriculum vitae (CV), it is important to know which one a company prefers. The biggest difference between the two is that a resume is typically limited to one page, while a CV is usually two pages, three at the most. Resumes tend to be more to the point, while CVs allow you to expand on your qualifications, focusing on education, experience, research, publications, and awards.
Check out these resume and CV samples for more ideas.
Good First Impressions
Your resume or CV is the first impression a potential employer will have about you, so take the time to make sure your resume paints a complete and positive picture about who you are. Before sending out your resume or CV, look the piece over to ensure it’s professional and has no typos and is clearly written.
Find a Balance
One of the hardest parts about writing a resume or CV is finding the balance between talking yourself up and finding a balance in how much to embellish your achievements. You want to be sure everything you include on your resume is valid and is backed up by a reference, or exemplified by your own working knowledge or accolades.
Coordinate Your Resume for Each Job
While it may be easy to send out a carbon copy of your resume for every position you’re applying for, don’t.
Job Brown, IT & Web Manager at Wooden Blinds Direct, says, “as is the case in any job, tailor your CV to the specific role. Do as much research on the company as you can and see if you can find out what software they are using. Be sure to keep your CV broad, highlight specific pieces of software from your research of the job specification. Don’t forget to show your passion – IT is a vital part of practically every business today, but companies want people with a genuine flare and interest in the area, as well as the skills to do the job.”</p>
          </div>
        </div>
       </div>
     </Col>
  </Row>
</Container>
    <Footer/>

    </div>
  );
};

export default Blog;