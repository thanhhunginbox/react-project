import React from 'react';
import {
    Button
    ,Modal
} from 'react-bootstrap'
function MyVerticallyCenteredModal(props) {
  console.log(props.inputs);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order Success
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Thank you for shopping with us at The Fashion Store</h4>
          <p>
            This is details about your order:          
          </p>
          <ul>
            <li>Full Name: {props.fullName} </li>
            <li>Phone Number: {props.inputs ? props.inputs.phonenumber : 'not'}</li>
            <li>Address: {props.inputs ? props.inputs.address : 'not'}</li>
            <li>Total: ${props.total}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function OrderSuccess({fullName, total, inputs}) {
    const [modalShow, setModalShow] = React.useState(false);
    console.log(inputs);
    return (
      <>
        <Button type='submit' variant="primary" onClick={() => setModalShow(true)}>
          Submit {inputs.address} {fullName}
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          fullName={fullName} total={total} inputs={inputs}
        />
      </>
    );
  }
  
export default OrderSuccess;
