import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import employee from './Employee';

function Edit() {

    const [id, setId] = useState('')
    const [empName, setEmpName] = useState('');
    const [age, setAge] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState(0);

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setEmpName(localStorage.getItem('empName'));
        setAge(localStorage.getItem('age'));
        setDesignation(localStorage.getItem('designation'));
        setSalary(localStorage.getItem('salary'));
    },[])
    // console.log('id',id); 
    // console.log(empName)
    // console.log(age)
    // console.log(designation)
    // console.log(salary)

    const index = employee.map(item => item.id).indexOf(id);
    console.log(index)

    const history = useNavigate()
    const handleUpdate = (e) => {
        e.preventDefault(); // avoid refreshing window
        let emp
         = employee[index]

        console.log(emp)

        emp.id = id;
        emp.empName = empName;
        emp.age = age;
        emp.designation = designation;
        emp.salary = salary;
        console.log(emp)

        history('/');
    }
    return ( 
        <>
            <h1 className='text-primary text-center m-4'>Update Employee Management System</h1>
            <p className='p-2'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
            <Row>
                <Col md={5} className='text-center' >
                    <img width={300} src='https://www.pngkey.com/png/full/305-3050875_employee-parking-add-employee-icon-png.png'></img>
                </Col>
                <Col md={6}>
                    <Form className='border border-3  p-4 rounded '>
                        <Form.Group className="mb-3 " >
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Id" 
                                value={id}
                                onChange = {(e) => setId(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" 
                                value={empName}
                                onChange = {(e) => setEmpName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter your age" 
                                value={age}
                                onChange = {(e) => setAge(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter your designation" 
                                value={designation}
                                onChange = {(e) => setDesignation(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" placeholder="Enter your salary" 
                                value={salary}
                                onChange = {(e) => setSalary(e.target.value)}
                                required
                            />
                        </Form.Group>



                        <Button variant="primary" type="submit" onClick={(e) => handleUpdate(e)}>
                            Update
                        </Button>
                    </Form>
                </Col>
            </Row>

        </>
    )
}

export default Edit