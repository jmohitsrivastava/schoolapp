import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import BASE_URL from '../../Services/helper';
import { useNavigate } from 'react-router-dom';
import "./Loginform.css"


export default function Loginform(props) {

    const navigate=useNavigate();

    useEffect(()=>{
        document.title="Loginform";
      },[])
    
      const [data,setdata]=useState({});
    
      //for handel form
      const submitform=(e)=>{
        
       postDatatoServer(data);
    
        e.preventDefault();
      }
    
      

      // for post data to serrver
      const postDatatoServer=(data)=>{
        console.log("setver");
        axios.post(`${BASE_URL}/public/signin`,data).then(
    
          (response)=>{
                console.log(response.data);
                console.log(response.data.password)
                console.log("success");

                if(response.data.password==="yes" && response.data.username==="yes"){
                    console.log("ho gaya kaam");
                    props.data();
                    console.log(props.name);
                    try{
                        navigate("/foradmin");}catch{console.log("problem")}
                    
                }else{
                    console.log("kuch gad bad hai");
                    try{navigate("/login");}catch{console.log("problem")}
                }

                
          },(error)=>{
               console.log(error);
               console.log("error");
          }
        )
      }

  return (
    <div >


<div id="loginbg" >
     
     <div className='text-center' id="logintext"><h1>Login Form</h1></div>
     <div id="loginform">
    <Container >
    
        <Form onSubmit={submitform}>
        
            <FormGroup>
                <Label for="exampleEmail" className='text-light'>Email</Label>
                <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" 
                onChange={(e)=>{
                    setdata({...data,username:e.target.value})
                  }} />
            </FormGroup>

            <FormGroup>
                  <Label for="examplePassword" className='text-light'>Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" 
                   onChange={(e)=>{
                    setdata({...data,password:e.target.value})
                  }}/>
             </FormGroup>

          <div>
             <button id="btn3" className="acadmics-button mt-2 mx-3 " type="submit" >Submit</button>
            <button id="btn3" className="acadmics-button mt-4 mx-3 " type="reset" >Reset</button>
            </div>      
        </Form>
        
      
        </Container>
        </div>
     
        </div>
    </div>
  )
}
