import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import employee from './Employee';
import Button from 'react-bootstrap/Button';
import { FaUserEdit, FaUserPlus, FaUserTimes  } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const history = useNavigate();
    const handleDelete = (id) => {
        const index = (employee.map(item => item.id).indexOf(id));  // to get index position
        employee.splice(index,1);  // to remove index from array
        console.log(employee);  // array position with remaining items
        history('/')
    }   

    const handleEdit = (id, empName, age, designation, salary) => {
        localStorage.setItem('id',id);
        localStorage.setItem('empName', empName);
        localStorage.setItem('age', age);
        localStorage.setItem('designation', designation);
        localStorage.setItem('salary', salary);
    }
    return (
        <>
                <h1 className='text-primary text-center m-4'>Employee Management System</h1>
                <p className='p-2'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
            <Link to={'/add'}><Button className='m-2' variant="success">Add  <FaUserPlus></FaUserPlus></Button>{' '}</Link>
            
            <h3 className='my-5 mx-2'>List of Employees</h3>
            <Table className='m-2' striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee && employee.length > 0 ?
                        employee.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.empName}</td>
                                <td>{item.age}</td>
                                <td>{item.designation}</td>
                                <td>{item.salary}</td>
                                <td>
                                    <Link to={'/edit'}><Button onClick={() => handleEdit(item.id, item.empName,
                                                            item.age,item.designation,item.salary)}
                                                              variant="primary"><FaUserEdit></FaUserEdit></Button></Link>
                                    <Button variant="danger" onClick={() => handleDelete(item.id)}><FaUserTimes></FaUserTimes></Button>
                                </td>
                                
                            </tr>
                        )):'No data available'
                    }
                    
                </tbody>
            </Table>

        </>
    )
}

export default Home