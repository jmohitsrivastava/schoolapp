import React from 'react'
import {  Col, Container, Row } from 'reactstrap'
import Contactcard from './Contactcard';
import "./Contact.css";
import Footer from '../Footer';
import Contactform from './Contactform';

export default function Contact() {
  return (

    <div id="contactbg">
        
        <div id="firstcont">
        <Container >

         <div >
            <Row className="pt-3" >
                <Col className="text-center contactcards"><Contactcard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdpjBf9jK1TrcRDvcWNrr3nMKI0nJ0rNggZeneHA&s" tittle="ADDRESS" text="sarswati Bal shiksha Mandir inter college Kusmara-Navali-Jalaun Uttar Pradesh" /></Col>
                <Col className="text-center contactcards"><Contactcard url="https://cdn-icons-png.flaticon.com/512/455/455705.png" tittle="PHONE NUMBER" text="Principal Contact no.6394988784
                 Manager Contact No. 9415924778
                Office Contact no.9838218116" /></Col>
                <Col className="text-center contactcards"><Contactcard url="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" tittle="EMAIL ADDRESS" text="gsbsmickusmara@gmail.com 70124@cbseshiksha.in www.sbsmickusmara.com<"/></Col>
            </Row>

        </div>
    

        </Container>

        </div>

        <Container>

        <div id="contactmapdiv" ClassName="mx-5">
         <h1 >Our location</h1>   
        <iframe id="contactmap"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48116.6186405575!2d79.09417958998544!3d26.151700338877042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976372f99beadf1%3A0x8aa6ca5ea1f37d36!2sRendhar%2C%20Uttar%20Pradesh%20285121!5e0!3m2!1sen!2sin!4v1683395345510!5m2!1sen!2sin" width="1000" height="300" style={{border:"2px solid black",borderRadius:"10px 10px 10px 10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <Contactform/>

        </Container>

        <Footer/>
      
    </div>
  )
}

