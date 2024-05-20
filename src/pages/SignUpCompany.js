import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container } from 'reactstrap';

export default class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : {},
      username : '',
      email : '',
      password : ''
    }
  }
 
  addRegister = async(account) => {
    const user = await axios.post('http://localhost:2000/user/signup',(account))
    return user.data 
   }
 
   handleUsernameChange = event => {
    this.setState({ username: event.target.value });
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
       password : this.state.password
     };
 
     this.addRegister(account)
       .then(res => {
         console.log(res.status);
         console.log(res.data)
         if(res.status === 200){
            this.props.history.push('/login');
         }else if(res.status === 404){
          alert('Email Already Exist,Try Another Email')  
         }
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
    <Label for="register" className='button_login text-center'>REGISTER COMPANY</Label>
    <br></br>
    <Form id="register" method="post" onSubmit ={this.handleSubmit}>
    <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" onChange={this.handleUsernameChange} placeholder="Enter your Username" required/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" onChange={this.handleEmailChange} placeholder="Enter your Email" required/>
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="Password" onChange={this.handlePasswordChange} placeholder="Enter your Password" required/>
      </FormGroup>
      <Label>Already has an account?</Label><Link to='/login'> Sign in</Link>
      <Button className='button_login bg-success'>SIGN UP</Button>
    </Form>
    </Container>
    </div>
  );
}
}