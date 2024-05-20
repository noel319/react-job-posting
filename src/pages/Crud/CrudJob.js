/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import axios from 'axios'
import {
    Spinner,Button, Modal, ModalHeader, ModalBody
  } from 'reactstrap';
import { Container } from 'reactstrap';
import {  Form, FormGroup, Label, Input, Table} from 'reactstrap';
import {connect} from 'react-redux'
import {addJob} from './../../redux/action/job'
import {getJob} from './../../redux/action/job'
import {updateJob} from './../../redux/action/job'
import {deleteJob} from './../../redux/action/job'
import {getCompany} from './../../redux/action/company' 
import {getCategories} from './../../redux/action/category'

class CrudJob extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen : false,
            isUpdateOpen : false,
            data : {},
            isLoading : true,
            next: false,
            previous: '',
            tot : '',
            updateData: {
              id: '',
              category: '',
              company: '',
              date_added: '',
              date_updated: '',
              desc_company: '',
              description: '',
              id_category: '',
              id_company: '',
              location: '',
              name: '',
              salary: '',
            },
        }
    }

    toggle = () => {
      this.setState({
        isOpen : !this.state.isOpen,
      })
    }

    componentDidMount(){
      this.getData()
      this.getCategory()  
      this.getCompany()
    }

      getCategory = () => {
        this.props.dispatch(getCategories()).then(item => console.log(item.action.payload.data.data))
      }

      getCompany = () => {
        this.props.dispatch(getCompany())
      }
      
      
      toggleupdate = (data)=>{
          this.setState({
            updateData: data,
            isOpenUpdate : !this.state.isOpenUpdate
          })
      }

  
      buttonPress = async(page)=>{
        this.setState({isLoading:false}) 
        this.getData()
      }  

      getData = async() => {
        await this.props.dispatch(getJob())
      }

      deleteData = async(id) => {
        if (window.confirm('Are you sure you want to save this thing into the database?')) {
        await this.props.dispatch(deleteJob(id))
        this.getData()
      }else{
        this.getData()
      }
      }

      // addJob = async(dataJob) => {
      //   const user = await axios.post('http://localhost:2000/job',(dataJob))
      //   return user.data 
      //  }

      addJob = async(dataJob) => {
        await this.props.dispatch(addJob(dataJob))
      }
     
       handlenameChange = event => {
        this.setState({ name: event.target.value });
      }
    
       handleDescriptionChange = event => {
         this.setState({ description: event.target.value });
       }
     
       handleCategoryChange = event => {
         this.setState({ id_category: event.target.value });
       }
    
       handleSalaryChange = event => {
        this.setState({ salary: event.target.value });
      }
    
      handleLocationChange = event => {
        this.setState({ location: event.target.value });
      }
    
      handleCompanyChange = event => {
        this.setState({ id_company: event.target.value });
      }
     
       handleSubmit = event => {
         event.preventDefault();
     
         const dataJob = {
           name : this.state.name,
           description: this.state.description,
           id_category : this.state.id_category,
           salary : this.state.salary,
           location : this.state.location,
           id_company : this.state.id_company
         };
     
         this.addJob(dataJob)
           .then(res => {
             alert('Success Insert Data')
             this.getData()
             this.cancelCourse()
             this.setState({isOpen : false})
           }).catch((err) => {
             console.log(err)
             return
           })
       }
      
       cancelCourse = () => { 
        document.getElementById("register").reset();
      }

      UpdateJob = async (id,dataJob) => {
        await this.props.dispatch(updateJob(id,dataJob))
      }

      handleSubmitUpdate = event => {
        event.preventDefault();
    
        const id = this.state.updateData.id
        console.log('id: '+id)
        const dataJob = {
          name : this.state.name,
          description: this.state.description,
          id_category : this.state.id_category,
          salary : this.state.salary,
          location : this.state.location,
          id_company : this.state.id_company
        };
        console.log(dataJob)
        this.UpdateJob(id,dataJob)
          .then(res => {
            alert('Success to Update')
            this.getData()
            this.setState({isOpenUpdate : false})
            return
          }).catch((err) => {
            console.log(err)
            return
          })
      }

    render(){
    return (
        <div>
       <Container>
        <button type="button" onClick={this.toggle} className="btn btn-primary" data-toggle="modal" style={{ marginLeft : '30px', marginTop : '10px', marginBottom : '10px' }}>
        <i className="fa fa-plus-square"> Add Data</i>
        </button>

    {this.state.isOpen&&( 
      <Modal isOpen={this.state.isOpen} toggle={this.toggle} className="">
        <ModalHeader toggle={this.toggle}>ADD JOB</ModalHeader>
        <ModalBody>
        <br></br>
        <Form id="register" method="post" onSubmit ={this.handleSubmit}>
    <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" onChange={this.handlenameChange} placeholder="Enter your name" required/>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description" id="description" onChange={this.handleDescriptionChange} placeholder="Enter your job description" required/>
      </FormGroup>
      <FormGroup>
        <Label for="id_category">Select Category</Label>
        <Input type="select" name="id_category" id="id_category" onChange={this.handleCategoryChange}>
        <option>SELECT CATEGORY</option>  
        {this.props.category.data.map( (item,index) =>
          <option key={index.toString()} value={item.id}>{item.name}</option>
        )}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="salary">Salary</Label>
        <Input type="number" name="salary" id="salary" onChange={this.handleSalaryChange} placeholder="Enter your salary" required/>
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input type="text" name="location" id="location" onChange={this.handleLocationChange} placeholder="Enter your salary" required/>
      </FormGroup>
      <FormGroup>
        <Label for="id_company">Select Company</Label>
        <Input type="select" name="id_company" id="id_company" onChange={this.handleCompanyChange}>
        <option>SELECT COMPANY</option>  
        {this.props.company.data.map( (item,index) =>
          <option key={index.toString()} value={item.id}>{item.name}</option>
        )}
        </Input>
      </FormGroup>
      <Button className='button_login bg-success'>Submit</Button>
    </Form>
        </ModalBody>
      </Modal>

        )}

      {
        this.props.job.isLoading&&(
        <div><Spinner style={{ width: '3rem', height: '3rem' }} type="grow" /></div>
      )}

    {!this.props.job.isLoading&&
    <React.Fragment>   
    {/* <Table responsive bordered>
    <thead>
      <tr>
        <th>Job Name</th>
        <th>Image Company</th>
        <th>Company</th>
        <th>Salary</th>
        <th>Location</th>
        <th>Date Updated</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody> */}
      
    {/* {this.props.job.data.map((v,i)=>(  
      <tr key={i.toString()}>
        <td>{v.name}</td>
        <td> <img  src={v.logo} alt={v.name} width="60px" height="60px"/></td>
        <td>{v.company}</td>
        <td>Rp.{v.salary}</td>
        <td>{v.location}</td>
        <td>{v.date_updated}</td>
        <td className="button-crud">   
        <Button className="card-text bg-success"  onClick={() => this.toggleupdate(v)}><i className="fa fa-edit"></i></Button>
        <Button className="card-text bg-danger" onClick={()=> this.deleteData(v.id)}><i className="fa fa-trash"></i></Button>
        </td>
      </tr>
    ))}
    </tbody>
  </Table>   */}
    {this.props.job.data.map((v,i)=>(  
    <div className="row no-gutters shadow-lg p-3 mb-5 bg-white rounded" key={i.toString()} >
    <div className="col-md-4">
      <img  src={v.logo} className="card-img App-img" alt={v.name} width="120px" height="160px"/>
    </div>
    
      <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" >{v.name}</h5>
        <p className="card-text"><small className="text-muted">{v.company}</small> | <small className="text-muted">Rp.{v.salary}</small> | <small className="text-muted">{v.location}</small></p>
        <p className="card-text">{v.description}</p>
        <p className="card-text"><small className="text-muted">{v.date_updated}</small></p>
        <Button className="card-text bg-success"  onClick={() => this.toggleupdate(v)}><i className="fa fa-edit"> Update </i></Button>
        <Button className="card-text bg-danger"style={{ marginLeft : '10px' }} onClick={()=> this.deleteData(v.id)}><i className="fa fa-trash"> Delete </i></Button>
      </div>
    </div>

   </div> 
  ))}
  </React.Fragment>

}

{this.state.isOpenUpdate &&(  

  <Modal isOpen={this.state.isOpenUpdate} toggle={this.toggleupdate}>
  <React.Fragment> 
  <ModalHeader toggle={this.toggleupdate}>EDIT JOB</ModalHeader>
  <ModalBody>
  <br></br>
  <Form id="edit" method="post" onSubmit ={this.handleSubmitUpdate}>
  <FormGroup>
      <Label for="name">Job Name</Label>
      <Input type="text" name="name" id="name" onChange={this.handlenameChange}  defaultValue={this.state.updateData.name} placeholder="Enter your name" required/>
    </FormGroup>
    <FormGroup>
      <Label for="description">Job Description</Label>
      <Input type="textarea" name="description" id="description" onChange={this.handleDescriptionChange} defaultValue={this.state.updateData.description} placeholder="Enter your job description" required/>
    </FormGroup>
    <FormGroup>
        <Label for="id_category">Select Category</Label>
        <Input type="select" name="id_category" id="id_category" onChange={this.handleCategoryChange}>
        <option>SELECT CATEGORY</option>  
        {this.props.category.data.map( (item,index) =>
          <option key={index.toString()} value={item.id} selected={this.state.updateData.category}>{item.name}</option>
        )}
        </Input>
      </FormGroup>
    <FormGroup>
      <Label for="salary">Salary</Label>
      <Input type="number" name="salary" id="salary" onChange={this.handleSalaryChange} defaultValue={this.state.updateData.salary} placeholder="Enter your salary" required/>
    </FormGroup>
    <FormGroup>
      <Label for="location">Location</Label>
      <Input type="text" name="location" id="location" onChange={this.handleLocationChange} defaultValue={this.state.updateData.location} placeholder="Enter your Location" required/>
    </FormGroup>
    <FormGroup>
        <Label for="id_company">Select Company</Label>
        <Input type="select" name="id_company" id="id_company" onChange={this.handleCompanyChange}>
        <option>SELECT COMPANY</option>  
        {this.props.company.data.map( (item,index) =>
          <option key={index.toString()} value={item.id}>{item.name}</option>
        )}
        </Input>
      </FormGroup>
    <Button className='button_login bg-success'>Submit</Button>
    </Form>
  </ModalBody>
  </React.Fragment> 
</Modal>

  )}      

<nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
    {
        this.state.previous === ' ' ? null :
        <li className="page-item">
         <a className="page-link" onClick={()=>this.buttonPress(this.state.previous)} tabindex="-1" aria-disabled="false">Previous</a>
        </li>
      }  
        <li className="page-item">
        {
        this.state.next === ' ' ? null :<a className="page-link" onClick={()=>this.buttonPress(this.state.next)} tabindex="-1">Next</a>
        }</li>
    </ul>
</nav>
</Container>
 </div>
)}
}

const mapStateProps = state => ({
  job : state.job,
  company : state.company,
  category : state.categories
})

export default connect(mapStateProps)(CrudJob)