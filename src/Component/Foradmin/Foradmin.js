import React, { useEffect, useState } from 'react'
import "./Foradmin.css"
import { Container } from 'reactstrap'
import Admissionforadmin from './Admissionforadmin'
import axios from 'axios'
import BASE_URL from '../../Services/helper'
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom'

export default function Foradmin(props) {

   const navigate=useNavigate();

    const getAllUsers=()=>{
        axios.get(`${BASE_URL}/public/user`).then(

            (response)=>{
              console.log(response)
              setuser(response.data);
              
            },(error)=>{
                console.log(error)
            }

        );
    };

    const updateUser=(id)=>{
   setuser(user.filter((c) =>c.id !==id));
  
    }

    const logout=()=>{
      props.data();
      navigate("/about-us/ourpifile")
     
       }

    const [user,setuser]=useState([
        {}
    ])

    useEffect(()=>{
     
        getAllUsers();
        
    },[])

  return (
<>
    
    <div id="bgforadmin">
    <Container>
    <div >
       
    <div id="foradminbuttons">
       <button   className="buttonadmin mx-5" type="button" >Admission's</button>
       <button   className="buttonadmin mx-5  " type="button" >Qurey's</button>
       <button   className="buttonadmin mx-5  " type="button" onClick={logout} >Logout</button>
       </div>

       </div>

     <div id="tableforshow">
       
       {user.length>0 ? user.map((item)=><Admissionforadmin user={item} update={updateUser}/>):"no cources"

       }
     

       </div>
       </Container> 


    </div>

    <Footer/>


    </>
  )
}
