import React, { useState } from 'react';
import {
    Form
    , Button
} from 'react-bootstrap'
import './Style/AddProduct.css'

const AddProduct = (prod) => { 
    const types=[
        {
            "typeName": "Shoe"
        },
        {
            "typeName": "Jacket"
        },
        {
            "typeName": "Sock"
        },
        {
            "typeName":"T-shirt"
        },
        {
            "typeName":"Hoodie"
        }
    ]
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }

    return(
        <Form className="container borderShadow borderPadding" onSubmit={handleSubmit}>
                <h2>ADD PRODUCT</h2>
                <Form.Group className="style-flex">
                    <Form.Group className="mb-3 flex1-item" controlId="formBasicEmail">
                        <Form.Label>Product Type</Form.Label>
                        <Form.Select required aria-label="Default select example" name="itemType" onChange={handleChange}>
                            <option value={types[0].typeName}>{types[0].typeName}</option>
                            <option value={types[1].typeName}>{types[1].typeName}</option>
                            <option value={types[2].typeName}>{types[2].typeName}</option>
                            <option value={types[3].typeName}>{types[3].typeName}</option>
                            <option value={types[4].typeName}>{types[4].typeName}</option>
                        </Form.Select>
                    </Form.Group>
                    

                    <Form.Group className="mb-3 flex2-item" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" name="itemName" placeholder="Enter name" onChange={handleChange}/>
                    </Form.Group>
                </Form.Group>      
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control required type="text" name="description" placeholder="Write some description ..." onChange={handleChange}/>
        </Form.Group>
        
        <Form.Group className="style-flex">
            <Form.Group className="mb-3 flex1-item" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control required type="number" name="itemPrice" onChange={handleChange}/>
                </Form.Group>
                

                <Form.Group className="mb-3 flex2-item" controlId="formBasicEmail">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control required type="text" name="itemImg" onChange={handleChange}/>
                </Form.Group>
        </Form.Group>   

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        
    );
};

export default AddProduct;