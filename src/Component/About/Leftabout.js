import React, { useEffect, useState } from 'react'
import "./About.css";
import { Link } from 'react-router-dom';
import { BsEyeFill, BsFillPersonFill} from "react-icons/bs";
import { BsFillAirplaneFill} from "react-icons/bs";
import { BsFillBootstrapFill} from "react-icons/bs";
import { BsLightbulbFill} from "react-icons/bs";
import { BsWhatsapp} from "react-icons/bs";
import { Button } from 'reactstrap';




export default function Menus() {

  const [open,setOpen]=useState(false);
  const handelClick=()=>{
    setOpen(!open)
  }
  
  return (

    
    <div><div id={open?"toggelbutton":"toggelbutton2"}><span  className=" fs-4" onClick={handelClick}><BsFillBootstrapFill/></span></div> 
    <div id="leftabout" className="container-fluid">
     
        <div className="row">

          
          <div id={open?"sidebackground":"sidebackground2"} className="col-auto col-md-20 d-flex justify-content-between flex-column" style={{height:"91vh"}}>

        <div className="icon ">

            <a className="text-decoration-none text-white d-flex align-itemcenter ms-3 mt-1">
            
            <span  className=" fs-4" onClick={handelClick}><BsFillBootstrapFill/></span>

            <span  className="hide-text ms-1 fs-4">Brand</span>
            

            </a>

          <hr className="text-secondary"/>
                
           <ul className="nav nav-pills flex-column  ">

            <li className=" nav-item text-white fs-4 my-1">
              <a href="#" className="nav-link text-white fs-5 " aria-current="page">
                <i className="bi bi-speedometer2"></i>
                <Link className=" text-decoration-none text-white" to="/about-us/ourpifile" ><BsFillPersonFill/></Link>
                <Link id="our-profiletext" className="hide-text text-decoration-none text-white ms-2" to="/about-us/ourpifile" >Ourprofile</Link>
              
                </a>
            </li>

            <li className="nav-item text-white fs-4 my-1">
              <a href="#" className="nav-link text-white fs-5 " aria-current="page">
                <i className="bi bi-house"></i>
                <Link className="text-decoration-none text-white " to="/about-us/missionvision" ><BsFillAirplaneFill/></Link>
                <Link className="hide-text text-decoration-none text-white ms-2" to="/about-us/missionvision" >Mission-vision</Link>
                </a>
            </li>

            <li className="nav-item text-white fs-4 my-1">
              <a href="#" className="nav-link text-white fs-5 " aria-current="page">
                <i className="bi bi-table"></i>
                <Link className="text-decoration-none text-white " to="/about-us/principalview" ><BsEyeFill/></Link>
                <Link className="hide-text text-decoration-none text-white ms-2" to="/about-us/principalview" >Principal-view</Link>
                </a>
            </li>

            <li className=" nav-item text-white fs-4 my-1">
              <a href="#" className="nav-link text-white fs-5 " aria-current="page">
                <i className="bi bi-people"></i>
                <Link className="text-decoration-none text-white " to="/about-us/managerview"><BsLightbulbFill/></Link>
                <Link className="hide-text text-decoration-none text-white ms-2" to="/about-us/managerview">Manger-view</Link>
                </a>
            </li>

            <li id="forlogin" className=" nav-item text-white fs-4 my-1" >
              <a href="#" className="nav-link text-white fs-5 " aria-current="page">
                <i className="bi bi-people"></i>
                <Link className="text-decoration-none text-white " to="/admin-page"><BsWhatsapp/></Link>
                <Link className="hide-text text-decoration-none text-white ms-2" to="/foradmin">Admin-Login</Link>
                </a>
            </li>


           </ul>
        </div> 
      
          </div>
        </div>

    </div>





    </div>
  )
}
