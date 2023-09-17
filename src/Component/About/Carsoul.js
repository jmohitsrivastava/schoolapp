import React from 'react'
import "./About.css";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap';

export default function Carsoul(props) {
  return (
    <div>
      {/* carousel */}
     <div id="carouselExampleControls" className="carousel slide" data-bs-interval="false">

<div className="carousel-inner" id="missioncarousel">

  <div className="carousel-item active">

    <Card>

<CardBody>


  <Row>

<Col><img className="carsimg" src={props.url} alt="" /></Col>

<Col><CardTitle tag="h5">
    Card title
  </CardTitle>
  <CardSubtitle
    className="mb-2 text-muted"
    tag="h6"
  >
    Card subtitle
  </CardSubtitle>
  <CardText>
       {props.text} 
  </CardText>
 
</Col>
  </Row>
  </CardBody>
</Card>
  </div>

  <div className="carousel-item">
  <h1>mmmmmmmmm</h1>
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
