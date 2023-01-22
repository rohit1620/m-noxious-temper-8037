import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{border:"1px solid black"}}>
  <div class="container-fluid">
   <Link to='/' style={{textDecoration:"none"}}> <a class="navbar-brand" href="#" style={{fontSize:"35px",fontWeight:"bold",textDecoration:"none"}}>ROCS</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
       <Link to='/Women' style={{textDecoration:"none"}}> <a class="nav-link active" aria-current="page" href="#"
           style={{color:"black",fontWeight:"bold"}}>WOMEN</a></Link> 
        </li>
        <li class="nav-item">
          <Link to='/Men' style={{textDecoration:"none"}}> <a class="nav-link" href="#" style={{color:"black",fontWeight:"bold"}}>MEN</a></Link>
         
        </li>
        <li class="nav-item">
          <Link to='/Kids' style={{textDecoration:"none"}}><a class="nav-link" href="#" style={{color:"black",fontWeight:"bold"}}>KIDS</a></Link>
          
        </li>
        <li class="nav-item">
          <Link to='/Jibbitz' style={{textDecoration:"none"}}><a class="nav-link" href="#" style={{color:"black",fontWeight:"bold"}}>JIBBITZ CHARMS</a></Link>
          
        </li>
        <li class="nav-item">
          <Link to='/Crocs' style={{textDecoration:"none"}}> <a class="nav-link" href="#" style={{color:"black",fontWeight:"bold"}}>CROCS AT WORK</a></Link>
         
        </li>
        <li class="nav-item">
          <Link to='/Sale' style={{textDecoration:"none"}}>  <a class="nav-link" href="#" style={{color:"black",fontWeight:"bold"}}>SALE</a></Link>
        
        </li>
        <li class="nav-item">
        <Link to='/Featured' style={{textDecoration:"none"}}> <a class="nav-link" href="#" style={{color:"black",fontWeight:"bold"}}>FEATURED</a></Link>
         
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTr1SoTzf4Rr0KXMkcghKkg8J1YrfXVY_QtejteaqW66BKYUi60ZXhaBHg-fR_8BDK900&usqp=CAU" alt="" width="40px" height="40px" style={{marginRight:"20px",marginLeft:"20px"}}/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XKWeHYWNDemSIToNlr07OtD7_BmRd8NOU_fIe-Qc&s" alt="" width="40px" height="40px" style={{marginRight:"20px"}}/>
    </div>
  </div>
</nav>
  )
}

export default Navbar
