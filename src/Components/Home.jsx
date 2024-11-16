import React, { useEffect, useState } from 'react'

import { getEmployeeAPI, removeEmployeeApi } from '../services/allAPI'
import Add from './Add'
import { FiEdit } from "react-icons/fi"
import { MdDelete } from "react-icons/md"
import { Link } from 'react-router-dom'

const Home = () => {
 

    const[allEmployees,setAllEmployees]= useState([])
    useEffect(()=>{
        getAllEmployees()
      },[])

    const getAllEmployees = async()=>{

        try{
    
          const response = await getEmployeeAPI()
          if(response.status>=200 && response.status<300){
            console.log(response.data);
             setAllEmployees(response.data)
            
          }
    
        }catch(err){
          console.log(err);
          
        }
    
      }

      const deleteTodo = async (id) => {
        await removeEmployeeApi(id)
        getAllEmployees()
    }
      
  return (
    
    <>
    {/* <button type='button' className='btn btn-primary text-right position-absolute top-0 end-0 mt-5 me-5'>Add New Employee</button> */}

    <div className="container text-center align-items-center mt-5">
      
    <Add getAllEmployees={getAllEmployees}/>
        <h1>Employee Details</h1>
        <table className="table table-bordered rounded shadow">
             <thead className='table-dark text-white'>
             <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>STATUS</td>
                <td>Action</td>
                
            </tr>

             </thead>
             <tbody>

              {
                allEmployees?.length>0 ?
                allEmployees?.map(emp=>(
                  <tr key={emp?.id}>
                  <td>{emp?.id}</td>
                  <td>{emp?.empName}</td>
                  <td>{emp?.email}</td>
                  <td>{emp?.empStatus}</td>
                  <td><span>
                        
                        {/* <Link to={`/update/${emp.id}`} getAllEmployees={getAllEmployees}>
                        <FiEdit className='list-item-icons me-2' id='edit' title='Edit'/></Link> */}
                        <MdDelete className='list-item-icons' id='delete' title='Delete' onClick={() => deleteTodo(emp?.id)} />
                        
                      </span></td>
                </tr>
                ))
                :
                <tr>No Employees</tr>
                
              }

             </tbody>
           </table>

    </div>
    </>
  )
}

export default Home