/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from 'axios'
import {Link, withRouter } from 'react-router-dom'
import {Row, Col, Container, Button } from 'reactstrap'
import Logo from './../images/logo-site.png';
import Login from './../pages/Login'
import Home from './../pages/Home'


class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: {},
      token : '',
      isLogin : false
    }
  }

  getData = async(page)=>{
    const job = await axios.get(page !== undefined ? page:'http://35.175.244.140:8080/user')
    return job.data  
  }
  
  async componentDidMount(){
    this.getData().then(async res => {
      const token = await localStorage.getItem('Authorization')
      this.setState({
        isLogin: true,
        data : res.data,
        token,
      })
      console.log(res.data)
      if(token !== null){
        this.setState({isLogin: true});
      }else{
        this.setState({isLogin: false});
      }
    })
  }

  removeToken = () => {
    localStorage.removeItem('Authorization')
    this.setState({isLogin:false})
    this.props.history.push('/login')
    // window.location.reload()
  }
  render(){
    return (
<nav className="navbar header-nav navbar-expand-lg background-navbar">

<div className="container">
<Link to='/' className="navbar-brand font-navbar">GEEK JOBS</Link>
<button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
<span></span>
<span></span>
<span></span>
</button>
{!this.state.isLogin&&(
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav">
        <li className="nav-item active ">
         <Link to='/findjobs' className="nav-link text-light font-sub-nav">Find Jobs</Link>
      </li>
      <li className="nav-item">
      <Link to='/blog' className="nav-link  text-light font-sub-nav" >News</Link>
     </li>
      <li className="nav-item">
      <Link to='/about' className="nav-link  text-light font-sub-nav" >About</Link>
      </li>
    </ul>
      <div className="my-2 my-lg-0">
      <Link to='/login'><button className="btn btn-outline-light btn-sm font-login" type="button" value="Login">Login</button></Link>
      <Link to='/signup'><input className="btn btn-dark btn-sm font-login" type="button" value="Sign Up"></input></Link>
      {/* <Link to='/signupcompany'><input className="btn btn-outline-light btn-sm" type="button" value="For Company"></input></Link> */}
     </div> 
       
    </div>
  )}
  {this.state.isLogin&&(
     <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
     <ul className="navbar-nav">
     <li className="nav-item active">
      <Link to='/findjobs' className="nav-link text-light font-sub-nav">Find Jobs</Link>
   </li>
   <li className="nav-item">
   <Link to='/blog' className="nav-link  text-light font-sub-nav" href="#">News</Link>
  </li>
   <li className="nav-item">
   <Link to='/about' className="nav-link  text-light font-sub-nav" href="#">About</Link>
   </li>

     </ul>
   <div className="my-2 my-lg-0">
   <Link to='/postjobs/crudjob' className="btn btn-danger btn-sm font-login">Dasboard</Link>  
   <Link to='/login'><button className="btn btn-dark btn-sm font-login" type="button" value="Logout" onClick ={()=> this.removeToken()}>Logout</button></Link>
   </div>    
 </div>
  )}  
</div>
</nav>

    );
}

}

export default withRouter(Navbar); 