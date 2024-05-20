  /* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'

import {
    Spinner,Button,Container
  } from 'reactstrap';
import { Form, FormGroup, Label, Input , Modal, ModalHeader, ModalBody,Table} from 'reactstrap';
import {connect} from 'react-redux'
import {addCompany} from './../../redux/action/company'
import {getCompany} from './../../redux/action/company'
import {updateCompany} from './../../redux/action/company'
import {deleteCompany} from './../../redux/action/company'

class CrudCompany extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen : false,
            isOpenUpdate : false,
            data : {},
            isLoading : true,
            next: false,
            previous: '',
            itemId : props.match.params.id,
            updateData: {
              description: '',
              id: '',
              location: '',
              logo: '',
              name: '',
            },
        }
    }

    toggle = () => {
      this.setState({isOpen : !this.state.isOpen})
    }

    componentDidMount(){
        this.getData();
        }
   
      // getData = ()=>{
      //   axios.get('http://localhost:2000/company').then(res => {
      //     this.setState({data: res.data ,isLoading: false})
      //   }) 
      // }
      getData = async() => {
        await this.props.dispatch(getCompany())
      }
      
      deleteData = async(id) => {
        if (window.confirm('Are you sure you want to save this thing into the database?')) {
          await this.props.dispatch(deleteCompany(id))
        }else{
          this.setState({isOpen : false})
        }
        this.getData()
      }

  
      buttonPress = async(page)=>{
        this.setState({isLoading:false}) 
        this.getData(page).then(data=>{
          this.setState({data,isLoading:false})
        })
      }  

      //update
      toggleupdate = (data)=>{
        this.setState({
          isOpenUpdate : !this.state.isOpenUpdate,
          updateData: data,
        })
      }

      updateCompany = async(id,datacompany) =>{
        await this.props.dispatch(updateCompany(id,datacompany))
      }

       handleSubmitUpdate = event => {
        event.preventDefault();
    
       const id = this.state.updateData.id
   
       const formData = new FormData();
       formData.append('name',event.target.name.value)
       formData.append('logo', event.target.logo.files[0])
       formData.append('location', event.target.location.value)
       formData.append('description', event.target.description.value)
    
     
        this.updateCompany(id,formData)
          .then(res => {
            alert('Success to Update Data')
            this.getData()
            this.setState({isOpenUpdate : false})
          }).catch((err) => {
            console.log(err)
            return
          })
      }
      
      
      //end update

      //add data
      // addCompany = async(datacompany) => {
      //   const user = await axios.post('http://localhost:2000/company',(datacompany))
      //   return user.data 
      //  }
      
      addCompany = async(dataCompany) => {
        await this.props.dispatch(addCompany(dataCompany))
       }

      handlenameChange = event => {
        this.setState({ name: event.target.value });
      }
    
       handleDescriptionChange = event => {
         this.setState({ description: event.target.value });
       }
    
      handleLocationChange = event => {
        this.setState({ location: event.target.value });
      }
    
      handleLogoChange = event => {
        this.setState({ logo: event.target.files[0] });
      }
    
       handleSubmit = event => {
         event.preventDefault();
     
        const formData = new FormData();
        formData.append('name', event.target.name.value)
        formData.append('logo', event.target.logo.files[0])
        formData.append('location', event.target.location.value)
        formData.append('description', event.target.description.value)
     
         this.addCompany(formData)
           .then(res => {
            // this.setState({data : res.data})
            alert('Success to Add Data Company')
            this.getData()
            this.cancelCourse()
            this.setState({isOpen : false})
          }).catch((err) => {
             console.log(err)
             return
           })  
       }
    
       cancelCourse = () => { 
        document.getElementById("updateCompany").reset();
      }
      //end add data
  
    render(){
      // console.log("toggle : "+ this.state.id)
     
    return (
        <div>
          <Container>
        <button type="button" className="btn btn-primary"  onClick={this.toggle} data-toggle="" style={{ marginLeft : '30px', marginTop : '10px', marginBottom : '10px' }}>
        <i className="fa fa-plus-square"> Add Data</i>
        </button>
        
      {this.state.isOpen &&(  
      <Modal isOpen={this.state.isOpen} toggle={this.toggle} className="">
        <ModalHeader toggle={this.toggle}>ADD COMPANY</ModalHeader>
        <ModalBody>
        <br></br>
        <Form id="updateCompany" method="post" onSubmit ={this.handleSubmit}>
        <FormGroup>
       <Label for="name">Name</Label>
      <Input type="text" name="name" id="name" onChange={this.handlenameChange} placeholder="Enter your name" required/>
    </FormGroup>
    <FormGroup>
    <Label for="logo">Logo</Label>
    <Input type="file" name="logo" id="logo" onChange={this.handleLogoChange} placeholder="Enter your Logo" required/>
    </FormGroup>
    <FormGroup>
    <Label for="location">Location</Label>
    <Input type="text" name="location" id="location" onChange={this.handleLocationChange} placeholder="Enter your location" required/>
    </FormGroup>
    <FormGroup>
    <Label for="description">Description</Label>
    <Input type="textarea" name="description" id="description" onChange={this.handleDescriptionChange} placeholder="Enter your company description" required/>
    </FormGroup>
    <Button className='button_login bg-success'>Submit</Button>
</Form>
        </ModalBody>
      </Modal>
 
        )}

        {this.props.company.isLoading&&(
        <div><Spinner style={{ width: '3rem', height: '3rem' }} type="grow" /></div>
      )}

    {!this.props.company.isLoading&&
    
    <React.Fragment>
    { 
      this.props.company.data.map((v,i)=>(  
      //   <Table responsive> 
      //   <thead>
      //     <tr>
      //       <th>Company Name</th>
      //       <th>Image</th>
      //       <th>Location</th>
      //       <th>Action</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     <tr>
      //      <td>{v.name}</td>
      //      <td><img  src={v.logo} alt={v.name}/></td>
      //      <td>{v.location}</td>
      //      <td className="button-crud">
      //       <Button className="card-text bg-success" onClick={() => this.toggleupdate(v)} ><i className="fa fa-edit"></i></Button>
      //       <Button className="card-text bg-danger" onClick={()=> this.deleteData(v.id)}><i className="fa fa-trash"> </i></Button>
      //      </td>
      //     </tr>
      //   </tbody>
      // </Table>  

    <div className="row no-gutters shadow-lg p-3 mb-5 bg-white rounded" key={i.toString()} >
    <div className="col-md-4">
      <img  src={v.logo} className="card-img App-img" alt={v.name} width="120px" height="160px"/>
    </div>
    
      <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" >{v.name}</h5>
        <p className="card-text"><small className="text-muted">{v.location}</small></p>
        <p className="card-text">{v.description}</p>
        <Button className="card-text bg-success" onClick={() => this.toggleupdate(v)} ><i className="fa fa-edit"> Update </i></Button>
        <Button className="card-text bg-danger"style={{ marginLeft : '10px' }} onClick={()=> this.deleteData(v.id)}><i className="fa fa-trash"> Delete </i></Button>
  
      </div>
  </div>

   </div> 
  ))}
    {/* update modal */}


