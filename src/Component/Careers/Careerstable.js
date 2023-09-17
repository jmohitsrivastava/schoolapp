import React from 'react'
import { Table } from 'reactstrap'

export default function Careerstable() {
  return (
    <div>
       {/* table */}
       <Table>
        <thead>
            <tr>
      <th>
        
      </th>
      <th>
        
      </th>
      
    </tr>
  </thead>
  <tbody>
    <tr className="table-primary">
      <td>
      Subjects :English / Mathematics / Physics / Chemistry / Biology / History / Geography / Hindi / Bengali / Sanskrit /
      </td>
      
      <td>
 
      </td>
      
    </tr>
    <tr className="table-secondary">
      <td>
      Qualification:Post Graduate with Subject
      </td>
      <td>
        
      </td>
      
    </tr>
    <tr className="table-success">
      <td>
      Experience:Minimum 5 years at similar level
      </td>
      <td>
       
      </td>
      
    </tr>

    <tr className="table-danger">
      <td>
      Age:Not more than 40 years
      </td>
      <td>
       
      </td>
      
    </tr>

   {/* paragraph */}
   <h6 className="text-center "  style={{border:"2px solid black",borderRadius:"10px 10px 10px 10px",marginTop:"5px"}}>
    Salary and other allowances as per Pt. Babu Ram Pandey Academy Rules*</h6>
    
    <tr className="table-info">
      <td>
       Subject:English / Mathematics / Science / EVS / Social Studies / Hindi / Bengali
      </td>
      <td>
        
      </td>
      
    </tr>
    <tr className="table-light">
      <td>
        Qualification:Graduate with B.Ed.
      </td>
      <td>
        
      </td>
      
    </tr>
    <tr className="table-dark">
      <td>
        Exeperince:Minimum 5 years at similar level
      </td>
      <td>
        
      </td>
      
    </tr>

    <tr className="table-danger">
      <td>
      Age:Not more than 35 years
      </td>
      <td>
       
      </td>
      
    </tr>
  </tbody>

  
   {/* paragraph */}
   <h6 className="text-center " style={{border:"2px solid black",borderRadius:"10px 10px 10px 10px",marginTop:"5px"}}>
    Salary and other allowances as per Pt. Babu Ram Pandey Academy Rules*</h6>
</Table>
    </div>
  )
}
