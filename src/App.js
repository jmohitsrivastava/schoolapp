
import './App.css';

import Navbar from './Component/Navbar/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Component/Home';

import Aboutus from './Component/About/Aboutus';
import Acadmics from './Component/Acadmics/Acadmics';
// import Ourprofile from './Component/About/Ourprofile';
import Missionvision from './Component/About/Missionvision';
import Ourpifile from './Component/About/Ourpifile'
import Principalview from './Component/About/Principalview';
import Mangerview from './Component/About/Mangerview';
import Careers from './Component/Careers/Careers';
import Admissionform from './Component/Addmissionform/Admissionform';
import Contact from './Component/Contact/Contact';
import Acadmicscard from './Component/Acadmics/Acadmicscard';
import Holidayclender from './Component/Acadmics/Holidayclender';
import syllebas from './Component/Acadmics/syllebas';
import Loginform from './Component/Loginform/Loginform';
import Foradmin from './Component/Foradmin/Foradmin';
import { useEffect, useState } from 'react';


function App() {

 

 const [i,seti]=useState(true);
  console.log(i+"jjj");
  
  function changei(){
      seti(false);
      console.log(i);
      
  }

  function logout(){
    seti(true);
    console.log(i);
    
}

  return (
   
   <>
    
    

   <Router>
   
   <Navbar/>
   <Routes>
   <Route path="/" Component={Home} exact/>
   <Route path="/career" Component={Careers} exact/>
   <Route path="/about-us" Component={Aboutus} exact>
      <Route path="ourpifile" Component={Ourpifile} exact/>
      <Route path="missionvision" Component={Missionvision} exact/>
      <Route path="principalview" Component={Principalview} exact/>
      <Route path="managerview" Component={Mangerview} exact/>
   </Route>

   <Route path="/academices" Component={Acadmics} exact>
        <Route path="acadmics-card" Component={Acadmicscard} exact/>
        <Route path="holidayclender" Component={Holidayclender} exact/>
        <Route path="syllebas" Component={syllebas} exact/>
   </Route>

   <Route path="/admission" Component={Admissionform} exact/>
   <Route path="/contact" Component={Contact} exact/>
   <Route path="/login" Component={Loginform}  exact/>
   <Route path="/foradmin" Component={()=>(i===true)?<Loginform name={i} data={changei}/>:<Foradmin name={i} data={logout} />} exact/>


   </Routes>
   

   
    

   </Router>

    </>
  );
}

export default App;
