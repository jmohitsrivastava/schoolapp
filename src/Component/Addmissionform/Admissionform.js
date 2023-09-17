import React, { useEffect, useState } from 'react'
import { Button,} from 'reactstrap';
import "./Admissionform.css";
import Footer from '../Footer';
import BASE_URL from '../../Services/helper';
import axios from 'axios';

export default function Admissionform() {

  useEffect(()=>{
    document.title="Add user";
  },[])

  const [user,setuser]=useState({});

  //for handel form
  const handelForm=(e)=>{
    
   postDatatoServer(user);

    e.preventDefault();
  }

  // for post data to serrver
  const postDatatoServer=(data)=>{
    console.log("setver");
    axios.post(`${BASE_URL}/public/user`,data).then(

      (response)=>{
            console.log(response);
            
            console.log("success");
      },(error)=>{
           console.log(error);
           console.log("error");
      }
    )
  }

  return (

    <div>
    <div id="mohit">
      
        <div className="bootstrap-wrapper" style={{paddingTop:"6vh"}} >
            <div className="container">

                <div className="row">

                    <div className="form col-md-6 offset-md-3">

            

                 <h2 className="text-center">Register Student</h2>

                

                 <form onSubmit={handelForm}>

                    <div className="formfiled">

                    <div className="mb-3">
                   <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input  type="text" className="form-control" id="exampleFormControlInput1" placeholder="your name" 
              onChange={(e)=>{
              setuser({...user,name:e.target.value})
            }}/>
                    </div>

                    <div className="mb-3">
                   <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name"
               onChange={(e)=>{
                setuser({...user,emailadd:e.target.value})
              }}/>
                    </div>

                    <div className="mb-3">
                   <label for="exampleFormControlInput1" className="form-label">Contact number</label>
                    <input  type="number" className="form-control" id="exampleFormControlInput1" placeholder="your contact number"
                     onChange={(e)=>{
                      setuser({...user,contactnum:e.target.value})
                    }}/>
                    </div>

                    <div className="mb-3">
               <label for="exampleFormControlTextarea1" className="form-label">Address</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your address" onChange={(e)=>{
                      setuser({...user,homeaddress:e.target.value})
                    }}/>
           </div>


                    <div>
                      <Button className="text-center bg-primary" type="submit">Submit</Button>
                      <Button className="text-center bg-dark" type="reset">Reset</Button>
                    </div>

                  

                </div>
                 </form>

                

                    </div>
                </div>

            </div>
        </div>
       
   </div>

   <Footer/>
   </div>
  )
}
