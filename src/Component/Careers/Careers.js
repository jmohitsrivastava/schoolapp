import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container,Row, Table } from 'reactstrap';
import Footer from '../Footer';
import "./Careers.css"
import { Link } from 'react-router-dom';
import Careerscard from './Careerscard';
import Careerstable from './Careerstable';

export default function Careers() {
  return (
    <div  >
      <div id="careerbg">
          <Container>

            <div id="careercard" >
             <Careerscard/> 
             </div>

             <br></br>

             <Careerstable/>

          
<br></br>
<br></br>
<br></br>
<div>
  <p>Post Graduate with Montessori Training / TTC along with minimum 2 years of experience<br></br>Age : Not more than 30 years.</p>

  
  <br></br>
  <p><h5>Assistant Teachers:</h5>Chemistry, Math, Physics</p>

  <br></br>
  <p><h5>School Counsellor:</h5>Post Graduate in Psychology with relevant qualification in counsellling and minimum 5 years of experience in schools.</p>

  <br></br>
  <p><h5>Coaches:</h5>Athletics / Chess / Badminton / Cricket / Table Tennis / Basketball / Football / Gymnastics / Fitness Trainer / Yoga / P.T. / Karate
Qualification: Those who have played at least at State level will be given preference. Age not more than 35 years.
</p>

<br></br>
  <p><h5>Administrator:</h5>Graduates with administrative experience in schools only need to apply. Retired Professionals with similar experience may also apply.
<h8 style={{color:"green"}}> *Salary will not be a constraint for deserving candidates.</h8>
In the Subject Line please mention : Prefered Location, Category and Subject you specialize in.
Please apply online only, in the prescribed format given in our website :<Link style={{color:"green"}}> www.ptbrpacademy.com </Link>Only online application shall be accepted.</p>
  

</div>

</Container>

<Footer/>

</div>
    </div>
  )
}
