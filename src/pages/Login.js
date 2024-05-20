import React,{Component} from 'react';
import './../App.css'
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import {loginUser} from './../redux/action/user'
import Navbar from './../components/Navbar'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : {},
      isLoading : true,
      isError : '',
      email : '',
      password : '',
      token : ''
    }
  }

  async componentDidMount(){
    await localStorage.getItem('Authorization')
  }

  getLogin = async(account) => {
  //  const user = await axios.post('http://localhost:2000/user/login',(account))
  //  return user.data 
  await this.props.dispatch(loginUser(account))
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const account = {
      email: this.state.email,
      password : this.state.password
    };
    console.log(account)
    this.props.dispatch(loginUser(account))
      .then(res => {
        console.log(res.action.payload.status)
        let status = res.action.payload.status;
        if(status === 200){
          localStorage.setItem('Authorization',res.token)
          alert('Succes to Login')
          this.props.history.push(`postjobs/crudjob`);
          window.location.reload()
        }else{
          alert('Email or Password is incorrect')
        }
      }).catch((err) => {
        alert('Email or Password is incorrect')
        console.log(err)
        return
      })
  }

  render() {
  return (
    <div className='Login-design text-dark shadow p-3 mb-5 '>
    <Container>
    <Label for="title" className='text-center text-Login'>LOGIN</Label>
    <Row>
    <Col>
    <Form id="loginForm" method="post" onSubmit ={this.handleSubmit}>
      <FormGroup>
        <Label for="email"> Email</Label>
        <Input type="email" name="email" id="email" onChange={this.handleEmailChange} placeholder="Enter your Email" required/>
      </FormGroup>
      <FormGroup>
        <Label for="Password"> Password</Label>
        <Input type="password" name="password" id="Password"  onChange={this.handlePasswordChange} placeholder="Enter your Password" required/>
      </FormGroup>
      <Label>Don't have an account?</Label><Link to='/signup'> Register</Link>
      <Button className='button_login bg-success'>SIGN IN</Button>
    </Form>
    </Col>
    </Row>
    </Container>
    </div>
  );
}
}
const mapStateProps = state => ({
  user : state.user
})

export default connect(mapStateProps)(Login);