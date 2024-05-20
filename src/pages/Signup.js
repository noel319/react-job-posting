import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container } from 'reactstrap';
import {addUser} from './../redux/action/user'
import { connect } from 'react-redux';

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : {},
      username : '',
      email : '',
      password : ''
    }
  }
 
  // addRegister = async(account) => {
  //   const user = await axios.post('http://localhost:2000/user/signup',(account))
  //   return user.data 
  //  }
  addRegister = async (account) =>{
    await this.props.dispatch(addUser(account))
  }
 
   handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  }

  handleSelectUserChange = event => {
    this.setState({ selectUser : event.target.value });
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
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
       username : this.state.username,
       email: this.state.email,
       password : this.state.password,
       name : this.state.name,
     };
 
     this.addRegister(account)
       .then(res => {
        alert('Success Register')    
        this.props.history.push('/login');
       }).catch((err) => {
         alert('Email Already Exist,Try Another Email')
         console.log(err)
         return
       })
   } 


  render(){
  return (
    <div className='Login-design text-dark shadow p-3 mb-5'>
    <Container>  
    <Label for="register" className='text-Login text-center'>REGISTER</Label>
    <br></br>
    <Form id="register" method="post" onSubmit ={this.handleSubmit}>
    <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" onChange={this.handleUsernameChange} placeholder="Enter your Username" required/>
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" onChange={this.handleNameChange} placeholder="Enter your Name" required/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" onChange={this.handleEmailChange} placeholder="Enter your Email" required/>
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="Password" onChange={this.handlePasswordChange} placeholder="Enter your Password" required/>
      </FormGroup>
      <FormGroup></FormGroup>
      <Label>Already has an account?</Label><Link to='/login'> Sign in</Link>
      <Button className='button_login bg-success'>SIGN UP</Button>
    </Form>
    </Container>
    </div>
  );
}
}

const mapStateProps = state => ({
  user : state.user
})

export default connect(mapStateProps)(Signup);