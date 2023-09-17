import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';
import "./Acdmics.css";

export default function Acadmicscard() {
  return (

    <div>


      <div id="acdmics-cardadjust">
            <Card >

<CardBody>


<Row >

<Col md={5}>
<img id="profilecardimg" src="https://www.citypng.com/public/uploads/preview/hd-black-and-gold-certificate-award-template-png-31625765263ihy09nyzle.png" alt="" />
</Col>

<Col><CardTitle tag="h2" style={{ textDecoration:"underline"}}>
Awards:
<hr/>
<hr/>
</CardTitle>


<CardText>

   <ul>
       <li><strong>Scholar Badge</strong> – At the end of the academic year, a child will be awarded a certificate of merit for academic excellence in all the three terms (15A+grades or a combination of O and A+).</li>
       <li><strong>Certificate of Academic Excellence</strong> – At the end of the academic year, a child will be awarded a certificate of merit for academic excellence in all the three terms (15A+grades or a combination of O and A+).</li>
       <li><strong> – At the end of the academic year, a child will be awarded a certificate of merit for academic excellence in all the three terms (15A+grades or a combination of O and A+).</strong>– At the end of the academic year a certificate will be awarded to students securing 100% attendance, along with the final report card.</li>
       <li><strong>Special Attendance Award</strong>– A special attendance award will be given to students who have secured 100% attendance at the end of each level. (Class II, III & IV) at the end of class IV.</li>
       <li><strong>Good Conduct Certificate </strong>– A certificate for good conduct ( exemplary behaviour, being helpful to teachers and classmates, responsibility etc) will be given at the end of the academic session.</li>
       <li><strong>Special Award</strong>– A special award (consistent effort) will be given to students for showing improvement in academics throughout the academic year.</li>
   </ul>

</CardText>

</Col>

</Row>
</CardBody>
</Card>
</div> 
    </div>
  )
}
