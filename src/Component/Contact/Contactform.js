import React from 'react'
import { Button } from 'reactstrap'
import "./Contact.css";

export default function Contactform() {
  return (


    <div>

    <div >
      
      <div className="bootstrap-wrapper" style={{paddingTop:"10vh"}} >
          <div className="container" >

              <div className="row">

                  <div className="form col-md-1 offset-md-1" id="contactform">

          

               <h2 className="text-center">QUICK QUERY</h2>

              

               <form>

                  <div className="formfiled" >

                  <div class="mb-3">
                 <label for="exampleFormControlInput1" className="form-label font-weight-bold"><h5>Name</h5></label>
            <input  type="text" class="form-control" id="exampleFormControlInput1" placeholder="your name"/>
                  </div>

                  <div class="mb-3">
                 <label for="exampleFormControlInput1" className="form-label font-weight-bold"><h5>Email address</h5></label>
            <input  type="email" class="form-control" id="exampleFormControlInput1" placeholder="name"/>
                  </div>

                  <div class="mb-3">
                 <label for="exampleFormControlInput1" className="form-label "><h5>Subject</h5></label>
                  <input  type="text" class="form-control" id="exampleFormControlInput1" placeholder="subject"/>
                  </div>

                  <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"><h5>Message</h5></label>
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="type your message here"></textarea>
           </div>

                  <div className="text-center">
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
      
    </div>
  )
}
