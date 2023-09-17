import React from 'react'
import { Card, CardBody, CardText, Container,
  } from 'reactstrap'
import BASE_URL from '../../Services/helper';
import axios from 'axios';



export default function Admissionforadmin({user,update}) {
 
  const deleteUser=(id)=>{
    axios.delete(`${BASE_URL}/public/user/${id}`).then(
      (responce)=>{
        console.log(id);
        console.log(responce);
        update(id);
      },(error)=>{
         console.log(error);
      }
    )
  }

  return (

    <div>
      
    <Card id="cardbodyforadmin">
        <CardBody >
          
    <Container className="text-center">
        <CardText className="text-colour"> {user.name}</CardText>
        <CardText className="text-colour">{user.contactnum}</CardText>
        <CardText className="text-colour">{user.emailadd}</CardText>
        <CardText className="text-colour">{user.homeaddress}</CardText>
        

       <button style={{backgroundColor:"#ddd007",color:"black"}}   className="buttonadmin" type="button" onClick={()=>deleteUser(user.id)}>Delete</button>
       
        
</Container>       
           

        </CardBody>

    </Card>

    

    </div>
  )
}
