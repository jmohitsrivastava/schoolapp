import React from 'react'
import Footer from '../Footer'
import Leftabout from "./Leftabout"
import "./About.css";
import "../../index.css";
import { Col, Row } from 'reactstrap';
import { Outlet } from 'react-router-dom';
export default function Aboutus() {
  return (


    <div >

      <div id="aboutsectionbacimg">
     
     <Row id="aboutrow">
      <Col  md={3}><Leftabout/></Col>
      <Col md={8} id="ourprofilerightcolom"><Outlet/></Col>
     
     </Row>
   
        <Footer/>

        </div>
    </div>
  )
}
