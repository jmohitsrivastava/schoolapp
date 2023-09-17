import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {

  const navigate=useNavigate();

  return (   
    <>

    <div className="bg-dark">
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item mx-3">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
           
        </li>

         <li className="nav-item mx-3">
          <Link className="nav-link active text-light" aria-current="page" to="/about-us/ourpifile">About Us</Link>
        </li>

         <li className="nav-item mx-3">
          <Link className="nav-link active text-light" aria-current="page" to="/academices/acadmics-card">Academices</Link>
        </li>

         <li className="nav-item mx-3">
          <Link className="nav-link active text-light" aria-current="page" to="/career">Careers</Link>
        </li>

      </ul>

      <div>
      {/* <Button id="button"  onClick={()=> navigate("/admission")}>Admission</Button>
      <Button className="mx-3" outline onClick={()=> navigate("/contact")}>Contact</Button> */}

       <button className="button" type="button" onClick={()=> navigate("/admission")}>Admission</button>
       <button className="button mx-3 bg-success " type="button" onClick={()=> navigate("/contact")}>Contact</button>
       
      </div>

    </div>
  </div>
</nav>
    
  
  </div>

  </>   
  );
}
