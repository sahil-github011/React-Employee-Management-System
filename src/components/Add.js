import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import employee from './Employee';
import uuid from 'react-uuid';

function Add() {
  const [id, setId] = useState('')
  const [empName, setEmpName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState(0);

  const history = useNavigate()


  const handleAdd = (e) => {
    e.preventDefault(); // avoid refreshing window

    const ids = uuid();
    console.log(ids)

    const uniqueId = ids.slice(-9, -1);
    console.log(uniqueId);

    employee.push({
      id:uniqueId,
      empName:empName,
      age:age,
      designation:designation,
      salary:salary
    })
    console.log(employee[uniqueId])
    history('/')
  }

  return (
    <div>
      <h1 className='text-primary text-center m-4'>Add Employee Management System</h1>
      <p className='p-2'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
      <Row>
        <Col md={5} className='text-center' >
          <img width={300} src='https://www.pngkey.com/png/full/305-3050875_employee-parking-add-employee-icon-png.png'></img>
        </Col>
        <Col md={6}>
          <Form className='border border-3  p-4 rounded '>
          
            <Form.Group className="mb-3 ">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name"
                onChange={(e) => setEmpName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="Enter your age"
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Enter your designation"
                onChange={(e) => setDesignation(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter your salary"
                onChange={(e) => setSalary(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e) => handleAdd(e)}>
              Add Employee
            </Button>
          </Form>
        </Col>
      </Row>

    </div>
  )
}

export default Add