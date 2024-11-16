import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"



// add employee
export const saveEmployeeAPI = async (employeeDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/employeeDetails`,employeeDetails)
    }

    // /get all employees

export const getEmployeeAPI = async (employeeDetails)=>{
    return await commonAPI("GET",`${SERVERURL}/employeeDetails`,employeeDetails)
    }

    // delete employee

export const removeEmployeeApi = async (id) => {
    return await commonAPI("DELETE", `${SERVERURL}/employeeDetails/${id}`, {})
}

// edit employee

export const updateEmployeeApi = async ( employeeDetails) => {
    return await commonAPI("PUT", `${SERVERURL}/employeeDetails/${employeeDetails.id}`, employeeDetails)
}
// export const updateContactAPI = async (contactDetails)=>{
//     return await commonAPI("PUT",`${SERVERURL}/contacts/${contactDetails.id}`,contactDetails)
// }