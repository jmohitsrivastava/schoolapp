import React, { useEffect } from 'react'
import {  Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap'
import "./About.css";
export default function Header() {

  useEffect(()=>{
    document.title="Home";
  },[])

  return (
  
    <div >
        <Card id="profilecard" >

     <CardBody >


  <Row>

<Col md={5}><img id="profilecardimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNofDeymYIece5QEl4VAXCCtruE1skQo3TGRZuRoWJ&s" alt="image not found" /></Col>

<Col ><CardTitle tag="h2" style={{ textDecoration:"underline"}}>
    OUR Profile:
  </CardTitle>


  <CardText >
  " Rays shines before the Sun", quote is quite apt for arswati Bal shiksha Mandir inter college. In its foundation year, by the hurculian efforts from Pt. Santosh Pandey a renowned social activist has touched the galaxy of achievements. Time to time visionary advices from management has created a new scenario of success. Management's valuable thoughts and determined working capacity has erupted various talents in our institution. Just after having get the affiliation from U.P.Board our growth is stunning because our belief is to provide quality education at minimal cost. We are situated in the rural, economically and socially backward area of Kusmara,post-Rendhar-Madhogarh-Jalaun. The Phrase "JUNGLE MEIN MANGAL" is quite apt for our institute as we are providing quality education at this backward area. We are fulfilling the initiative taken by founder to uplift our backward rural India and produce leaders from these areas.
. To be in sync with the world that has become a global village and to be in tune with the world we have integrated our teaching with the latest technology and have made the entire teaching-learning experience more effective and enjoyable.
  </CardText>
  
</Col>
  </Row>
  </CardBody>
</Card>
    </div>


  )
}

