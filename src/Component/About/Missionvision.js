import React from 'react'
import "./About.css";
import { Button, Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';

export default function Missionvision() {
  return (
    <div>
      {/* carousel */}
     <div id="carouselExampleControls" className="carousel slide" data-bs-interval="false">

<div className="carousel-inner" id="missioncarousel">

{/* Our mission */}
  <div className="carousel-item active">

    <Card>

<CardBody>


  <Row>

<Col><img className="carsimg" src="https://img.freepik.com/free-photo/smiling-students-with-backpacks_1098-1220.jpg?w=900&t=st=1683289711~exp=1683290311~hmac=6e40126e383d456b1d9849ea2f9b1a48f8beae166d27ca98cd509190d79f1155" alt="" /></Col>

<Col><CardTitle tag="h2" style={{ textDecoration:"underline"}}>
    OUR MISSION
  </CardTitle>

  <CardText>
  The school with its motto "Art of Learning" has been serving the society in the field of education. Today it stands as a 'Repository of learning' and a patron of 'Quality Consciousness' devoted to fostering knowledge, self-discovery, human dignity and integrity. Distinction and diversity is the twin hallmarks of the school philosophy; educational leadership and scholarly achievement its mission. The school imparts holistic and quality education characterized by thoroughness, high principles and a freedom, that help the students to grow in responsibility, self-reliance and the ability to make wise decisions.
  </CardText>
 
</Col>
  </Row>
  </CardBody>
</Card>
  </div>


  {/* Our vision */}

  <div className="carousel-item">
  <Card>

<CardBody>


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


<div id="visionbutton">
<Button  color="primary" outline id="visionbuttonprev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">previous</Button>
<Button   color="info" outline className="mx-4 " data-bs-target="#carouselExampleControls" data-bs-slide="next">next</Button>
</div>

</div>

    </div>
  )
}
