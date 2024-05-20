import React,{Component} from 'react';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom'
import {  Breadcrumb, BreadcrumbItem} from 'reactstrap';

import CrudCompany from './Crud/CrudCompany'
import CrudJob from './Crud/CrudJob'
import Footer from './../components/Footer'

class PostJobs extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
  return (
    
    <div>

     <BrowserRouter>

     <div>
      <Breadcrumb tag="nav" listTag="div">
      <BreadcrumbItem tag="a" ><Link to='/postjobs/crudjob'>Job</Link></BreadcrumbItem>
        <BreadcrumbItem tag="a"><Link to='/postjobs/crudcompany'>Company</Link></BreadcrumbItem>
      </Breadcrumb>
    </div>  
    <Switch>
        <Route path={'/postjobs/crudcompany'} component={CrudCompany}></Route>
        <Route path={'/postjobs/crudjob'} component={CrudJob}></Route>
    </Switch>
    </BrowserRouter>
    <Footer/>

    </div>
    
    
  );
}
}
export default PostJobs;