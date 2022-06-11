import React from 'react';
import {
    Form
    ,Row
    ,Col
    ,ListGroup
}from 'react-bootstrap';
import OrderSuccess from './OrderSuccess';
import YourOrders from './YourOrders';
import { useState } from "react";
import './Style/YourOrders.css';
const Orders = () => {

    const fullName = "Nguyen Van A";
    const total = 10;

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
    //   console.log(inputs);
    //   console.log(inputs.address);
    //   console.log(total);
    //   console.log(fullName);
    }

    return(
        <div className='container'>
                <Row>
                    <Col className='category bg-w ' sm={8}>
                        <ListGroup className=' borderShadow'>
                            <YourOrders/>
                        </ListGroup>
                    </Col>
                    <Col sm={4} className="sticky">
                        <Form className='info-user-name' onSubmit={handleSubmit}>
                            <div className='borderShadow' >
                                <h5>User's Information</h5>
                                <Form.Group className="mb-3" controlId="fullname">
                                    <Form.Label>FullName</Form.Label>
                                    <Form.Control type="text" 
                                        placeholder="Enter Full Name" 
                                        name = 'fullname'
                                        value={fullName} 
                                        onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" 
                                        placeholder="Phone Number" 
                                        name = 'phonenumber'
                                        required
                                        onChange={handleChange}
                                        />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" rows={3} 
                                        placeholder="Address"
                                        required
                                        name='address'
                                        
                                        onChange={handleChange}/>
                                </Form.Group>
                            </div>
                            <div className='borderShadow'>
                                <div className='cart-summary'>
                                    <div className='summary-item row'>
                                        <div className='col-9'>
                                            <p className='sumary-label'>Free shipping</p>
                                        </div>
                                        <div className='text-right col-3 '>
                                            <p className='summary-value fl-r'>$0</p>
                                        </div>
                                    </div>
                                    <div className=' summary-item row'>
                                        <div className='col-9'>
                                            <p className='sumary-label'>Total</p>
                                        </div>
                                        <div className='text-right col-3 '>
                                            <p className='summary-value fl-r'>${total}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='number'>
                                    <OrderSuccess fullName={fullName} total={total} inputs={inputs}/>
                                </div>
                            </div>
                        </Form>

                    </Col>
                </Row>
        </div>

    )
};

export default Orders;
