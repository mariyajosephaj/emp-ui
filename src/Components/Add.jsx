import React, { useState } from 'react'
import { saveEmployeeAPI } from '../services/allAPI'

const Add = ({getAllEmployees}) => {

  const [isToggle, setIsToggle] = useState(false)

  const[employeeDetails,setEmployeeDetails]= useState({
    empName:"",email:"",empStatus:""
})
const toggleDiv = () => {
  setIsToggle(!isToggle)
}
const handleSubmit = (e) =>{
  e.preventDefault()
}

const addEmployee= async ()=>{

  const { empName, email, empStatus } = employeeDetails
  
  if(empName && email && empStatus){
    // store todo permanently
    try{
     const result= await saveEmployeeAPI(employeeDetails)
     console.log(result.data);
        if (result.status >= 200 && result.status < 300) {
          setIsToggle(!isToggle)
          getAllEmployees()
          alert("Employee details added successfully")

     }
     
    }catch{
      console.log(err);
      
    }

  }
  else{
    alert("Please add Employee details!!!")
  }
  
}
  return (
    <>
    <div className="container text-center align-items-center">
    <button onClick={toggleDiv} type='button' className='btn btn-primary text-right position-absolute top-0 end-0 mt-5 me-5'>Add New Employee</button>
    {
                isToggle &&
                <div className='mt-2 align-items-center'>
        <form className='border rounded ' onSubmit={handleSubmit} >
          <div className='mt-5' style={{width:'100%'}}>
          <div className="field mb-3 " >
            <label className='me-2'>Name</label>
            <input className='ms-2'
              type="text"
              name="name"
              placeholder="Name"
              onChange={e => setEmployeeDetails({...employeeDetails, empName: e.target.value })}
              
            />
          </div>
          <div className="field">
            <label className='me-2'>Email</label>
            <input className='ms-2'
              type="text"
              name="email"
              placeholder="Email"
              onChange={e => setEmployeeDetails({...employeeDetails, email: e.target.value })}
              
            />
          </div>
          <div className="field mt-3">
            <label className='me-2'>Status</label>
            <select className='ms-2' style={{width:"190px"}} onChange={e => setEmployeeDetails({...employeeDetails, empStatus: e.target.value })}>
             <option selected>Status</option>
             <option value="active">Active</option>
             <option value="inactive">InActive</option>
             
            </select>
          </div>
          <button className="button mt-3" onClick={addEmployee}>Add</button>
          </div>
        </form>
                </div>
            }
    
     
        
    </div>
    </>
  )
}

export default Add