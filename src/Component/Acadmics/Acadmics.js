import React from 'react'
import { Container } from 'reactstrap'
import {  Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Acadmics() {

  const Navigate=useNavigate();

  return (

    <div>


      <div  id="acadmics-bg">
      <Container>
       <div id="acadmics-buttons">
      <button id="btn1" className="acadmics-button mx-3" type="button" onClick={()=> Navigate("/academices/acadmics-card")}>Award</button>
      <button id="btn2"  className="acadmics-button mt-4 m-3 " type="button" onClick={()=> Navigate("/academices/holidayclender")}>Calender</button>
      <button id="btn3" className="acadmics-button mt-4 mx-3 " type="button" onClick={()=> Navigate("/academices/syllebas")}>Syllebas</button>
      </div>

        <Container>
        <div id="acadmics-card">
         <Outlet/>
       </div>
      
       </Container>

       </Container>

       </div>
    </div>
  )
}
