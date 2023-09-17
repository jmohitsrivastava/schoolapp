import React, { Component } from 'react'
import './Home.css'
import 'animate.css';
import { Button } from 'reactstrap';
import {useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate=useNavigate();
  return (

    <>



    <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
   
    <div className="carousel-inner">
   
    <div className="carousel-item active" data-bs-interval="4000">
      <img src="https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="..."/>
      <div className="carousel-caption " >
        <h5 style={{fontWeight:"bold",}}>First slide label</h5>
        <button className="homebutton" type="button" onClick={()=> navigate("/about-us/ourpifile")}  >Explore</button>
      </div>
    </div>
   
    <div className="carousel-item" data-bs-interval="4000">
      <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="..."/>
      <div className="carousel-caption " >
        <h5 style={{fontWeight:"bold",}}>Second slide label</h5>
        <button className="homebutton" type="button" onClick={()=> navigate("/about-us/ourpifile")} >Explore</button>
      </div>
    </div>

    <div className="carousel-item" data-bs-interval="4000">
      <img src="https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="..."/>
      
      <div className="carousel-caption">
        <h5 >Third slide label</h5>
        <button  className="homebutton " type="button" onClick={()=> navigate("/about-us/ourpifile")}  >Explore</button>
      </div>

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden" >Next</span>
  </button>
</div>



    </>
    
  )
}
