/* esli nt-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios';
import React, {Component} from 'react';
import { withRouter } from "react-router";
import {Row, Col, Container, Button,Form, FormGroup, Label, Input,Card,Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Spinner } from 'reactstrap';
import {connect} from 'react-redux'
import {getJob} from './../redux/action/job'
import {getJobOrderBy} from './../redux/action/job'
import {getJobSearch} from './../redux/action/job'

class JobItems extends Component{

    constructor(props){
        super(props)
        this.state = {
            data : {},
            isLoading : true,
            next: false,
            previous: '',
            tot : '',
            mQuery : '',
            queryName : '',
            queryCompany : ''
        }
    }

    componentDidMount(){
      this.getData();
      }
      

    // getData = async(page)=>{
    //   const job = await axios.get(page !== undefined ? page:'http://localhost:2000/job')
    //   return job.data  
    // }

    getData = async(page) => {
      await this.props.dispatch(getJob(page !== undefined ? page : page))
    }

    goToDetail = (id)=>{
      this.props.history.push(`/detail/${id}`)
    }

    // buttonPress = async(page)=>{
    //   this.setState({isLoading:false}) 
    //   await axios.get(page !== undefined ? page:`http://35.175.244.140:8080/job?page=${page}`).then(data=>{
    //     this.setState({data,next:data.next,previous:data.prev,tot : data.total_data,isLoading:false})
    //   })
    // }  
    buttonPress = async(page)=>{
      this.getData(page)    
    }  

    queryNameChange = (e)=>{
      const queryName = e.target.value
      this.setState({queryName})
    }
    queryCompanyChange = (e)=>{
      const queryCompany = e.target.value
      this.setState({queryCompany})
    }
   
    // doSearch = async(nWord,cWord)=>{
    //  let page='http://localhost:2000/job?name='+nWord+'&company='+cWord;
    //   this.setState({isLoading:true})
    //   this.getData(page).then(data=>{
    //     this.setState({data,
    //       previous: data.prev,
    //       next: data.next,
    //       isLoading:false})
    //   })
    // }

    doSearch = async(name,company) => {
      await this.props.dispatch(getJobSearch(name,company))
    }

    mQueryOrderByChange = (e)=>{
      const mQuery = e.target.value
      this.setState({mQuery})
    }

    // doOrderBy = async(mQuery) => {
    //   let page=`http://localhost:2000/job?orderby=${mQuery}`
    //   this.setState({isLoading:true})
    //   this.getData(page).then(data=>{
    //     this.setState({data,
    //       previous: data.prev,
    //       next: data.next,
    //       isLoading:false})
    //   }).catch(err => {
    //     console.log(err)
    //   })
    //   console.log(mQuery)
    // }

    doOrderBy = async(mQuery) => {
      await this.props.dispatch(getJobOrderBy(mQuery))
    }

render() {
  
  const {queryName,queryCompany,mQuery} = this.state
  return (
    
    <div>
    <Form inline className="Search-header">
       {/* search {data.name} */}
      <FormGroup>
        <Input type="text" name="name" id="name" placeholder="Search by name" className ="form-control" 
        onChange={this.queryNameChange} value={queryName}  />
        <Input type="text" name="company" id="company" placeholder="Search by company" className ="form-control"
        onChange={this.queryCompanyChange} value={queryCompany} />

      <select className="form-control " id="orderby" onChange={this.mQueryOrderByChange} onClick={()=> this.doOrderBy(mQuery)}>
        <option value = " ">Sort By</option>
        <option value="name" >Name</option>
        <option value="company">Company</option>
        <option value="date_updated">Newest</option>
      </select>

        <Button className="btn btn-success " onClick={()=>this.doSearch(queryName,queryCompany)} >Search</Button>
      
      </FormGroup>
    </Form>

    <div>  

      {
        this.props.job.isLoading&&(
        <div><Spinner style={{ width: '3rem', height: '3rem' }} type="grow" /></div>
      )}

    {!this.props.job.isLoading&&
    
    <React.Fragment>
    {this.props.job.data.map((v,i)=>(  
    
    <div className="row no-gutters shadow-lg p-2 mb-3 bg-white rounded" key={i.toString()} >
      {/*  */}
    <div className="col-md-4">
      <img  src={v.logo} className="card-img App-img" alt={v.name} width="120px" height="160px" onClick={()=>this.goToDetail(v.id)}/>
    </div>
    
      <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title btn-link text-dark" onClick={()=>this.goToDetail(v.id)}>{v.name}</h5>
        <p className="card-text"><i className = "fa fa-building-o "> {v.company} </i></p>
        <p className="card-text"><i className="fa fa-money"> {v.salary}</i></p>
        <p className="card-text"><i className="fa fa-map-marker"> {v.location} </i></p>
        <p className="card-text"><small className="text-muted">{v.date_updated}</small></p>
      </div>
    </div>

   </div> 
  ))}
  </React.Fragment>
}

<nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
    {
        this.state.previous === ' ' ? null :
        // <li className="page-item">
        //  <a className="page-link" onClick={()=>this.buttonPress(this.props.job.prev)} tabindex="-1" aria-disabled="false">Previous</a>
        // </li>
        <Button color="primary" onClick={()=>this.buttonPress(this.props.job.prev)}> Previous </Button>
      }
      {
        this.state.next === ' ' ? <Button color="danger" disabled> Next </Button> :
        // <li className="page-item">
        // <a className="page-link" onClick={()=>this.buttonPress(this.props.job.next)} tabindex="-1">Next</a>
        // </li>
        <Button color="danger" onClick={()=>this.buttonPress(this.props.job.next)}> Next </Button>
      }
    </ul>
</nav>
</div>
</div>
     );
  }
};

const mapStateProps = state => ({
  job : state.job
})

export default connect(mapStateProps)(withRouter(JobItems))