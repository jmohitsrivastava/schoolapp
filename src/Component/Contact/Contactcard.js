import React from 'react'
import {  Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

export default function Contactcard(props) {
  return (
  <>

    <div>

      <Card
  className="my-2"
  style={{
    width: '18rem' }}>
  <CardHeader className="text-center">
    <img src={props.url} alt="" style={{height:"50px",width:"50px",backgroundSize:"cover"}}/>
  </CardHeader>
  <CardBody>
    <CardTitle tag="h5">
      {props.tittle}
    </CardTitle>
    <CardText>
      {props.text}
    </CardText>
    
  </CardBody>
  
</Card>

    </div>

    </>
  )
}
