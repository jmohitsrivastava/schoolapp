import React from 'react'
import { Container } from 'reactstrap'
import "./Careers.css";
import { Card, CardBody, CardText, CardTitle, Col,Row, } from 'reactstrap';

export default function Careerscard() {
  return (
    <div>  
      <Card >

  <CardBody  >


<Row>

<Col md={5}>
  <img id="profilecardimg" src="https://i.pinimg.com/originals/b6/6f/05/b66f059bd87fc00c2913e16332bff55b.png" alt="" />
  </Col>

<Col><CardTitle tag="h2" style={{ textDecoration:"underline"}}>
CARRERS:
<hr/>
<hr/>
</CardTitle>


<CardText>
The following personnel are required for the Academic Session 2021-22
Pt. Babu Ram Pandey Academy is inter College, established. We require the following personnel in the Academic Session 2021-22. The selection procedure will involve written test, interview and demonstration classes. Applicants must have sound academic background, excellent communication skills in English, experience in teaching the relevant classes, experience in co-curricular activities, preferably in CBSE/ICSE schools.
<h5>Head Mistress / Vice Principal</h5>
Post Graduate with B.Ed, excellent communication skills, proficiency in Computers with 10 years teaching experience with at least 3 years as Supervisor / Academic Head.
</CardText>

</Col>
</Row>
</CardBody>
</Card>
      
    </div>
  )
}
