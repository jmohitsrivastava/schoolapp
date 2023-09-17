import React from 'react';
import { Card, CardBody, CardText, CardTitle, Col,Row } from 'reactstrap';
import "./About.css";
export default function Header() {

 
  return (
    <div>
<div >
<Card >

<CardBody >


  <Row>

<Col><img className="carsimg" src="https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg" alt="" /></Col>

<Col><CardTitle tag="h2" style={{ textDecoration:"underline"}}>
    OUR VISSION:
  </CardTitle>

  
  <CardText>
  Our Vision is to see beyond the narrow walls of the classrooms and textbooks and promote out of the box thinking to empower every student to master the challenges of today and shape the worlds of tomorrow. We believe that both teachers and parents play an important role in the growth and development of children and it is only through open communication, fruitful discussion that we can together lay a strong foundation for our children.
. To be in sync with the world that has become a global village and to be in tune with the world we have integrated our teaching with the latest technology and have made the entire teaching-learning experience more effective and enjoyable.
  </CardText>
 
</Col>
  </Row>
  </CardBody>
</Card>

</div>

     </div>
  )
}