{this.state.isOpenUpdate &&(  
  
  <Modal isOpen={this.state.isOpenUpdate} toggle={this.toggleupdate} >
     <React.Fragment> 
    <ModalHeader toggle={this.toggleupdate}>EDIT COMPANY</ModalHeader>
    <ModalBody>
    <br></br>
    <Form id="update" method="post" onSubmit ={this.handleSubmitUpdate}>
    <FormGroup>
   <Label for="name">Name</Label>
  <Input type="text" name="name" id="name" defaultValue={this.state.updateData.name}  onChange={this.handlenameChange} placeholder="Enter your name" required/>
</FormGroup>
<FormGroup>
<Label for="logo">Logo</Label>
<Input type="file" name="logo" id="logo" onChange={this.handleLogoChange} placeholder="Enter your Logo" />
</FormGroup>
<FormGroup>
<Label for="location">Location</Label>
<Input type="text" name="location" id="location" onChange={this.handleLocationChange} defaultValue={this.state.updateData.location} placeholder="Enter your location" required/>
</FormGroup>
<FormGroup>
<Label for="description">Description</Label>
<Input type="textarea" name="description" id="description" onChange={this.handleDescriptionChange} defaultValue={this.state.updateData.description} placeholder="Enter your company description" required/>
</FormGroup>
<Button className='button_login bg-success'>Submit</Button>
</Form>
    </ModalBody>
    </React.Fragment> 
  </Modal>

    )}  
  </React.Fragment>

}

</Container>
 </div>

    
  
    )
    
    }
  
}

const mapStateProps = state => ({
  company : state.company
})

export default connect(mapStateProps)(CrudCompany);